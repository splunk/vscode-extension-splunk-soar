import * as vscode from 'vscode';
import { getClientForActiveEnvironment } from '../soar/client';
import { partition } from '../utils'
import { SoarApp, SoarFile, SoarAsset, SoarPrettyAction } from '../soar/models';
import { listPinnedApps, PinnedApp } from '../commands/apps/pin';

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
		const config = vscode.workspace.getConfiguration()

		try {
			client = await getClientForActiveEnvironment(this.context)
		} catch (error) {
			return Promise.resolve([])
		}

		if (!element) {
			let appResponse = await client.listApps()
			let appEntries = appResponse.data.data

			const [configured, unconfigured] = partition(appEntries, (app: SoarApp) => app._pretty_asset_count > 0)
			let appItems: SoarApp[] = configured.concat(unconfigured)

			const configuredAppsOnly: boolean = config.get<boolean>("apps.showConfiguredOnly", false)
			if (configuredAppsOnly) {
				appItems = configured
			}

			let pinnedApps: PinnedApp[] = await listPinnedApps(this.context)
			let pinnedAppTreeItems = []

			for (let pinnedApp of pinnedApps) {
				let appEntry = appItems.find((app: SoarApp) => String(app.id) == pinnedApp.appId)
				if (appEntry !== undefined) {
					pinnedAppTreeItems.push(new SoarAppItem(appEntry.name, { "app": appEntry, "isPinned": true }, vscode.TreeItemCollapsibleState.Collapsed))
					appItems = appItems.filter((app: SoarApp) => app.id != Number(pinnedApp.appId))
				}
			}

			let appTreeItems = appItems.map((app: SoarApp) => (new SoarAppItem(app.name, { "app": app, "isPinned": false }, vscode.TreeItemCollapsibleState.Collapsed)))
			let completeAppTreeItems = pinnedAppTreeItems.concat(appTreeItems)
			return Promise.resolve(completeAppTreeItems)
		}

		if (element.contextValue.startsWith("soarapp")) {
			let soarAppElement: SoarAppItem = element as SoarAppItem

			let isImmutable = soarAppElement.data.app.immutable
			let appJSON;
			let appContent;

			let sections = [new SoarAssetSection("Assets", { "app_content": appContent, "app_json": appJSON, ...element.data }, vscode.TreeItemCollapsibleState.Collapsed),
			new SoarActionSection("Actions", { "app_content": appContent, "app_json": appJSON, ...element.data }, vscode.TreeItemCollapsibleState.Collapsed)]

			if (!isImmutable) {
				let appContentResponse = await client.appContent(String(soarAppElement.data.app.id))
				appContent = appContentResponse.data.data
				const jsonContent = appContent.find((file: SoarFile) => file.metadata == "AppJSON")!;

				if (!jsonContent) {
					appJSON
				}
				appJSON = JSON.parse(jsonContent.content)

				sections.push(new SoarFilesSection("Files", { "app_content": appContent, "app_json": appJSON, ...element.data }, vscode.TreeItemCollapsibleState.Collapsed))
			}

			return Promise.resolve(sections)


		} else if (element.contextValue === "soarassetsection") {
			let assetSectionElement: SoarAssetSection = element as SoarAssetSection

			let response = await client.listAppAssets(String(assetSectionElement.data.app.id))
			let assetEntries = response.data["data"]
			let assetTreeItems = assetEntries.map((asset: SoarAsset) => (new SoarAssetItem(asset.name, { "asset": asset, ...assetSectionElement.data }, vscode.TreeItemCollapsibleState.None, { 'command': 'splunkSoar.assets.inspect', 'title': "Inspect", "arguments": [{ "data": { "asset": asset, ...element.data } }] })))
			return assetTreeItems
		} else if (element.contextValue === "soaractionsection") {
			let actionSectionElement: SoarActionSection = element as SoarActionSection

			let actionTreeItems = actionSectionElement.data["app"]["_pretty_actions"].map((entry: SoarPrettyAction) => (new SoarActionItem(entry["name"], { "action": entry, ...actionSectionElement.data }, vscode.TreeItemCollapsibleState.None)))
			return Promise.resolve(actionTreeItems)
		} else if (element.contextValue === "soarfilessection") {
			let filesSectionElement: SoarFilesSection = element as SoarFilesSection

			if (!filesSectionElement.data.app_content) {
				return Promise.resolve([])
			}

			let actionTreeItems = filesSectionElement.data.app_content.map((entry: SoarFile) => (new SoarFileItem(entry["name"], { "file": entry, ...filesSectionElement.data }, vscode.TreeItemCollapsibleState.None, { 'command': 'splunkSoar.apps.viewFile', 'title': "Inspect", "arguments": [{ "data": { "file": entry, ...element.data } }] })))
			return Promise.resolve(actionTreeItems)
		}

		return Promise.resolve([])
	}
}

