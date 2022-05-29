import * as vscode from 'vscode';
import * as path from 'path';
import { getClientForActiveEnvironment } from '../soar/client';

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
		let client;
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

			return actionRunFunc().then(function (res) {
				let appEntries = res.data["data"]
				let appTreeItems = appEntries.map((entry: any) => (new ActionRun(entry["name"], { "actionRun": entry }, vscode.TreeItemCollapsibleState.None)))
				return appTreeItems
			}).catch(function(err) {
				console.error(err)
			})
		}
		else if (element.contextValue.startsWith("soaractionrun")) {
			let newEntries = [new KeyValueItem("Message", element.data["actionRun"]["message"], vscode.TreeItemCollapsibleState.None),
			]

			if (element.data["actionRun"]["_pretty_playbook"]) {
				newEntries.push(new KeyValueItem("Playbook", element.data["actionRun"]["_pretty_playbook"], vscode.TreeItemCollapsibleState.None))
			}

			return Promise.resolve(newEntries)
		}

		return Promise.resolve([])
	}
}

export class ActionRunTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.data = data
	}

	contextValue = 'soaractionruntreeitem';
	
}

export class KeyValueItem extends ActionRunTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = data
	}

	contextValue: string = 'soarkeyvalue';
}


export class ActionRun extends ActionRunTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = `${data["actionRun"]["_pretty_create_time"]} · ${data["actionRun"]["_pretty_owner"]}`

		if (data["actionRun"]["status"] == "failed") {
			this.iconPath = {
				light: path.join(__filename, '..', '..', 'resources', 'light', 'error.svg'),
				dark: path.join(__filename, '..', '..', 'resources', 'dark', 'error.svg')
			};
		} else if (data["actionRun"]["status"] == "running") {
			this.iconPath = {
				light: path.join(__filename, '..', '..', 'resources', 'light', 'gear.svg'),
				dark: path.join(__filename, '..', '..', 'resources', 'dark', 'gear.svg')
			};
		}
		
		this.tooltip = this.generateLabel(data)
		this.tooltip.isTrusted = true
		this.tooltip.supportHtml = true
		this.tooltip.supportThemeIcons = true
		this.contextValue = `soaractionrun:${data["actionRun"]["status"]}`

	}

	contextValue: string = 'soaractionrun';

	iconPath = {
		light: "path.join(__filename, '..', '..', 'resources', 'light', 'pass.svg')",
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'pass.svg')
	};


	generateLabel = function(data: any): vscode.MarkdownString {
		let label = new vscode.MarkdownString(`### ${data["actionRun"]["action"]} \n`);
		let actionRunId = data["actionRun"]["id"]
		let actionRunMessage = data["actionRun"]["message"]
		let actionRunTime = data["actionRun"]["create_time"]

		label.appendMarkdown(`*${actionRunMessage}*, ${actionRunTime}\n\n`)

		label.appendMarkdown(`**Action Run**: `)
		label.appendMarkdown(`[$(git-commit) \`${actionRunId}\`](command:soarApps.viewActionRun?${actionRunId}) \n\n`)

		if (data["actionRun"]["container"] !== null) {
			let containerId = data["actionRun"]["container"].toString()
			let containerLabel = data["actionRun"]["_pretty_container"]

			label.appendMarkdown(`**Container:** `)
			label.appendMarkdown(`[$(symbol-field) \`${containerId}\`](command:soarApps.viewContainer?${containerId}) \n`)
			label.appendMarkdown(`${containerLabel} \n\n`)


		}
		if (data["actionRun"]["playbook_run"] !== null) {
			let playbookId = data["actionRun"]["playbook"]
			let playbookLabel = data["actionRun"]["_pretty_playbook"]

			label.appendMarkdown(`**Playbook:** `)
			label.appendMarkdown(`[$(file-code) \`${playbookId}\`](command:soarApps.viewPlaybookWeb?${playbookId}) \n`)
			label.appendMarkdown(`${playbookLabel} \n\n`)
		}

		return label

	}

}
