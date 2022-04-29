// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { version } from './commands/version'
import { openWeb, openWebApps } from './commands/web'
import { DeployTaskProvider } from './tasks/deployTaskProvider';
import { SoarAppsTreeProvider } from './tree/apps';
import { SoarActionRunTreeProvider } from './tree/actionRun'
import { AssetContentProvider } from './commands/assets/viewAsset'
import { AppContentProvider } from './commands/apps/viewApp';
import { runActionInput } from './commands/apps/runAction';
import { ContainerContentProvider } from './commands/containers/viewContainer';
import {FileContainerContentProvider} from './commands/apps/viewFile'
import { viewAppDocs } from './commands/apps/viewAppDocs';
import { ActionRunContentProvider } from './commands/actionRuns/viewActionRun';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


let deployTaskProvider: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {
	const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

	//	Top-Level Commands
	let disposableVersion = vscode.commands.registerCommand('vscode-splunk-soar.version', () => { version() });
	context.subscriptions.push(disposableVersion);

	let disposableOpenWeb = vscode.commands.registerCommand('vscode-splunk-soar.openWeb', () => { openWeb() });
	context.subscriptions.push(disposableOpenWeb);

	let disposableOpenWebApps = vscode.commands.registerCommand('vscode-splunk-soar.openWebApps', () => { openWebApps() });
	context.subscriptions.push(disposableOpenWebApps);

	// Tree
	const soarAppsTreeProvider = new SoarAppsTreeProvider(rootPath)
	vscode.window.registerTreeDataProvider('soarApps', soarAppsTreeProvider)
	vscode.commands.registerCommand('soarApps.refresh', () => soarAppsTreeProvider.refresh());

	const soarActionRunsTreeProvider = new SoarActionRunTreeProvider(rootPath)
	vscode.window.registerTreeDataProvider('soarActionRuns', soarActionRunsTreeProvider)
	vscode.commands.registerCommand('soarActionRuns.refresh', () => soarActionRunsTreeProvider.refresh());

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
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(fileScheme, FileContainerContentProvider));

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