export class SoarAppsTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly data: SoarAppItemData,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.data = data
	}

	contextValue = 'soarapptreeitem';
}

interface SoarAppItemData {
	app: SoarApp,
	app_content?: SoarFile[],
	app_json?: string,
	asset?: SoarAsset,
	isPinned: boolean,
	action?: SoarPrettyAction,
	file?: SoarFile
}

export class SoarAppItem extends SoarAppsTreeItem {
	iconPath = new vscode.ThemeIcon("package")

	constructor(label: string, data: SoarAppItemData, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
		super(label, data, collapsibleState, command)
		this.description = data["app"]["app_version"]
		if (data["app"]["draft_mode"]) {
			this.description += " • draft"
		}
		if (data["app"]["immutable"]) {
			this.description += " • immutable"
		}
		if (data["app"]["_pretty_asset_count"] > 0) {
			this.iconPath = new vscode.ThemeIcon("package", new vscode.ThemeColor("testing.iconPassed"))
		}
		if (data["isPinned"] == true) {
			if (data["app"]["_pretty_asset_count"] > 0) {
				this.iconPath = new vscode.ThemeIcon("pin", new vscode.ThemeColor("testing.iconPassed"))
			} else {
				this.iconPath = new vscode.ThemeIcon("pin", new vscode.ThemeColor("testing.iconSkipped"))
			}
			this.contextValue = "soarapp:pinned"
		}
	}

	contextValue: string = 'soarapp:unpinned';
}

export class SoarAssetItem extends SoarAppsTreeItem {
	contextValue: string = 'soarasset';
	iconPath = new vscode.ThemeIcon("gear")
}

class SoarAssetSection extends SoarAppsTreeItem {

	constructor(label: string, data: SoarAppItemData, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app"]["_pretty_asset_count"]}`
	}

	iconPath = new vscode.ThemeIcon("settings")

	contextValue: string = "soarassetsection"
}

class SoarActionSection extends SoarAppsTreeItem {

	constructor(label: string, data: SoarAppItemData, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
		super(label, data, collapsibleState, command)
		this.description = `${data["app"]["_pretty_actions"].length}`
	}
	iconPath = new vscode.ThemeIcon("list-unordered")

	contextValue: string = "soaractionsection"
}

class SoarFilesSection extends SoarAppsTreeItem {

	constructor(label: string, data: SoarAppItemData, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
		super(label, data, collapsibleState, command)
		this.description = ""
		if (data["app_content"]) {
			this.description = `${data["app_content"].length} •`
		}
		this.description += `Read-only`
	}

	iconPath = new vscode.ThemeIcon("folder")

	contextValue: string = "soarfilessection"
}


export class SoarActionItem extends SoarAppsTreeItem {

	constructor(label: string, data: SoarAppItemData, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
		super(label, data, collapsibleState, command)

		if (data.action) {
			this.tooltip = data["action"]["description"]
		}
	}

	contextValue: string = 'soaraction';

	iconPath = new vscode.ThemeIcon("zap")

}

export class SoarFileItem extends SoarAppsTreeItem {

	constructor(label: string, data: SoarAppItemData, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
		super(label, data, collapsibleState, command)
		this.tooltip = "file"
	}

	contextValue: string = 'soarfile';
	iconPath = new vscode.ThemeIcon("file")
}
