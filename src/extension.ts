// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { version } from './commands/version'
import { openAppDevDocs, openRepoDocs, openRepoIssues, openSoarAppDevDocs, openWeb, openWebActionRunResult, openWebApps, openWebPlaybook } from './commands/web'
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
import { getClientForActiveEnvironment } from './soar/client';
import {AppWizardPanel} from './webviews/appWizard'
import { RunActionLensProvider, runActionLensSelector } from './codelens/runActionLensProvider';
import { SoarEnvironmentsTreeProvider } from './views/environments';
import { activateEnvironment, connectEnvironment, disconnectEnvironment } from './config/environment';
import { installBundle } from './commands/apps/installBundle';
import { SoarPlaybookTreeProvider } from './views/playbooks';
import { SoarHelpTreeProvider } from './views/help';

let deployTaskProvider: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {
	const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

	// Tree
	const soarEnvironmentsTreeProvider = new SoarEnvironmentsTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarEnvironments', soarEnvironmentsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.environments.refresh', () => soarEnvironmentsTreeProvider.refresh());

	//	Top-Level Commands
	let disposableVersion = vscode.commands.registerCommand('splunkSoar.version', async () => { version(context) });
	context.subscriptions.push(disposableVersion);

	let disposableOpenWeb = vscode.commands.registerCommand('splunkSoar.openWeb', async () => { openWeb(context) });
	context.subscriptions.push(disposableOpenWeb);

	let disposableOpenWebApps = vscode.commands.registerCommand('splunkSoar.openWebApps', async () => { openWebApps(context) });
	context.subscriptions.push(disposableOpenWebApps);

	let disposableInstallBundle = vscode.commands.registerCommand('soarApps.installBundle', () => { installBundle(context) });
	context.subscriptions.push(disposableInstallBundle);

	let disposableConnectEnvironment = vscode.commands.registerCommand('splunkSoar.environments.connect', () => { connectEnvironment(context) });
	context.subscriptions.push(disposableConnectEnvironment);

	let disposableDisconnectEnvironment = vscode.commands.registerCommand('splunkSoar.environments.disconnect', (actionContext) => { disconnectEnvironment(context, actionContext) });
	context.subscriptions.push(disposableDisconnectEnvironment);

	let activateEnvironmentDisposable = vscode.commands.registerCommand('splunkSoar.environments.activate', (actionContext) => { activateEnvironment(context, actionContext) });
	context.subscriptions.push(activateEnvironmentDisposable);

	let disposableReportIssue = vscode.commands.registerCommand('splunkSoar.reportIssue', async () => { openRepoIssues() });
	context.subscriptions.push(disposableReportIssue);

	let disposableExtensionDocs = vscode.commands.registerCommand('splunkSoar.openExtensionDocs', async () => { openRepoDocs() });
	context.subscriptions.push(disposableExtensionDocs);

	let disposableAppDevDocs = vscode.commands.registerCommand('splunkSoar.openAppDevDocs', async () => { openAppDevDocs() });
	context.subscriptions.push(disposableAppDevDocs);


	const soarAppsTreeProvider = new SoarAppsTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarApps', soarAppsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.apps.refresh', () => soarAppsTreeProvider.refresh());

	const soarActionRunsTreeProvider = new SoarActionRunTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarActionRuns', soarActionRunsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.actionRuns.refresh', () => soarActionRunsTreeProvider.refresh());

	const playbooksTreeProvider = new SoarPlaybookTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarPlaybooks', playbooksTreeProvider)
	vscode.commands.registerCommand('splunkSoar.playbooks.refresh', () => playbooksTreeProvider.refresh());

	const helpTreeProvider = new SoarHelpTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarHelp', helpTreeProvider)

	const assetScheme = "soarasset"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(assetScheme, new AssetContentProvider(context)));

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
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(appScheme, new AppContentProvider(context)));

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
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(containerScheme, new ContainerContentProvider(context)));

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
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(actionRunScheme, new ActionRunContentProvider(context)));

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
			openWebActionRunResult(context, containerId, actionRunId)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.cancelActionRun', async (actionRunContext) => {
		let client = await getClientForActiveEnvironment(context)
		if (actionRunContext) {
			let actionRunId = actionRunContext.data["actionRun"]["id"]
			try {
				await client.cancelActionRun(actionRunId)
			} catch(err: any) {
				vscode.window.showErrorMessage(err.response.data.message)
			}
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))



	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewPlaybookWeb', async (playbookId) => {
		if (playbookId) {
			openWebPlaybook(context, playbookId)
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
		new RunActionLensProvider(context)
	  )
	  
	  context.subscriptions.push(codeLensProviderDisposable)
	  
	if (!rootPath) {
		return
	}

	// Tasks
	let deployTaskProvider = vscode.tasks.registerTaskProvider(DeployTaskProvider.CustomBuildScriptType, new DeployTaskProvider(rootPath, context));
	console.log(deployTaskProvider)

}


// this method is called when your extension is deactivated
export function deactivate() {
	if (deployTaskProvider) {
		deployTaskProvider.dispose();
	}

}
