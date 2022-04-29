/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as path from 'path';
import * as vscode from 'vscode';
import * as os from 'os'
import * as tar from 'tar'
import * as fs from 'fs'
import { getConfiguredClient } from '../soar/client';

interface CustomBuildTaskDefinition extends vscode.TaskDefinition {
}

export class DeployTaskProvider implements vscode.TaskProvider {
	static CustomBuildScriptType = 'soarapp';
	private tasks: vscode.Task[] | undefined;

	// We use a CustomExecution task when state needs to be shared across runs of the task or when 
	// the task requires use of some VS Code API to run.
	// If you don't need to share state between runs and if you don't need to execute VS Code API in your task, 
	// then a simple ShellExecution or ProcessExecution should be enough.
	// Since our build has this shared state, the CustomExecution is used below.
	private sharedState: string | undefined;

	constructor(private workspaceRoot: string) { }

	public async provideTasks(): Promise<vscode.Task[]> {
		return this.getTasks();
	}

	public resolveTask(_task: vscode.Task): vscode.Task | undefined {
		const definition: CustomBuildTaskDefinition = <any>_task.definition;
		return this.getTask(definition);
	}

	private getTasks(): vscode.Task[] {
		if (this.tasks !== undefined) {
			return this.tasks
		}

		this.tasks = [];
		this.tasks!.push(this.getTask());
		return this.tasks;
	}

	private getTask(definition?: CustomBuildTaskDefinition): vscode.Task {
		if (definition === undefined) {
			definition = {
				type: DeployTaskProvider.CustomBuildScriptType,
			};
		}

		return new vscode.Task(definition, vscode.TaskScope.Workspace, `soarapp`,
            DeployTaskProvider.CustomBuildScriptType, new vscode.CustomExecution(async (): Promise<vscode.Pseudoterminal> => {
				// When the task is executed, this callback will run. Here, we setup for running the task.
				return new CustomBuildTaskTerminal(this.workspaceRoot);
			}));
	}
}

class CustomBuildTaskTerminal implements vscode.Pseudoterminal {
	private writeEmitter = new vscode.EventEmitter<string>();
	onDidWrite: vscode.Event<string> = this.writeEmitter.event;
	private closeEmitter = new vscode.EventEmitter<number>();
	onDidClose?: vscode.Event<number> = this.closeEmitter.event;

	private fileWatcher: vscode.FileSystemWatcher | undefined;

	constructor(private workspaceRoot: string) {
	}

	open(initialDimensions: vscode.TerminalDimensions | undefined): void {
		this.doBuild();
	}

	close(): void {
		// The terminal has been closed. Shutdown the build.
		if (this.fileWatcher) {
			this.fileWatcher.dispose();
		}
	}

	private async doBuild(): Promise<void> {
		return new Promise<void>(async (resolve) => {
			let client = getConfiguredClient()

            // tar working directory to temporary directory, get base64 repr, post to api, wait for response.
			let packageDispose = vscode.window.setStatusBarMessage("$(loading~spin) Packaging App...")
			this.writeEmitter.fire('Starting build...\r\n');

            let tmpDir = os.tmpdir()

            let outPath = tmpDir + "/tmpapp.tgz"
            
            const filterFiles = (path: any, entry: any) => {
                if (path.includes("venv") || path.includes("__pycache__") || path.includes(".git") || path.includes(".mypy_cache") || path.includes(".DS_Store") || path.includes("./.pytest_cache") || path.includes(".vscode")) {
                    return false
                }
                return true
            }

			let base = path.basename(this.workspaceRoot) 
			this.writeEmitter.fire(`Packaging app located in: ${base}\r\n`)

			let result = await tar.create({file: outPath, gzip: true, cwd: path.join(this.workspaceRoot, "../"), filter: filterFiles}, [base])
			packageDispose.dispose()

			let uploadDispose = vscode.window.setStatusBarMessage("$(loading~spin) Uploading App...", 10000)

			try {
				const appFile = fs.readFileSync(outPath, {encoding: 'base64'})
				let res = await client.installApp(appFile)
				uploadDispose.dispose()
				vscode.window.setStatusBarMessage("$(pass-filled) Successfully Uploaded App", 3000)
				this.writeEmitter.fire(JSON.stringify(res.data));
				this.closeEmitter.fire(0);
				resolve()

			} catch(err) {
				this.writeEmitter.fire(JSON.stringify(err.response.data));
				this.closeEmitter.fire(0);
				resolve()
			}

		});
	}
}