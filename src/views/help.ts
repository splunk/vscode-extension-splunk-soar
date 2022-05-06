import * as vscode from 'vscode';
import { getClientForActiveEnvironment } from '../soar/client';

export class SoarHelpTreeProvider implements vscode.TreeDataProvider<HelpTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<HelpTreeItem | undefined | void> = new vscode.EventEmitter<HelpTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<HelpTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	state = {
		"ownActionRunsOnly": false
	}

	constructor(private context: vscode.ExtensionContext) {
	}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: HelpTreeItem): vscode.TreeItem {
		return element
	}

	async getChildren(element?: HelpTreeItem): Promise<HelpTreeItem[]> {
		if (!element) {

            return [
                new HelpTreeItem("Open Extension Documentation", {icon: "extensions"}, vscode.TreeItemCollapsibleState.None, {title: "", command: "splunkSoar.openExtensionDocs"}),
                new HelpTreeItem("Open SOAR App Development Documentation", {icon: "book"}, vscode.TreeItemCollapsibleState.None, {title: "", command: "splunkSoar.openAppDevDocs"}),
                new HelpTreeItem("Report an Issue", {icon: "comment"}, vscode.TreeItemCollapsibleState.None, {title: "", command: "splunkSoar.reportIssue"}),
            ]
		}

        return Promise.resolve([])
	}
}

export class HelpTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.data = data
        this.iconPath = new vscode.ThemeIcon(data.icon)
	}

	contextValue = 'soarhelptreeitem';
	
}