import { AxiosResponse } from 'axios';
import { OutputQuoteStyle } from 'terser';
import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../soar/client';
import { PlaybookRun } from '../views/playbookRun';
import { promptContainerId } from '../wizard/prompts';
import { AppFileContentProvider } from './appFileContentProvider';
import { SoarContent, SoarContentProvider } from './soarContentProvider';
import { SystemSettingsContentProvider } from './systemSettingContentProvider';

export function registerInspectProviders(context: vscode.ExtensionContext, outputChannel: vscode.OutputChannel) {

	const processJSONContent = (res: AxiosResponse) => { return JSON.stringify(res.data, null, '\t')} 
	const processLogContent= (res: AxiosResponse) => { 
		
		let out = res.data
		if (res.data.data.length > 0) {
			out = res.data["data"].map((el: any) => {return JSON.stringify(JSON.parse(el))}).join("\n")
		} 

		return out
	
	} 

	let playbookRunContent: SoarContent = {
		scheme: "soarplaybookrun", 
		prefix: "playbook-run_", 
		getContentFunName: "getPlaybookRun", 
		processContent: processJSONContent
	}

	let playbookRunLogContent: SoarContent = {
		scheme: "soarplaybookrunlog", 
		prefix: "playbook-run-log_", 
		getContentFunName: "getPlaybookRunLog", 
		processContent: processJSONContent
	}

	let appRunLogContent: SoarContent = {
		scheme: "soarapprunlog", 
		prefix: "app-run-log_", 
		getContentFunName: "getAppRunLog", 
		processContent: processLogContent
	}

	let assetContent: SoarContent = {
		scheme: "soarasset", 
		prefix: "asset_", 
		getContentFunName: "getAsset", 
		processContent: processJSONContent
	}

	let appContent: SoarContent = {
		scheme: "soarapp", 
		prefix: "app_", 
		getContentFunName: "getApp", 
		processContent: processJSONContent
	}

	let containerContent: SoarContent = {
		scheme: "soarcontainer", 
		prefix: "container_", 
		getContentFunName: "getContainer", 
		processContent: processJSONContent
	}

	let actionRunContent: SoarContent = {
		scheme: "soaractionrun",
		prefix: "action-run_",
		getContentFunName: "getActionRun",
		processContent: processJSONContent
	}

	let appRunContent: SoarContent = {
		scheme: "soarapprun",
		prefix: "app-run_",
		getContentFunName: "getAppRun",
		processContent: processJSONContent
	}

	let playbookContent: SoarContent = {
		scheme: "soarplaybook",
		prefix: "playbook_",
		getContentFunName: "getPlaybook",
		processContent: processJSONContent
	}

	let artifactContent: SoarContent = {
		scheme: "soarartifact",
		prefix: "artifact_",
		getContentFunName: "getArtifact",
		processContent: processJSONContent
	}

	let noteMetaContent: SoarContent = {
		scheme: "soarnotemeta",
		prefix: "note_meta_",
		getContentFunName: "getNote",
		processContent: processJSONContent
	}

	let noteContent: SoarContent = {
		scheme: "soarnote",
		"prefix": "note_",
		getContentFunName: "getNote",
		processContent: (res) => {return res.data.content}
	}

	let vaultFileContent: SoarContent = {
		scheme: "soarvaultfile",
		prefix: "vault_file_",
		getContentFunName: "getVaultDocument",
		processContent: processJSONContent
	}

	let playbookCodeContent: SoarContent = {
		scheme: "soarplaybookcode",
		"prefix": "",
		getContentFunName: "getPlaybook",
		processContent: (res) => {return res.data.python},
	}

	let contents = [appContent, assetContent, playbookRunLogContent, playbookRunContent, containerContent, actionRunContent, appRunContent, playbookContent, vaultFileContent, noteContent, playbookCodeContent, noteMetaContent, appRunLogContent]

	for (let content of contents) {
		context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(content.scheme, new SoarContentProvider(context, content)));
	}

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.assets.inspect', async (assetId) => {
		if (!assetId) {
			assetId = await vscode.window.showInputBox({ placeHolder: 'Asset ID' });
		} else {
			assetId = String(assetId.data["asset"]["id"])
		}

		if (assetId) {
			const uri = vscode.Uri.parse(`${assetContent.scheme}:${assetContent.prefix}${assetId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri);
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.inspect', async (appId) => {
		if (!appId) {
			appId = await vscode.window.showInputBox({ placeHolder: 'App ID' });
		} else {
			appId = String(appId.data["app"]["id"])
		}

		if (appId) {
			const uri = vscode.Uri.parse(`${appContent.scheme}:${appContent.prefix}${appId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));


	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.containers.inspect', async (containerId) => {
		if (!containerId) {
			containerId = await promptContainerId(context)
		} else {
			containerId = String(containerId.data[1].value.data["id"])
		}

		if (containerId) {
			const uri = vscode.Uri.parse(`${containerContent.scheme}:${containerContent.prefix}${containerId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.actionRuns.inspect', async (actionRunId) => {
		if (!actionRunId) {
			actionRunId = await vscode.window.showInputBox({ placeHolder: 'Action Run ID' });
		} else if (actionRunId.hasOwnProperty("data")) {
			actionRunId = String(actionRunId.data["actionRun"]["id"])
		}

		if (actionRunId) {
			const uri = vscode.Uri.parse(`${actionRunContent.scheme}:${actionRunContent.prefix}${actionRunId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.appRuns.inspect', async (appRunContext) => {
		let appRunId

		if (appRunContext.hasOwnProperty('data')) {
			appRunId = appRunContext.data.appRun.id
		} else {
			appRunId = String(appRunContext)
		}

		if (appRunId) {
			const uri = vscode.Uri.parse(`${appRunContent.scheme}:${appRunContent.prefix}${appRunId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.appRuns.logs', async (appRunContext) => {
		let appRunId

		if (appRunContext.hasOwnProperty('data')) {
			appRunId = appRunContext.data.appRun.id
		} else {
			appRunId = String(appRunContext)
		}

		if (appRunId) {
			const uri = vscode.Uri.parse(`${appRunLogContent.scheme}:${appRunLogContent.prefix}${appRunId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.appRuns.output', async (appRunContext) => {

		let appRunId = appRunContext.data.appRun.id
		let client = await getClientForActiveEnvironment(context)

		let appRun = await client.getAppRun(appRunId)

		outputChannel.clear()
		outputChannel.appendLine("=========== Connector Summary (summary) ===========")
		outputChannel.appendLine(JSON.stringify(appRun.data.result_summary, null, '\t'))
		outputChannel.appendLine("=========== Command Result (action_result) ===========")
		outputChannel.appendLine(JSON.stringify(appRun.data.result_data[0], null, '\t'))
		outputChannel.show()
	}));


	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbookRuns.inspect', async (playbookRunContext: PlaybookRun) => {
		let playbookRunId = String(playbookRunContext.data.playbookRun.id)

		if (playbookRunId) {
			const uri = vscode.Uri.parse(`${playbookRunContent.scheme}:${playbookRunContent.prefix}${playbookRunId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri);
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));


	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbookRuns.logs', async (playbookRunContext: PlaybookRun) => {
		let playbookRunId = String(playbookRunContext.data.playbookRun.id)

		let client = await getClientForActiveEnvironment(context)

		let logResponse = await client.getPlaybookRunLog(String(playbookRunId)) 

		interface PlaybookRunLogEntry {
			message: string,
			message_type: number,
			time: string
		}

		let outMessages = logResponse.data.data.reverse().map((entry: PlaybookRunLogEntry) => {return `<${entry.message_type}>[${entry.time}]: ${entry.message}`})

		outputChannel.clear()
		for (let msg of outMessages) {
			outputChannel.appendLine(msg)
		}

		outputChannel.show()

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

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbooks.viewCode', async (playbookId) => {
		if (!playbookId) {
			playbookId = await vscode.window.showInputBox({ placeHolder: 'Playbook ID' });
		} else if (playbookId.hasOwnProperty("data")) {
			playbookId = String(playbookId.data["playbook"]["id"])
		}

		if (playbookId) {
			const uri = vscode.Uri.parse(`${playbookCodeContent.scheme}:${playbookCodeContent.prefix}${playbookId}.py`);

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
			const uri = vscode.Uri.parse(`${playbookContent.scheme}:${playbookContent.prefix}${playbookId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.artifacts.inspect', async (artifactId) => {
		if (!artifactId) {
			artifactId = await vscode.window.showInputBox({ placeHolder: 'Artifact ID' });
		} else {
			artifactId = artifactId.data.id
		}

		if (artifactId) {
			const uri = vscode.Uri.parse(`${artifactContent.scheme}:${artifactContent.prefix}${artifactId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));


	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.notes.preview', async (noteId) => {
		if (!noteId) {
			noteId = await vscode.window.showInputBox({ placeHolder: 'Note ID' });
		} else {
			noteId = noteId.data.id
		}

		if (noteId) {
			const uri = vscode.Uri.parse(`${noteContent.scheme}:${noteContent.prefix}${noteId}.md`);

			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
			await vscode.commands.executeCommand('markdown.showPreviewToSide')
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.notes.inspect', async (noteId) => {
		if (!noteId) {
			noteId = await vscode.window.showInputBox({ placeHolder: 'Note ID' });
		} else {
			noteId = noteId.data.id
		}

		if (noteId) {
			const uri = vscode.Uri.parse(`${noteMetaContent.scheme}:${noteMetaContent.prefix}${noteId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.vaultFile.inspect', async (docId) => {
		if (!docId) {
			docId = await vscode.window.showInputBox({ placeHolder: 'Vault File ID' });
		} else {
			docId = docId.data.id
		}

		if (docId) {
			const uri = vscode.Uri.parse(`${vaultFileContent.scheme}:${vaultFileContent.prefix}${docId}.json`);
			const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
			await vscode.window.showTextDocument(doc, { preview: false });
		}
	}));


	const settingsScheme = "soarenvsetting"
	context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(settingsScheme, new SystemSettingsContentProvider(context)));
	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.environments.inspect', async (environmentContext) => {

		const uri = vscode.Uri.parse('soarenvsetting:' + environmentContext.data.key + ".json");
		const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
		await vscode.window.showTextDocument(doc, { preview: false });
	}))

}