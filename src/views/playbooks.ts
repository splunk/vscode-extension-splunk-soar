import * as vscode from 'vscode';
import { getClientForActiveEnvironment } from '../soar/client';

export class SoarPlaybookTreeProvider implements vscode.TreeDataProvider<PlaybookTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<PlaybookTreeItem | undefined | void> = new vscode.EventEmitter<PlaybookTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<PlaybookTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	state = {
		"ownActionRunsOnly": false
	}

	constructor(private context: vscode.ExtensionContext) {
	}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: PlaybookTreeItem): vscode.TreeItem {
		return element
	}

	async getChildren(element?: PlaybookTreeItem): Promise<PlaybookTreeItem[]> {
		let client = await getClientForActiveEnvironment(this.context)

		const config = vscode.workspace.getConfiguration()
		const ownOnly: boolean = config.get<boolean>("playbooks.showOwnOnly", false)


		if (!element) {
            let playbooksFunc = client.listPlaybooks

			if (ownOnly) {
				playbooksFunc = client.listUserPlaybooks
            }

			return playbooksFunc().then(function (res) {
				let playbookEntries = res.data["data"]
				let playbookTreeItems = playbookEntries.map((entry: any) => (new PlaybookTreeItem(`${entry['name']}`, { "playbook": entry }, vscode.TreeItemCollapsibleState.None)))
				return playbookTreeItems

			}).catch(function(err) {
				console.error(err)
                return Promise.resolve([])
			})
		}

        return Promise.resolve([])
	}
}

export class PlaybookTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.data = data
        this.description = JSON.stringify(data.playbook.id)

    
	}
    iconPath = new vscode.ThemeIcon("file-code")
	contextValue = 'soarplaybook';
	
}