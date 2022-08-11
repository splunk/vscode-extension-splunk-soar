import * as path from 'path';
import * as vscode from 'vscode';
import * as os from 'os'

import { packageApp, uploadApp } from '../commands/apps/deploy';
import { directoryContainsApp, validateApp } from '../commands/apps/validate';


interface CustomBuildTaskDefinition extends vscode.TaskDefinition {
	cwd?: string
}

export class DeployTaskProvider implements vscode.TaskProvider {
	static CustomBuildScriptType = 'soarapp';
	private tasks: vscode.Task[] | undefined;

	private sharedState: string | undefined;

	constructor(private workspaceRoot: string, private context: vscode.ExtensionContext, private outputChannel: vscode.OutputChannel) { 
		this.context = context
		this.outputChannel = outputChannel
	}

	public async provideTasks(): Promise<vscode.Task[]> {
		return this.getTasks();
	}

	public resolveTask(_task: vscode.Task): vscode.Task | undefined {
		const definition: CustomBuildTaskDefinition = <any>_task.definition;
		return this.getTask(definition.cwd ? definition.cwd : this.workspaceRoot , definition);
	}

	private getTasks(): vscode.Task[] {
		if (this.tasks !== undefined) {
			return this.tasks
		}

		this.tasks = [];
		this.tasks!.push(this.getTask());
		return this.tasks;
	}

	private getTask(cwd?: string, definition?: CustomBuildTaskDefinition): vscode.Task {

		if (definition === undefined) {
			definition = {
				type: DeployTaskProvider.CustomBuildScriptType,
			};
		}

		let task = new vscode.Task(definition, vscode.TaskScope.Workspace, `soarapp`,
            DeployTaskProvider.CustomBuildScriptType, new vscode.CustomExecution(async (): Promise<vscode.Pseudoterminal> => {
				return new CustomBuildTaskTerminal(this.workspaceRoot, definition?.cwd ? definition.cwd : '.', this.context, this.outputChannel);
			}));
		
		task.group =  {"isDefault": true, "id": "build"}
		return task
	}
}

export class CustomBuildTaskTerminal implements vscode.Pseudoterminal {
	private writeEmitter = new vscode.EventEmitter<string>();
	onDidWrite: vscode.Event<string> = this.writeEmitter.event;
	private closeEmitter = new vscode.EventEmitter<number>();
	onDidClose?: vscode.Event<number> = this.closeEmitter.event;

	private fileWatcher: vscode.FileSystemWatcher | undefined;

	private cwd: string
	private outputChannel: vscode.OutputChannel

	constructor(private workspaceRoot: string, cwd: string, private context: vscode.ExtensionContext, outputChannel: vscode.OutputChannel) {
		this.cwd = cwd
		this.context = context
		this.outputChannel = outputChannel
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

            // tar working directory to temporary directory, get base64 repr, post to api, wait for response.
			this.writeEmitter.fire('Starting build...\r\n');

			let appPath = path.join(this.workspaceRoot, this.cwd)

			if (!directoryContainsApp(appPath)) {
				vscode.window.showErrorMessage("Could not find SOAR App for deploy task")
				return
			}

			let validationResult = validateApp(appPath)
			this.writeEmitter.fire(validationResult + "\r\n")

			let tmpDir = os.tmpdir()

            let outPath = tmpDir + "/tmpapp.tgz"
			let base = path.basename(appPath) 
			this.writeEmitter.fire(`Packaging app located in: ${base}\r\n`)
			let packageDispose = vscode.window.setStatusBarMessage("$(loading~spin) Packaging App...")
			let packageLocation = await packageApp(appPath, outPath)            
			packageDispose.dispose()
	
			this.writeEmitter.fire(`Local App Bundle: ${packageLocation}\r\n`);

			let uploadDispose = vscode.window.setStatusBarMessage("$(loading~spin) Uploading App...")

			try {
				let res = await uploadApp(this.context, this.outputChannel, packageLocation)
				uploadDispose.dispose()
				vscode.window.setStatusBarMessage("$(pass-filled) Successfully Uploaded App", 3000)
				await vscode.commands.executeCommand('splunkSoar.apps.refresh');

				if (res) {
					this.writeEmitter.fire(JSON.stringify(res.data) + "\r\n");
					this.closeEmitter.fire(0);	
				}
				resolve()

			} catch(err: any) {
				uploadDispose.dispose()
				vscode.window.setStatusBarMessage("$(error) Error uploading app", 3000)
				vscode.window.showErrorMessage(JSON.stringify(err))
				this.writeEmitter.fire(JSON.stringify(err.message));
				this.closeEmitter.fire(0);
				resolve()
			}

		});
	}
}