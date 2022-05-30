import * as vscode from 'vscode'
import { ActionRunContentProvider } from './actionRunContentProvider';
import { AppContentProvider } from './appContentProvider';
import { AppFileContentProvider } from './appFileContentProvider';
import { AssetContentProvider } from './assetContentProvider';
import { ContainerContentProvider } from './containerContentProvider';
import { PlaybookContentProvider, PlaybookCodeContentProvider } from './playbookContentProvider';

export function registerInspectProviders(context: vscode.ExtensionContext) {

	const assetScheme = "soarasset"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(assetScheme, new AssetContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewAsset', async (assetId) => {
		if (!assetId) {
			assetId = await vscode.window.showInputBox({ placeHolder: 'id' });
		} else {
			assetId = String(assetId.data["asset"]["id"])
		}

		if (assetId) {
			const uri = vscode.Uri.parse('soarasset:' + assetId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const appScheme = "soarapp"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(appScheme, new AppContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.inspectApp', async (appId) => {
		if (!appId) {
			appId = await vscode.window.showInputBox({ placeHolder: 'id' });
		} else {
			appId = String(appId.data["app"]["id"])
		}

		if (appId) {
			const uri = vscode.Uri.parse('soarapp:' + appId + ".json");
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
			const uri = vscode.Uri.parse('soarcontainer:' + containerId + ".json");
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
			const uri = vscode.Uri.parse('soaractionrun:' + actionRunId + ".json");
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

	const playbookScheme = "soarplaybook"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(playbookScheme, new PlaybookContentProvider(context)));

	const playbookCodeScheme = "soarplaybookcode"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(playbookCodeScheme, new PlaybookCodeContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewPlaybookCode', async (playbookId) => {
		if (!playbookId) {
			playbookId = await vscode.window.showInputBox({ placeHolder: 'id' });
		} else if (playbookId.hasOwnProperty("data")) {
			playbookId = String(playbookId.data["playbook"]["id"])
		}

		if (playbookId) {
			const uri = vscode.Uri.parse('soarplaybookcode:' + playbookId + ".py");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));


	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewPlaybook', async (playbookId) => {
		if (!playbookId) {
			playbookId = await vscode.window.showInputBox({ placeHolder: 'id' });
		} else if (playbookId.hasOwnProperty("data")) {
			playbookId = String(playbookId.data["playbook"]["id"])
		}

		if (playbookId) {
			const uri = vscode.Uri.parse('soarplaybook:' + playbookId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));


}