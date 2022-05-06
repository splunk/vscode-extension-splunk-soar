import * as vscode from 'vscode';

import { registerCommands } from './commands/commands';
import { registerTreeViews } from './views/views';
import { registerInspectProviders } from './inspect/inspect';
import { registerCodeLenses } from './codelens/codelens';
import { DeployTaskProvider } from './tasks/deployTaskProvider';

let deployTaskProvider: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {
	const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

	registerCommands(context)
	registerTreeViews(context)
	registerInspectProviders(context)
	registerCodeLenses(context)

	if (!rootPath) {
		return
	}

	// Task Provider
	deployTaskProvider = vscode.tasks.registerTaskProvider(DeployTaskProvider.CustomBuildScriptType, new DeployTaskProvider(rootPath, context));
}

export function deactivate() {
	if (deployTaskProvider) {
		deployTaskProvider.dispose();
	}
}
