import * as vscode from 'vscode';
import * as path from 'path';
import { getConfiguredClient } from '../soar/client';

export class SoarAppsTreeProvider implements vscode.TreeDataProvider<SoarAppTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<SoarAppTreeItem | undefined | void> = new vscode.EventEmitter<SoarAppTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<SoarAppTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	constructor(private workspaceRoot: string | undefined) {
	}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	runAction() {

	}

	getTreeItem(element: SoarAppTreeItem): vscode.TreeItem {
		return element
	}

	getChildren(element?: SoarAppTreeItem): Thenable<SoarAppTreeItem[]> {
		let client = getConfiguredClient()

		if (!element) {
			return client.listApps().then(function (res) {
				let appEntries = res.data["data"]
				let appTreeItems = appEntries.map(entry => (new SoarApp(entry["name"], {"app": entry}, vscode.TreeItemCollapsibleState.Collapsed)))
				return appTreeItems
			})
		}

		if (element.contextValue === "soarapp") {
			return client.appContent(element.data["app"]["id"]).then(function (res) {
				let appContent = res.data["data"]
				const jsonContent = appContent.find((file) => file.metadata == "AppJSON");
				let appJSON = JSON.parse(jsonContent.content)

				return Promise.resolve([new SoarAssetSection("Assets", {"app_content": appContent, "app_json": appJSON, ...element.data}, vscode.TreeItemCollapsibleState.Collapsed), 
										  new SoarActionSection("Actions",{"app_content": appContent, "app_json": appJSON, ...element.data}, vscode.TreeItemCollapsibleState.Collapsed)])
			})

		} else if (element.contextValue === "soarassetsection") {
			return client.listAppAssets(element.data["app"]["id"]).then(function (res) {
				let assetEntries = res.data["data"]
				let assetTreeItems = assetEntries.map(entry => (new SoarAsset(entry["name"], {"asset": entry, ...element.data}, vscode.TreeItemCollapsibleState.None)))
				return assetTreeItems
			}).catch(function (err) {
				console.error(err)
			})
		} else if (element.contextValue === "soaractionsection") {
			let actionTreeItems = element.data["app"]["_pretty_actions"].map(entry => (new SoarAction(entry["name"], {"action": entry, ...element.data}, vscode.TreeItemCollapsibleState.None)))
			return Promise.resolve(actionTreeItems)
		}

		return Promise.resolve([])
	}
}

export class SoarAppTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly data: object,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.data = data
	}

	contextValue = 'soarapptreeitem';
}


export class SoarApp extends SoarAppTreeItem {

	constructor(label, data, collapsibleState, command?) {
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

export class SoarAsset extends SoarAppTreeItem {
	contextValue: string = 'soarasset';

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-method.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-method.svg')
	};
}

class SoarAssetSection extends SoarAppTreeItem {

	constructor(label, data, collapsibleState, command?) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app"]["_pretty_asset_count"]}`
	}

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-method.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-method.svg')
	};

	contextValue: string = "soarassetsection"
}

class SoarActionSection extends SoarAppTreeItem {

	constructor(label, data, collapsibleState, command?) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app"]["_pretty_actions"].length}`
	}

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-event.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-event.svg')
	};

	contextValue: string = "soaractionsection"
}

export class SoarAction extends SoarAppTreeItem {

	constructor(label, data, collapsibleState, command?) {
		super(label, data, collapsibleState, command)
		this.tooltip = data["action"]["description"]
	}

	contextValue: string = 'soaraction';


	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'symbol-event.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'symbol-event.svg')
	};
}
