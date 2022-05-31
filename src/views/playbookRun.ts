import * as vscode from 'vscode';
import * as path from 'path';
import { getClientForActiveEnvironment } from '../soar/client';

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

			return actionRunFunc().then(function (res) {
				let appEntries = res.data["data"]
				let appTreeItems = appEntries.map((entry: any) => (new PlaybookRun(entry["_pretty_playbook"], { "playbookRun": entry }, vscode.TreeItemCollapsibleState.None)))
				return appTreeItems
			}).catch(function(err) {
				console.error(err)
			})
		}
		else if (element.contextValue.startsWith("soarplaybookrun")) {
			let newEntries = [new KeyValueItem("Message", element.data["playbookRun"]["message"], vscode.TreeItemCollapsibleState.None),
			]

			if (element.data["actionRun"]["_pretty_playbook"]) {
				newEntries.push(new KeyValueItem("Playbook", element.data["playbookRun"]["_pretty_playbook"], vscode.TreeItemCollapsibleState.None))
			}

			return Promise.resolve(newEntries)
		}

		return Promise.resolve([])
	}
}

export class PlaybookRunTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.data = data
	}

	contextValue = 'soarplaybookruntreeitem';
	
}

export class KeyValueItem extends PlaybookRunTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = data
	}

	contextValue: string = 'soarkeyvalue';
}


export class PlaybookRun extends PlaybookRunTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = `${data["playbookRun"]["_pretty_start_time"]} · ${data["playbookRun"]["_pretty_owner"]}`

		if (data["playbookRun"]["status"] == "failed") {
			this.iconPath = new vscode.ThemeIcon("error", new vscode.ThemeColor("testing.iconFailed"))
			if (data["playbookRun"]["cancelled"]) {
			this.iconPath = new vscode.ThemeIcon("error", new vscode.ThemeColor("testing.iconSkipped"))
			}


		} else if (data["playbookRun"]["status"] == "running") {
			this.iconPath = new vscode.ThemeIcon("watch", new vscode.ThemeColor("testing.iconQueued"))
		}
		this.contextValue = `soarplaybookrun:${data["playbookRun"]["status"]}`
	}

	contextValue: string = 'soarplaybookrun';

	iconPath = new vscode.ThemeIcon("pass", new vscode.ThemeColor("testing.iconPassed"))
}
