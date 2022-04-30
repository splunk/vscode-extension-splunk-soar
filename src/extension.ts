// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

import { version } from './commands/version'
import { openWeb, openWebActionRunResult, openWebApps, openWebPlaybook } from './commands/web'
import { DeployTaskProvider } from './tasks/deployTaskProvider';
import { SoarAppsTreeProvider } from './views/apps';
import { SoarActionRunTreeProvider } from './views/actionRun'

import { AppContentProvider } from './inspect/appContentProvider';
import { AppFileContentProvider } from './inspect/appFileContentProvider';
import { ContainerContentProvider } from './inspect/containerContentProvider';
import { AssetContentProvider } from './inspect/assetContentProvider';
import {ActionRunContentProvider} from './inspect/actionRunContentProvider'

import { runActionInput } from './commands/apps/runAction';
import { viewAppDocs } from './commands/apps/viewAppDocs';
import { repeatActionRun } from './commands/actionRuns/repeatActionRun';
import { installBundle } from './commands/apps/installBundle';
import { getConfiguredClient } from './soar/client';
import {AppWizardPanel} from './webviews/appWizard'
import { RunActionLensProvider, runActionLensSelector } from './codelens/runActionLensProvider';

let deployTaskProvider: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {
	const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

	//	Top-Level Commands
	let disposableVersion = vscode.commands.registerCommand('splunkSoar.version', () => { version() });
	context.subscriptions.push(disposableVersion);

	let disposableOpenWeb = vscode.commands.registerCommand('splunkSoar.openWeb', () => { openWeb() });
	context.subscriptions.push(disposableOpenWeb);

	let disposableOpenWebApps = vscode.commands.registerCommand('splunkSoar.openWebApps', () => { openWebApps() });
	context.subscriptions.push(disposableOpenWebApps);

	let disposableBundle = vscode.commands.registerCommand('soarApps.installBundle', () => { installBundle() });
	context.subscriptions.push(disposableVersion);

	// Tree
	const soarAppsTreeProvider = new SoarAppsTreeProvider(rootPath)
	vscode.window.registerTreeDataProvider('soarApps', soarAppsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.apps.refresh', () => soarAppsTreeProvider.refresh());

	const soarActionRunsTreeProvider = new SoarActionRunTreeProvider(rootPath)
	vscode.window.registerTreeDataProvider('soarActionRuns', soarActionRunsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.actionRuns.refresh', () => soarActionRunsTreeProvider.refresh());

	const assetScheme = "soarasset"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(assetScheme, AssetContentProvider));

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewAsset', async (assetId) => {
		if (!assetId) {
			assetId = await vscode.window.showInputBox({ placeHolder: 'id' });
		} else {
			assetId = String(assetId.data["asset"]["id"])
		}

		if (assetId) {
			const uri = vscode.Uri.parse('soarasset:' + assetId);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const appScheme = "soarapp"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(appScheme, AppContentProvider));

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewApp', async (appId) => {
		if (!appId) {
			appId = await vscode.window.showInputBox({ placeHolder: 'id' });
		} else {
			appId = String(appId.data["app"]["id"])
		}

		if (appId) {
			const uri = vscode.Uri.parse('soarapp:' + appId);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const containerScheme = "soarcontainer"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(containerScheme, ContainerContentProvider));

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewContainer', async (containerId) => {
		if (!containerId) {
			containerId = await vscode.window.showInputBox({ placeHolder: 'id' });
		}

		if (containerId) {
			const uri = vscode.Uri.parse('soarcontainer:' + containerId);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const actionRunScheme = "soaractionrun"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(actionRunScheme, ActionRunContentProvider));

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewActionRun', async (actionRunId) => {
		if (!actionRunId) {
			actionRunId = await vscode.window.showInputBox({ placeHolder: 'id' });
		} else if (actionRunId.hasOwnProperty("data")) {
			actionRunId = String(actionRunId.data["actionRun"]["id"])
		}

		if (actionRunId) {
			const uri = vscode.Uri.parse('soaractionrun:' + actionRunId);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));


	const fileScheme = "soarfile"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(fileScheme, AppFileContentProvider));

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewFile', async (soarFileItem) => {
		if (!soarFileItem) {
			return
		}

		if (soarFileItem) {
			let buff = Buffer.from(soarFileItem.data.file.content).toString('base64')
			const uri = vscode.Uri.parse('soarfile:' + soarFileItem.data.file.name + "#" + buff);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('soarActionRuns.repeatActionRun', async (data) => {
		if (data) {
			repeatActionRun(context, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewActionRunWeb', async (actionRunContext) => {
		if (actionRunContext) {
			let containerId = actionRunContext.data["actionRun"]["container"]
			let actionRunId = actionRunContext.data["actionRun"]["id"]
			openWebActionRunResult(containerId, actionRunId)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.cancelActionRun', async (actionRunContext) => {
		let client = getConfiguredClient()
		if (actionRunContext) {
			let actionRunId = actionRunContext.data["actionRun"]["id"]
			try {
				await client.cancelActionRun(actionRunId)
			} catch(err) {
				vscode.window.showErrorMessage(err.response.data.message)
			}
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))



	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewPlaybookWeb', async (playbookId) => {
		if (playbookId) {
			openWebPlaybook(playbookId)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.runAction', async (data) => {
		if (data) {
			runActionInput(context, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewAppDocs', async (data) => {
		if (data) {
			viewAppDocs(context, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))


	const showAppWizardCommand = vscode.commands.registerCommand("soarApps.showAppWizard", async () => {
		AppWizardPanel.render(context.extensionUri);
	  });
	
	  // Add command to the extension context
	context.subscriptions.push(showAppWizardCommand);

	let codeLensProviderDisposable = vscode.languages.registerCodeLensProvider(
		runActionLensSelector,
		new RunActionLensProvider()
	  )
	  
	  context.subscriptions.push(codeLensProviderDisposable)
	  
	if (!rootPath) {
		return
	}

	// Tasks
	let deployTaskProvider = vscode.tasks.registerTaskProvider(DeployTaskProvider.CustomBuildScriptType, new DeployTaskProvider(rootPath));
	console.log(deployTaskProvider)

}


// this method is called when your extension is deactivated
export function deactivate() {
	if (deployTaskProvider) {
		deployTaskProvider.dispose();
	}

}
