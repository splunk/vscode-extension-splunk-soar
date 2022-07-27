import * as vscode from 'vscode';
import * as path from 'path';
import { getClientForActiveEnvironment } from '../soar/client';
import { SoarPlaybookRun } from '../soar/models';

export class SoarPlaybookRunTreeProvider implements vscode.TreeDataProvider<PlaybookRunTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<PlaybookRunTreeItem | undefined | void> = new vscode.EventEmitter<PlaybookRunTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<PlaybookRunTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	state = {
		"ownActionRunsOnly": false
	}

	constructor(private context: vscode.ExtensionContext) {
	}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: PlaybookRunTreeItem): vscode.TreeItem {
		return element
	}

	async getChildren(element?: PlaybookRunTreeItem): Promise<PlaybookRunTreeItem[]> {
		let client;
		try {
			client = await getClientForActiveEnvironment(this.context)
		} catch(error) {
			return Promise.resolve([])
		}

		const config = vscode.workspace.getConfiguration()
		const ownOnly: boolean = config.get<boolean>("playbookRuns.showOwnOnly", false)

		if (!element) {
			let actionRunFunc = client.listPlaybookRuns
			if (ownOnly) {
				actionRunFunc = client.listUserPlaybookRuns
			}

			let playbookRunResponse = await actionRunFunc()
			let playbookRunEntries = playbookRunResponse.data.data
			let playbookRunTreeItems = playbookRunEntries.map((entry: SoarPlaybookRun) => (new PlaybookRun(entry["_pretty_playbook"], { "playbookRun": entry }, vscode.TreeItemCollapsibleState.None)))
			return playbookRunTreeItems

		}

		return Promise.resolve([])
	}
}

export interface PlaybookRunTreeData {
	playbookRun: SoarPlaybookRun
}

export class PlaybookRunTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly data: PlaybookRunTreeData,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.data = data
	}

	contextValue = 'soarplaybookruntreeitem';
	
}

export class PlaybookRun extends PlaybookRunTreeItem {

	constructor(label: string, data: PlaybookRunTreeData, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
		super(label, data, collapsibleState, command)
		this.description = `${data["playbookRun"]["id"]} · ${data["playbookRun"]["_pretty_start_time"]} · ${data["playbookRun"]["_pretty_owner"]}`

		if (data["playbookRun"]["status"] == "failed") {
			this.iconPath = new vscode.ThemeIcon("error", new vscode.ThemeColor("testing.iconFailed"))
			if (data["playbookRun"]["cancelled"]) {
			this.iconPath = new vscode.ThemeIcon("error", new vscode.ThemeColor("testing.iconSkipped"))
			}


		} else if (data["playbookRun"]["status"] == "running") {
			this.iconPath = new vscode.ThemeIcon("watch", new vscode.ThemeColor("testing.iconQueued"))
		}

		this.tooltip = this.generateLabel(data)
		this.tooltip.isTrusted = true
		this.tooltip.supportHtml = true
		this.tooltip.supportThemeIcons = true
		this.contextValue = `soarplaybookrun:${data["playbookRun"]["status"]}`
	}

	generateLabel = function(data: PlaybookRunTreeData): vscode.MarkdownString {
		let label = new vscode.MarkdownString(``);

		let playbookId = data["playbookRun"]["playbook"]
		let playbookName = data["playbookRun"]["_pretty_playbook"]
		let startTime = data["playbookRun"]["_pretty_start_time"]
		let containerId = data["playbookRun"]["container"]
		let playbookRunId = data["playbookRun"]["id"]

		label.appendMarkdown(`**${playbookName} (${startTime})**\n\n`)

		label.appendText('\n\n')
		label.appendMarkdown('---')
		label.appendText('\n\n')

		label.appendMarkdown(`**Playbook Run**: `)
		label.appendMarkdown(`[$(git-commit) \`${playbookRunId}\`](command:splunkSoar.playbookRuns.inspect?${playbookRunId}) \n\n`)

		label.appendMarkdown(`**Container:** `)
		label.appendMarkdown(`[$(symbol-field) \`${containerId}\`](command:splunkSoar.containers.inspect?${containerId}) \n\n`)

		return label
	}

	contextValue: string = 'soarplaybookrun';

	iconPath = new vscode.ThemeIcon("pass", new vscode.ThemeColor("testing.iconPassed"))
}
