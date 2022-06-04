import * as vscode from 'vscode';

import { registerCommands } from './commands/commands';
import { registerTreeViews } from './views/views';
import { registerInspectProviders } from './inspect/inspect';
import { registerCodeLenses } from './codelens/codelens';
import { DeployTaskProvider } from './tasks/deployTaskProvider';
import { ACTIVE_ENV_KEY } from './config/environment';


let deployTaskProvider: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {
	const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

	/* Ensure we verify whether we have an active environment on load */
	if (!context.globalState.get(ACTIVE_ENV_KEY)) {
        vscode.commands.executeCommand('setContext', 'splunkSoar.environments.hasActive', false);
	} else {
        vscode.commands.executeCommand('setContext', 'splunkSoar.environments.hasActive', true);
	}

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
