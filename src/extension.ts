// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { openWebActionRunResult, openWebPlaybook } from './commands/web'
import { DeployTaskProvider } from './tasks/deployTaskProvider';
import { runActionInput } from './commands/apps/runAction';
import { viewAppDocs } from './commands/apps/viewAppDocs';
import { repeatActionRun } from './commands/actionRuns/repeatActionRun';
import { getClientForActiveEnvironment } from './soar/client';
import {AppWizardPanel} from './webviews/appWizard'
import { RunActionLensProvider, runActionLensSelector } from './codelens/runActionLensProvider';
import { registerCommands } from './commands/commands';
import { registerTreeViews } from './views/views';
import { registerInspectProviders } from './inspect/inspect';
import { registerCodeLenses } from './codelens/codelens';

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
	let deployTaskProvider = vscode.tasks.registerTaskProvider(DeployTaskProvider.CustomBuildScriptType, new DeployTaskProvider(rootPath, context));
}

// this method is called when your extension is deactivated
export function deactivate() {
	if (deployTaskProvider) {
		deployTaskProvider.dispose();
	}
}
