import * as vscode from 'vscode';
import * as path from 'path';
import { getClientForActiveEnvironment } from '../soar/client';
import {partition} from '../utils'
import { SoarApp } from '../soar/models';

export class SoarAppsTreeProvider implements vscode.TreeDataProvider<SoarAppsTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<SoarAppsTreeItem | undefined | void> = new vscode.EventEmitter<SoarAppsTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<SoarAppsTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	constructor(private context: vscode.ExtensionContext) {
	}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: SoarAppsTreeItem): vscode.TreeItem {
		return element
	}

	async getChildren(element?: SoarAppsTreeItem): Promise<SoarAppsTreeItem[]> {
		let client;
		try {
			client = await getClientForActiveEnvironment(this.context)
		} catch(error) {
			return Promise.resolve([])
		}
		if (!element) {
			return client.listApps().then(function (res) {
				let appEntries = res.data["data"]
				const [configured, unconfigured] = partition(appEntries, (app: SoarApp) => app["_pretty_asset_count"] > 0)

				const config = vscode.workspace.getConfiguration()
				const configuredAppsOnly: boolean = config.get<boolean>("apps.showConfiguredOnly", false)
				let appItems = configured

				if (!configuredAppsOnly) {
					appItems = configured.concat(unconfigured)
				}

				let appTreeItems = appItems.map((entry: any) => (new SoarAppItem(entry["name"], {"app": entry}, vscode.TreeItemCollapsibleState.Collapsed)))
				return appTreeItems
			})
		}

		if (element.contextValue === "soarapp") {
			return client.appContent(element.data["app"]["id"]).then(function (res) {
				let appContent = res.data["data"]
				const jsonContent = appContent.find((file: any) => file.metadata == "AppJSON");
				let appJSON = JSON.parse(jsonContent.content)

				return Promise.resolve([new SoarAssetSection("Assets", {"app_content": appContent, "app_json": appJSON, ...element.data}, vscode.TreeItemCollapsibleState.Collapsed), 
										  new SoarActionSection("Actions",{"app_content": appContent, "app_json": appJSON, ...element.data}, vscode.TreeItemCollapsibleState.Collapsed),
										  new SoarFilesSection("Files",{"app_content": appContent, "app_json": appJSON, ...element.data}, vscode.TreeItemCollapsibleState.Collapsed),
										])
			})

		} else if (element.contextValue === "soarassetsection") {
			return client.listAppAssets(element.data["app"]["id"]).then(function (res) {
				let assetEntries = res.data["data"]
				let assetTreeItems = assetEntries.map((entry: any) => (new SoarAssetItem(entry["name"], {"asset": entry, ...element.data}, vscode.TreeItemCollapsibleState.None)))
				return assetTreeItems
			}).catch(function (err) {
				console.error(err)
			})
		} else if (element.contextValue === "soaractionsection") {
			let actionTreeItems = element.data["app"]["_pretty_actions"].map((entry: any) => (new SoarActionItem(entry["name"], {"action": entry, ...element.data}, vscode.TreeItemCollapsibleState.None)))
			return Promise.resolve(actionTreeItems)
		} else if (element.contextValue === "soarfilessection") {
			let actionTreeItems = element.data["app_content"].map((entry: any) => (new SoarFileItem(entry["name"], {"file": entry, ...element.data}, vscode.TreeItemCollapsibleState.None)))
			return Promise.resolve(actionTreeItems)
		}

		return Promise.resolve([])
	}
}

export class SoarAppsTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.data = data
	}

	contextValue = 'soarapptreeitem';
}


export class SoarAppItem extends SoarAppsTreeItem {
	iconPath = new vscode.ThemeIcon("package")

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = data["app"]["app_version"]
		if (data["app"]["draft_mode"]) {
			this.description += " • draft"
		}

		if (data["app"]["_pretty_asset_count"] > 0) {
			this.iconPath = new vscode.ThemeIcon("package", new vscode.ThemeColor("terminal.ansiGreen"))
		}
	}

	contextValue: string = 'soarapp';
}

export class SoarAssetItem extends SoarAppsTreeItem {
	contextValue: string = 'soarasset';

	iconPath = new vscode.ThemeIcon("gear")
}

class SoarAssetSection extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app"]["_pretty_asset_count"]}`
	}

	iconPath = new vscode.ThemeIcon("settings")

	contextValue: string = "soarassetsection"
}

class SoarActionSection extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app"]["_pretty_actions"].length}`
	}
	iconPath = new vscode.ThemeIcon("list-unordered")

	contextValue: string = "soaractionsection"
}

class SoarFilesSection extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app_content"].length} • Read-only`
	}

	iconPath = new vscode.ThemeIcon("symbol-folder")

	contextValue: string = "soarfilessection"
}


export class SoarActionItem extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.tooltip = data["action"]["description"]
	}

	contextValue: string = 'soaraction';

	iconPath = new vscode.ThemeIcon("zap")

}

export class SoarFileItem extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.tooltip = "file"
	}

	contextValue: string = 'soarfile';


	iconPath = new vscode.ThemeIcon("file")
}
