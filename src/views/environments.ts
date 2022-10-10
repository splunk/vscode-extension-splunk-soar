import * as vscode from 'vscode';
import { ACTIVE_ENV_KEY, ConfiguredConnectEnvironment, ENV_KEY, listEnvironments } from '../commands/environments/environments';

export class SoarEnvironmentsTreeProvider implements vscode.TreeDataProvider<SoarEnvironmentsTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<SoarEnvironmentsTreeItem | undefined | void> = new vscode.EventEmitter<SoarEnvironmentsTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<SoarEnvironmentsTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	constructor(private context: vscode.ExtensionContext) {
	}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: SoarEnvironmentsTreeItem): vscode.TreeItem {
		return element
	}

	async getChildren(element?: SoarEnvironmentsTreeItem): Promise<SoarEnvironmentsTreeItem[]> {
		let environments: ConfiguredConnectEnvironment[] = listEnvironments(this.context)
		let activeEnv: string = this.context.globalState.get(ACTIVE_ENV_KEY) || ""

		if (!element) {
			let environmentsTreeItems = environments.map((env: ConfiguredConnectEnvironment) => (env.key === activeEnv ? new Environment(env.url, env, true, vscode.TreeItemCollapsibleState.None) : new Environment(env.url, env, false, vscode.TreeItemCollapsibleState.None)))
			return Promise.resolve(environmentsTreeItems)
		}

		return Promise.resolve([])
    }
}

export class SoarEnvironmentsTreeItem extends vscode.TreeItem {

}

export class EnvironmentInfo extends SoarEnvironmentsTreeItem {

}

export class Environment extends SoarEnvironmentsTreeItem {
	constructor(
		public readonly label: string,
		public readonly data: ConfiguredConnectEnvironment,
		public readonly isActive: boolean,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.data = data
		this.description = data.username

		if (this.isActive) {
			this.iconPath = new vscode.ThemeIcon("vm-active", new vscode.ThemeColor("testing.iconPassed"))
			this.contextValue = 'soarenvironment:active'

		} else {
			this.iconPath = new vscode.ThemeIcon("vm"),
			this.contextValue = 'soarenvironment:inactive'
		}
	}

}