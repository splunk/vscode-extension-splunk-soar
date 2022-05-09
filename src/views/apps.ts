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
		let client = await getClientForActiveEnvironment(this.context)

		if (!element) {
			return client.listApps().then(function (res) {
				let appEntries = res.data["data"]
				const [configured, unconfigured] = partition(appEntries, (app: SoarApp) => app["_pretty_asset_count"] > 0)


				let appTreeItems = configured.concat(unconfigured).map((entry: any) => (new SoarAppItem(entry["name"], {"app": entry}, vscode.TreeItemCollapsibleState.Collapsed)))
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

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = data["app"]["app_version"]

		if (data["app"]["_pretty_asset_count"] > 0) {
			this.iconPath = {
				light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-field-configured.svg'),
				dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-field-configured.svg')
			};
		}
	}

	contextValue: string = 'soarapp';

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-field.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-field.svg')
	};
}

export class SoarAssetItem extends SoarAppsTreeItem {
	contextValue: string = 'soarasset';

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-method.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-method.svg')
	};
}

class SoarAssetSection extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app"]["_pretty_asset_count"]}`
	}

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-method.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-method.svg')
	};

	contextValue: string = "soarassetsection"
}

class SoarActionSection extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app"]["_pretty_actions"].length}`
	}

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-event.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-event.svg')
	};

	contextValue: string = "soaractionsection"
}

class SoarFilesSection extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app_content"].length} (readonly)`
	}

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'file.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'file.svg')
	};

	contextValue: string = "soarfilessection"
}


export class SoarActionItem extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.tooltip = data["action"]["description"]
	}

	contextValue: string = 'soaraction';


	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-event.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-event.svg')
	};
}

export class SoarFileItem extends SoarAppsTreeItem {

	constructor(label: any, data: any, collapsibleState: any, command?: any) {
		super(label, data, collapsibleState, command)
		this.tooltip = "file"
	}

	contextValue: string = 'soarfile';


	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'file.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'file.svg')
	};
}
