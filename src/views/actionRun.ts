import { AxiosResponse } from 'axios';
import * as vscode from 'vscode';
import { getClientForActiveEnvironment, SoarClient } from '../soar/client';
import { SoarActionRun, SoarAppRun, SoarCollection } from '../soar/models';

export class SoarActionRunTreeProvider implements vscode.TreeDataProvider<ActionRunTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<ActionRunTreeItem | undefined | void> = new vscode.EventEmitter<ActionRunTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<ActionRunTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	state = {
		"ownActionRunsOnly": false
	}

	constructor(private context: vscode.ExtensionContext) {
	}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: ActionRunTreeItem): vscode.TreeItem {
		return element
	}

	async getChildren(element?: ActionRunTreeItem): Promise<ActionRunTreeItem[]> {
		let client: SoarClient;
		try {
			client = await getClientForActiveEnvironment(this.context)
		} catch(error) {
			return Promise.resolve([])
		}

		const config = vscode.workspace.getConfiguration()
		const ownOnly: boolean = config.get<boolean>("actionRuns.showOwnOnly", false)

		if (!element) {
			let actionRunFunc = client.listActionRuns
			if (ownOnly) {
				actionRunFunc = client.listUserActionRuns
			}
			let actionRunResponse = await actionRunFunc()
			let actionRunEntries = actionRunResponse.data.data

			let actionRunTreeItems = actionRunEntries.map((entry: SoarActionRun) => {

				let isExpandable = entry._pretty_has_app_runs
				let expandableState = isExpandable ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None

				return new ActionRun(entry["name"], { "actionRun": entry, "appRun": undefined}, expandableState)
			
			})
			return actionRunTreeItems
		} else {
			// We're in an action run

			let actionRun = element as ActionRun
			let actionRunId = actionRun.data.actionRun.id
			let appRunResponse = await client.getActionRunAppRuns(String(actionRunId))
			let appRuns = appRunResponse.data.data

			let individualAppRunResponses = await Promise.allSettled(appRuns.map((entry: SoarAppRun) => {
				return client.getAppRun(String(entry.id))
			}))

			let appRunTreeItems = individualAppRunResponses.filter((res) => res.status == "fulfilled").map((responsePromise) => {
				if (responsePromise.status == "fulfilled") {
					let appRun = responsePromise.value.data as SoarAppRun
					return new AppRunTreeItem(String(appRun.id), {"appRun": responsePromise.value.data, "actionRun": actionRun.data.actionRun}, vscode.TreeItemCollapsibleState.None, { 'command': 'splunkSoar.appRuns.output', 'title': "Inspect", "arguments": [{ "data": { "appRun": appRun } }]})
				}
			})

			console.log(appRunTreeItems)
			// @ts-ignore:next-line 
			return Promise.resolve(appRunTreeItems)
		}
	}
}

interface ActionRunItemData {
	actionRun: SoarActionRun
	appRun: SoarAppRun | undefined
}

export class ActionRunTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
	}

	contextValue = 'soaractionruntreeitem';
}

export class AppRunTreeItem extends ActionRunTreeItem {
	data: ActionRunItemData;

	constructor(label: string, data: ActionRunItemData, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
		super(label, collapsibleState, command)
		this.data = data
		this.description = data.appRun?._pretty_asset
		
		this.tooltip = this.generateLabel(data)
		this.tooltip.isTrusted = true
		this.tooltip.supportHtml = true
		this.tooltip.supportThemeIcons = true

		if (data.appRun?.status == "failed") {
			this.iconPath = new vscode.ThemeIcon("error", new vscode.ThemeColor("testing.iconFailed"))
		}
	}

	generateLabel = function(data: ActionRunItemData): vscode.MarkdownString {
		let label = new vscode.MarkdownString(``);
		let appRunId = data["appRun"]!["id"]
		let actionRunMessage = data["appRun"]!["message"]
		let actionRunTime = data["appRun"]!["_pretty_start_time"]

		label.appendMarkdown(`**${data["appRun"]!["action"]} (${actionRunTime})**\n\n`)
		label.appendMarkdown(`${actionRunMessage}`)
		label.appendText('\n\n')
		label.appendMarkdown('---')
		label.appendText('\n\n')

		label.appendMarkdown(`**App Run**: `)
		label.appendMarkdown(`[$(git-commit) \`${appRunId}\`](command:splunkSoar.appRuns.inspect?${appRunId}) \n\n`)

		return label

	}


	contextValue: string = 'soarapprun';

	iconPath = new vscode.ThemeIcon("pass", new vscode.ThemeColor("testing.iconPassed"))

}


export class ActionRun extends ActionRunTreeItem {

	data: ActionRunItemData;

	constructor(label: string, data: ActionRunItemData, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
		super(label, collapsibleState, command)
		this.data = data
		this.description = `${data["actionRun"]["id"]} · ${data["actionRun"]["_pretty_create_time"]} · ${data["actionRun"]["_pretty_owner"]}`

		if (data["actionRun"]["status"] == "failed") {
			this.iconPath = new vscode.ThemeIcon("error", new vscode.ThemeColor("testing.iconFailed"))
			if (data["actionRun"]["cancelled"]) {
			this.iconPath = new vscode.ThemeIcon("error", new vscode.ThemeColor("testing.iconSkipped"))
			}
		} else if (data["actionRun"]["status"] == "running" || data["actionRun"]["status"] == "pending") {
			this.iconPath = new vscode.ThemeIcon("watch", new vscode.ThemeColor("testing.iconQueued"))
		}

		this.tooltip = this.generateLabel(data)
		this.tooltip.isTrusted = true
		this.tooltip.supportHtml = true
		this.tooltip.supportThemeIcons = true
		this.contextValue = `soaractionrun:${data["actionRun"]["status"]}`

	}

	contextValue: string = 'soaractionrun';

	iconPath = new vscode.ThemeIcon("pass", new vscode.ThemeColor("testing.iconPassed"))

	generateLabel = function(data: ActionRunItemData): vscode.MarkdownString {
		let label = new vscode.MarkdownString(``);
		let actionRunId = data["actionRun"]["id"]
		let actionRunMessage = data["actionRun"]["message"]
		let actionRunTime = data["actionRun"]["_pretty_create_time"]

		label.appendMarkdown(`**${data["actionRun"]["action"]} (${actionRunTime})**\n\n`)
		label.appendMarkdown(`${actionRunMessage}`)
		label.appendText('\n\n')
		label.appendMarkdown('---')
		label.appendText('\n\n')

		label.appendMarkdown(`**Action Run**: `)
		label.appendMarkdown(`[$(git-commit) \`${actionRunId}\`](command:splunkSoar.actionRuns.inspect?${actionRunId}) \n\n`)

		if (data["actionRun"]["container"] !== null) {
			let containerId = data["actionRun"]["container"].toString()
			let containerLabel = data["actionRun"]["_pretty_container"]

			label.appendMarkdown(`**Container:** `)
			label.appendMarkdown(`[$(symbol-field) \`${containerId}\`](command:splunkSoar.containers.inspect?${containerId}) \n`)
			label.appendMarkdown(`${containerLabel} \n\n`)


		}
		if (data["actionRun"]["playbook_run"] !== null) {
			let playbookId = data["actionRun"]["playbook"]
			let playbookLabel = data["actionRun"]["_pretty_playbook"]

			label.appendMarkdown(`**Playbook:** `)
			label.appendMarkdown(`[$(file-code) \`${playbookId}\`](command:splunkSoar.playbooks.viewWeb?${playbookId}) \n`)
			label.appendMarkdown(`${playbookLabel} \n\n`)
		}

		return label

	}

}
