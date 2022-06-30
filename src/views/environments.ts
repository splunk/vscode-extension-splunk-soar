import * as vscode from 'vscode';
import { ACTIVE_ENV_KEY, ENV_KEY } from '../commands/environments/environments';

export class SoarEnvironmentsTreeProvider implements vscode.TreeDataProvider<SoarInstancesTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<SoarInstancesTreeItem | undefined | void> = new vscode.EventEmitter<SoarInstancesTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<SoarInstancesTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	constructor(private context: vscode.ExtensionContext) {}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: SoarInstancesTreeItem): vscode.TreeItem {
		return element
	}

	getChildren(element?: SoarInstancesTreeItem): Thenable<SoarInstancesTreeItem[]> {
		let environments: any = this.context.globalState.get(ENV_KEY)
		let activeEnv: any = this.context.globalState.get(ACTIVE_ENV_KEY)

		let environmentsTreeItems = environments.map((entry: any) => (entry["key"] === activeEnv ? new SoarInstancesTreeItem(entry["url"], entry, true, vscode.TreeItemCollapsibleState.None) : new SoarInstancesTreeItem(entry["url"], entry, false, vscode.TreeItemCollapsibleState.None)))
		return Promise.resolve(environmentsTreeItems) 
    }
}

export class SoarInstancesTreeItem extends vscode.TreeItem {
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
