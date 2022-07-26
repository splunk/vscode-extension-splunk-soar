import * as vscode from 'vscode';
import { ACTIVE_ENV_KEY, ENV_KEY } from '../commands/environments/environments';

export class SoarEnvironmentsTreeProvider implements vscode.TreeDataProvider<SoarEnvironmentsTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<SoarEnvironmentsTreeItem | undefined | void> = new vscode.EventEmitter<SoarEnvironmentsTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<SoarEnvironmentsTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	constructor(private context: vscode.ExtensionContext) {}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: SoarEnvironmentsTreeItem): vscode.TreeItem {
		return element
	}

	async getChildren(element?: SoarEnvironmentsTreeItem): Promise<SoarEnvironmentsTreeItem[]> {
		let environments: any = this.context.globalState.get(ENV_KEY)
		let activeEnv: any = this.context.globalState.get(ACTIVE_ENV_KEY)

		if (!element) {
			let environmentsTreeItems = environments.map((entry: any) => (entry["key"] === activeEnv ? new Environment(entry["url"], entry, true, vscode.TreeItemCollapsibleState.None) : new Environment(entry["url"], entry, false, vscode.TreeItemCollapsibleState.None)))
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
		public readonly data: any,
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
