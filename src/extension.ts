import * as vscode from 'vscode';

import { registerCommands } from './commands/commands';
import { registerTreeViews } from './views/views';
import { registerInspectProviders } from './inspect/inspect';
import { registerCodeLenses } from './codelens/codelens';
import { DeployTaskProvider } from './tasks/deployTaskProvider';
import { ACTIVE_ENV_KEY } from './commands/environments/environments';
import outputLinkProvider from './providers/outputLinkProvider';

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
	let soarOutputLang = "soar-output-lang"
	let soarOutput = vscode.window.createOutputChannel("SOAR", soarOutputLang);
	let soarLogOutput = vscode.window.createOutputChannel("SOAR Log", soarOutputLang); 


	vscode.languages.registerDocumentLinkProvider({language: soarOutputLang}, outputLinkProvider)

	registerCommands(context, soarOutput, soarLogOutput)
	registerTreeViews(context)
	registerInspectProviders(context, soarOutput)
	registerCodeLenses(context)

	if (!rootPath) {
		return
	}

	vscode.workspace.onDidChangeConfiguration(() => {
        vscode.commands.executeCommand('splunkSoar.apps.refresh')
		vscode.commands.executeCommand('splunkSoar.playbooks.refresh')
    })

	// Task Provider
	deployTaskProvider = vscode.tasks.registerTaskProvider(DeployTaskProvider.CustomBuildScriptType, new DeployTaskProvider(rootPath, context, soarLogOutput));

	

}

export function deactivate() {
	if (deployTaskProvider) {
		deployTaskProvider.dispose();
	}
}
