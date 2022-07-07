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
		let client;
		try {
			client = await getClientForActiveEnvironment(this.context)
		} catch(error) {
			return Promise.resolve([])
		}

		const config = vscode.workspace.getConfiguration()
		const ownOnly: boolean = config.get<boolean>("playbooks.showOwnOnly", false)


		if (!element) {
            let playbooksFunc = client.listPlaybooks

			if (ownOnly) {
				playbooksFunc = client.listUserPlaybooks
            }

			return playbooksFunc().then(function (res) {
				let playbookEntries = res.data["data"]
				interface PlaybookRepoMap {
					[key: string]: any[]
				}
				let playbookByRepoMap: PlaybookRepoMap = {
				}

				for (const playbook of playbookEntries) {
					let repo = playbook["_pretty_scm"]
					if (repo in playbookByRepoMap == false) {
						playbookByRepoMap[repo] = []
					}
					playbookByRepoMap[repo].push(playbook)
				}

				let repoTreeItems: any = []

				Object.keys(playbookByRepoMap).map( repo => {
					repoTreeItems.push(new RepoTreeItem(repo, playbookByRepoMap[repo], vscode.TreeItemCollapsibleState.Expanded))
				});

				return repoTreeItems

			}).catch(function(err) {
				console.error(err)
                return Promise.resolve([])
			})
		}
		if (element.contextValue.startsWith("soarrepo")) {
			let playbookTreeItems: any = []

			for (const playbook of element.data) {
				playbookTreeItems.push(new PlaybookTreeItem(playbook.name, {"playbook": playbook}, vscode.TreeItemCollapsibleState.None))
			}
			return playbookTreeItems
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
        this.description = ``
		/*if (data.playbook.active) {
			this.description += "active"
			this.iconPath = new vscode.ThemeIcon("file-code", new vscode.ThemeColor("testing.iconPassed"))
		}*/

	}
    iconPath = new vscode.ThemeIcon("file-code")
	contextValue = 'soarplaybook';
	
}

export class RepoTreeItem extends PlaybookTreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly command?: vscode.Command
	) {
		super(label, collapsibleState, data);
		this.data = data
        this.description = ``
	}
    iconPath = new vscode.ThemeIcon("repo")
	contextValue = 'soarrepo';
	
}
