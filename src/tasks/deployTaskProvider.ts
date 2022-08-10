import * as path from 'path';
import * as vscode from 'vscode';
import * as os from 'os'
import * as tar from 'tar'
import * as fs from 'fs'
import { getClientForActiveEnvironment } from '../soar/client';
import ignore from 'ignore'
import { directoryContainsApp, validateApp } from '../commands/apps/deploy';
import { group } from 'console';

interface CustomBuildTaskDefinition extends vscode.TaskDefinition {
	cwd?: string
}

export class DeployTaskProvider implements vscode.TaskProvider {
	static CustomBuildScriptType = 'soarapp';
	private tasks: vscode.Task[] | undefined;

	private sharedState: string | undefined;

	constructor(private workspaceRoot: string, private context: vscode.ExtensionContext) { 
		this.context = context
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
				return new CustomBuildTaskTerminal(this.workspaceRoot, definition?.cwd ? definition.cwd : '.', this.context);
			}));
		
		task.group =  {"isDefault": true, "id": "build"}
		return task
	}
}

class CustomBuildTaskTerminal implements vscode.Pseudoterminal {
	private writeEmitter = new vscode.EventEmitter<string>();
	onDidWrite: vscode.Event<string> = this.writeEmitter.event;
	private closeEmitter = new vscode.EventEmitter<number>();
	onDidClose?: vscode.Event<number> = this.closeEmitter.event;

	private fileWatcher: vscode.FileSystemWatcher | undefined;

	private cwd: string

	constructor(private workspaceRoot: string, cwd: string, private context: vscode.ExtensionContext) {
		this.cwd = cwd
		this.context = context
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
			let client = await getClientForActiveEnvironment(this.context)

            // tar working directory to temporary directory, get base64 repr, post to api, wait for response.
			let packageDispose = vscode.window.setStatusBarMessage("$(loading~spin) Packaging App...")
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
            

			let excludeFilesPath = path.join(appPath, 'exclude_files.txt')

			let excludedFilePatterns: string[] = []
			if (fs.existsSync(excludeFilesPath)) {
				excludedFilePatterns = fs.readFileSync(excludeFilesPath).toString().replace(/\r\n/g,'\n').split('\n');
			}
	
            const filterFiles = (filepath: any, entry: any) => {
				filepath = filepath.substring(filepath.indexOf('/') + 1)
				if(excludedFilePatterns) {
					const ig = ignore().add(excludedFilePatterns)
					console.log(ig.ignores(filepath), filepath)
					if(ig.ignores(filepath)) {
						return false
					}
				}

                if (filepath.includes("venv") || filepath.includes("__pycache__") || filepath.includes(".git") || filepath.includes(".mypy_cache") || filepath.includes(".DS_Store") || filepath.includes("./.pytest_cache") || filepath.includes(".vscode")) {
                    return false
                }
                return true
            }

			let base = path.basename(appPath) 
			this.writeEmitter.fire(`Packaging app located in: ${base}\r\n`)

			let result = await tar.create({file: outPath, gzip: true, cwd: path.join(appPath, "../"), filter: filterFiles}, [base])
			packageDispose.dispose()

			let uploadDispose = vscode.window.setStatusBarMessage("$(loading~spin) Uploading App...")
			this.writeEmitter.fire(`Local App Bundle: ${outPath}\r\n`);

			try {
				const appFile = fs.readFileSync(outPath, {encoding: 'base64'})
				let res = await client.installApp(appFile)
				uploadDispose.dispose()
				vscode.window.setStatusBarMessage("$(pass-filled) Successfully Uploaded App", 3000)
				await vscode.commands.executeCommand('splunkSoar.apps.refresh');

				this.writeEmitter.fire(JSON.stringify(res.data) + "\r\n");
				this.closeEmitter.fire(0);
				resolve()

			} catch(err: any) {
				vscode.window.setStatusBarMessage("$(error) Error uploading app", 3000)
				vscode.window.showErrorMessage(JSON.stringify(err))
				this.writeEmitter.fire(JSON.stringify(err.message));
				this.closeEmitter.fire(0);
				resolve()
			}

		});
	}
}