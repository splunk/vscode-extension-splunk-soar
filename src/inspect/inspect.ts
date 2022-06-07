import * as vscode from 'vscode'
import { ActionRunAppRunContentProvider, ActionRunContentProvider } from './actionRunContentProvider';
import { AppContentProvider } from './appContentProvider';
import { AppFileContentProvider } from './appFileContentProvider';
import { ArtifactContentProvider } from './artifactContentProvider';
import { AssetContentProvider } from './assetContentProvider';
import { ContainerContentProvider } from './containerContentProvider';
import { NoteContentProvider, NoteMetaContentProvider } from './noteContentProvider';
import { PlaybookContentProvider, PlaybookCodeContentProvider } from './playbookContentProvider';
import { PlaybookRunContentProvider, PlaybookRunLogContentProvider } from './playbookRunContentProvider';
import { VaultFileContentProvider } from './vaultFileContentProvider';

export function registerInspectProviders(context: vscode.ExtensionContext) {

	const assetScheme = "soarasset"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(assetScheme, new AssetContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.assets.inspect', async (assetId) => {
		if (!assetId) {
			assetId = await vscode.window.showInputBox({ placeHolder: 'Asset ID' });
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

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.inspect', async (appId) => {
		if (!appId) {
			appId = await vscode.window.showInputBox({ placeHolder: 'App ID' });
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

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.containers.inspect', async (containerId) => {
		if (!containerId) {
			containerId = await vscode.window.showInputBox({ placeHolder: 'Container ID' });
		} else {
			containerId = String(containerId.data[1].value.data["id"])
		}

		if (containerId) {
			const uri = vscode.Uri.parse('soarcontainer:' + containerId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const actionRunScheme = "soaractionrun"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(actionRunScheme, new ActionRunContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.actionRuns.inspect', async (actionRunId) => {
		if (!actionRunId) {
			actionRunId = await vscode.window.showInputBox({ placeHolder: 'Action Run ID' });
		} else if (actionRunId.hasOwnProperty("data")) {
			actionRunId = String(actionRunId.data["actionRun"]["id"])
		}

		if (actionRunId) {
			const uri = vscode.Uri.parse('soaractionrun:' + actionRunId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const actionRunAppRunScheme = "soaractionrunapprun"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(actionRunAppRunScheme, new ActionRunAppRunContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.actionRuns.inspectAppRun', async (actionRunId) => {
		if (!actionRunId) {
			actionRunId = await vscode.window.showInputBox({ placeHolder: 'Action Run ID' });
		} else if (actionRunId.hasOwnProperty("data")) {
			actionRunId = String(actionRunId.data["actionRun"]["id"])
		}

		if (actionRunId) {
			const uri = vscode.Uri.parse('soaractionrunapprun:' + actionRunId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const playbookRunScheme = "soarplaybookrun"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(playbookRunScheme, new PlaybookRunContentProvider(context)));


	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbookRuns.inspect', async (playbookRunId) => {
		if (!playbookRunId) {
			playbookRunId = await vscode.window.showInputBox({ placeHolder: 'Playbook Run ID' });
		} else if (playbookRunId.hasOwnProperty("data")) {
			playbookRunId = String(playbookRunId.data["playbookRun"]["id"])
		}

		if (playbookRunId) {
			const uri = vscode.Uri.parse('soarplaybookrun:' + playbookRunId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const playbookRunLogScheme = "soarplaybookrunlog"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(playbookRunLogScheme, new PlaybookRunLogContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbookRuns.logs', async (playbookRunId) => {
		if (!playbookRunId) {
			playbookRunId = await vscode.window.showInputBox({ placeHolder: 'Playbook Run ID' });
		} else if (playbookRunId.hasOwnProperty("data")) {
			playbookRunId = String(playbookRunId.data["playbookRun"]["id"])
		}

		if (playbookRunId) {
			const uri = vscode.Uri.parse('soarplaybookrunlog:' + playbookRunId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));


	const fileScheme = "soarfile"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(fileScheme, AppFileContentProvider));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.viewFile', async (soarFileItem) => {
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

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbooks.viewCode', async (playbookId) => {
		if (!playbookId) {
			playbookId = await vscode.window.showInputBox({ placeHolder: 'Playbook ID' });
		} else if (playbookId.hasOwnProperty("data")) {
			playbookId = String(playbookId.data["playbook"]["id"])
		}

		if (playbookId) {
			const uri = vscode.Uri.parse('soarplaybookcode:' + playbookId + ".py");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));


	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbooks.inspect', async (playbookId) => {
		if (!playbookId) {
			playbookId = await vscode.window.showInputBox({ placeHolder: 'Playbook ID' });
		} else if (playbookId.hasOwnProperty("data")) {
			playbookId = String(playbookId.data["playbook"]["id"])
		}

		if (playbookId) {
			const uri = vscode.Uri.parse('soarplaybook:' + playbookId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const artifactScheme = "soarartifact"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(artifactScheme, new ArtifactContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.artifacts.inspect', async (artifactId) => {
		if (!artifactId) {
			artifactId = await vscode.window.showInputBox({ placeHolder: 'Artifact ID' });
		} else {
			artifactId = artifactId.data.id
		}

		if (artifactId) {
			const uri = vscode.Uri.parse('soarartifact:' + artifactId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const noteScheme = "soarnote"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(noteScheme, new NoteContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.notes.preview', async (noteId) => {
		if (!noteId) {
			noteId = await vscode.window.showInputBox({ placeHolder: 'Note ID' });
		} else {
			noteId = noteId.data.id
		}

		if (noteId) {
			const uri = vscode.Uri.parse('soarnote:' + noteId + ".md");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
			await vscode.commands.executeCommand('markdown.showPreviewToSide')
		}
	}));

	const noteMetaScheme = "soarnotemeta"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(noteMetaScheme, new NoteMetaContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.notes.inspect', async (noteId) => {
		if (!noteId) {
			noteId = await vscode.window.showInputBox({ placeHolder: 'Note ID' });
		} else {
			noteId = noteId.data.id
		}

		if (noteId) {
			const uri = vscode.Uri.parse('soarnotemeta:' + noteId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	const vaultFileScheme = "soarvaultfile"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(vaultFileScheme, new VaultFileContentProvider(context)));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.vaultFile.inspect', async (docId) => {
		if (!docId) {
			docId = await vscode.window.showInputBox({ placeHolder: 'Vault File ID' });
		} else {
			docId = docId.data.id
		}

		if (docId) {
			const uri = vscode.Uri.parse('soarvaultfile:' + docId + ".json");
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));
}