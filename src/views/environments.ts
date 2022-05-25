import * as vscode from 'vscode';
import { ACTIVE_ENV_KEY, ENV_KEY } from '../config/environment';

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

		let environmentsTreeItems = environments.map((entry: any) => (entry["key"] === activeEnv ? new SoarInstancesTreeItem(entry["key"], entry, true, vscode.TreeItemCollapsibleState.None) : new SoarInstancesTreeItem(entry["key"], entry, false, vscode.TreeItemCollapsibleState.None)))
		return Promise.resolve(environmentsTreeItems) // .concat([new SoarInstancesTreeItem("Connect Environment...", {}, vscode.TreeItemCollapsibleState.None, {"command": "splunkSoar.environments.connect", title: "Connect Environment..."})]))

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

		if (this.isActive) {
			this.iconPath = new vscode.ThemeIcon("vm-active", new vscode.ThemeColor("terminal.ansiGreen"))

		} else {
			this.iconPath = new vscode.ThemeIcon("vm")
		}
	}

	contextValue = 'soarenvironment';
}
