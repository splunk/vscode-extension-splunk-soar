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
	/**
	 * The build flavor. Should be either '32' or '64'.
	 */
	flavor: string;

	/**
	 * Additional build flags
	 */
	flags?: string[];
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
		const flavor: string = _task.definition.flavor;
		if (flavor) {
			const definition: CustomBuildTaskDefinition = <any>_task.definition;
			return this.getTask(definition.flavor, definition.flags ? definition.flags : [], definition);
		}
		return undefined;
	}

	private getTasks(): vscode.Task[] {
		if (this.tasks !== undefined) {
			return this.tasks;
		}
		// In our fictional build, we have two build flavors
		const flavors: string[] = ['32', '64'];
		// Each flavor can have some options.
		const flags: string[][] = [['watch', 'incremental'], ['incremental'], []];

		this.tasks = [];
		flavors.forEach(flavor => {
			flags.forEach(flagGroup => {
				this.tasks!.push(this.getTask(flavor, flagGroup));
			});
		});
		return this.tasks;
	}

	private getTask(flavor: string, flags: string[], definition?: CustomBuildTaskDefinition): vscode.Task {
		if (definition === undefined) {
			definition = {
				type: DeployTaskProvider.CustomBuildScriptType,
				flavor,
				flags
			};
		}
		return new vscode.Task(definition, vscode.TaskScope.Workspace, `${flavor} ${flags.join(' ')}`,
            DeployTaskProvider.CustomBuildScriptType, new vscode.CustomExecution(async (): Promise<vscode.Pseudoterminal> => {
				// When the task is executed, this callback will run. Here, we setup for running the task.
				return new CustomBuildTaskTerminal(this.workspaceRoot, flavor, flags, () => this.sharedState, (state: string) => this.sharedState = state);
			}));
	}
}

class CustomBuildTaskTerminal implements vscode.Pseudoterminal {
	private writeEmitter = new vscode.EventEmitter<string>();
	onDidWrite: vscode.Event<string> = this.writeEmitter.event;
	private closeEmitter = new vscode.EventEmitter<number>();
	onDidClose?: vscode.Event<number> = this.closeEmitter.event;

	private fileWatcher: vscode.FileSystemWatcher | undefined;

	constructor(private workspaceRoot: string, private flavor: string, private flags: string[], private getSharedState: () => string | undefined, private setSharedState: (state: string) => void) {
	}

	open(initialDimensions: vscode.TerminalDimensions | undefined): void {
		// At this point we can start using the terminal.
		if (this.flags.indexOf('watch') > -1) {
			const pattern = path.join(this.workspaceRoot, 'customBuildFile');
			this.fileWatcher = vscode.workspace.createFileSystemWatcher(pattern);
			this.fileWatcher.onDidChange(() => this.doBuild());
			this.fileWatcher.onDidCreate(() => this.doBuild());
			this.fileWatcher.onDidDelete(() => this.doBuild());
		}
		this.doBuild();
	}

	close(): void {
		// The terminal has been closed. Shutdown the build.
		if (this.fileWatcher) {
			this.fileWatcher.dispose();
		}
	}

	private async doBuild(): Promise<void> {
		return new Promise<void>((resolve) => {

            // tar working directory to temporary directory, get base64 repr, post to api, wait for response.

			this.writeEmitter.fire('Starting build...\r\n');

            let tmpDir = os.tmpdir()

        

			let isIncremental = this.flags.indexOf('incremental') > -1;
			if (isIncremental) {
				if (this.getSharedState()) {
					this.writeEmitter.fire('Using last build results: ' + this.getSharedState() + '\r\n');
				} else {
					isIncremental = false;
					this.writeEmitter.fire('No result from last build. Doing full build.\r\n');
				}
			}

            let outPath = tmpDir + "/tmpapp.tgz"
            
            const filterFiles = (path: any, entry: any) => {
                if (path.includes("venv") || path.includes("__pycache__") || path.includes(".git") || path.includes(".mypy_cache") || path.includes(".DS_Store") || path.includes("./.pytest_cache") || path.includes(".vscode")) {
                    return false
                }
                return true
            }

			let base = path.basename(this.workspaceRoot) 
            tar.create({file: outPath, gzip: true, cwd: path.join(this.workspaceRoot, "../"), filter: filterFiles}, [base]).then(
				(_: any) => {
                    const appFile = fs.readFileSync(outPath, {encoding: 'base64'})
                    let client = getConfiguredClient()
                    client.installApp(appFile).then(res => {
                        this.writeEmitter.fire("Installed App\n API Response\n")
                        this.writeEmitter.fire(JSON.stringify(res.data));
						this.closeEmitter.fire(0);
						resolve()
                    }).catch(function(err) {
                        console.log(err)
                    })
                }
            )

		});
	}
}