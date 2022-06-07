import * as vscode from 'vscode';
import { CONTAINER_WATCHER_KEY, listActiveWatchedContainers, WatchedContainer } from '../commands/containers/containerWatcher';
import { getClientForActiveEnvironment, SoarClient } from '../soar/client';
import { zip } from '../utils';

export class SoarContainerWatcherTreeProvider implements vscode.TreeDataProvider<ContainerTreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<ContainerTreeItem | undefined | void> = new vscode.EventEmitter<ContainerTreeItem | undefined | void>();
	readonly onDidChangeTreeData: vscode.Event<ContainerTreeItem | undefined | void> = this._onDidChangeTreeData.event;

	constructor(private context: vscode.ExtensionContext) {
	}

	refresh() {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: ContainerTreeItem): vscode.TreeItem {
		return element
	}

	async getChildren(element?: ContainerTreeItem): Promise<ContainerTreeItem[]> {
        let client: SoarClient;
		try {
			client = await getClientForActiveEnvironment(this.context)
		} catch(error) {
			return Promise.resolve([])
		}

        if (!element) {
			let watchedContainers: WatchedContainer[] = await listActiveWatchedContainers(this.context)
			let containerResponses = await Promise.allSettled(watchedContainers.map((entry: WatchedContainer) => client.getContainer(entry.containerId)))
			let containerInfo = zip(watchedContainers, containerResponses)



			let watchedContainerTreeItems = containerInfo.map((entry: any) => {
				if (entry[1].status == "fulfilled") {
					return new ContainerItem(`${entry[0]["containerId"]}: ${entry[1].value["data"]["name"]}` , entry, vscode.TreeItemCollapsibleState.Collapsed)
				} else {
					return new ContainerTreeItem(`${entry[0]["containerId"]}: Not found` , entry, vscode.TreeItemCollapsibleState.None)
				}
			})
	
			return Promise.resolve(watchedContainerTreeItems)
		}

        if (element.contextValue == "soarcontainer") {
			let artifact_count = element.data[1].value.data.artifact_count
			let artifactCollapsed = artifact_count == 0 ? vscode.TreeItemCollapsibleState.None : vscode.TreeItemCollapsibleState.Collapsed
            return [
                new ContainerArtifactSection("Artifacts", {...element.data, icon: "symbol-class"}, artifactCollapsed),
                new ContainerVaultSection("Vault", {...element.data, icon: "symbol-enum"}, vscode.TreeItemCollapsibleState.Collapsed),
				new ContainerNoteSection("Notes", {...element.data, icon: "preview"}, vscode.TreeItemCollapsibleState.Collapsed)
            ]
        }

		if (element.contextValue == "soarartifactsection") {
			let containerId = element.data[1].value.data.id
			let containerArtifacts = await client.getContainerArtifacts(containerId)
			let artifactData = containerArtifacts.data.data

			let artifactElements =  artifactData.map((entry: any) => (new ArtifactItem(entry["name"], entry, vscode.TreeItemCollapsibleState.None)))	
			return Promise.resolve(artifactElements)

		}

		if (element.contextValue == "soarvaultsection") {
			let containerId = element.data[1].value.data.id
			let containerAttachments = await client.getContainerAttachments(containerId)
			let vaultData = containerAttachments.data.data

			let vaultElement =  vaultData.map((entry: any) => (new VaultItem(entry["name"], entry, vscode.TreeItemCollapsibleState.None)))	
			return Promise.resolve(vaultElement)
		}


		if (element.contextValue == "soarnotesection") {
			let containerId = element.data[1].value.data.id
			let containerNotes = await client.getContainerNotes(containerId)
			let noteData = containerNotes.data.data

			let noteElements =  noteData.map((entry: any) => (new NoteItem(entry["title"], entry, vscode.TreeItemCollapsibleState.None)))	
			return Promise.resolve(noteElements)
		}

        return Promise.resolve([])
	}
}

export class ContainerTreeItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
	) {
		super(label, collapsibleState);
		this.data = data
	}

	contextValue = 'soarcontainer';
	
}

export class ContainerItem extends ContainerTreeItem {
    constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
	) {
		super(label, data, collapsibleState);

		let containerData = this.data[1].value.data

		if (containerData["container_type"] == "case") {
			this.iconPath = new vscode.ThemeIcon("briefcase", new vscode.ThemeColor("symbolIcon.methodForeground"))
		} else {
			this.iconPath = new vscode.ThemeIcon("symbol-method")
		}

		let containerLabel = this.data[1].value.data["label"]
		let containerOwner = this.data[1].value.data["_pretty_owner"]
		let containerCreated = this.data[1].value.data["_pretty_create_time"]
		let containerUpdated = this.data[1].value.data["_pretty_container_update_time"]
		this.description = `label: ${containerLabel} • owner: ${containerOwner} • created: ${containerCreated} • updated: ${containerUpdated}`
	}
}

export class ContainerArtifactSection extends ContainerTreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
	) {
		super(label, data, collapsibleState);
        this.iconPath = new vscode.ThemeIcon(data.icon)
		let artifact_count = data[1].value.data.artifact_count
		this.description = JSON.stringify(data[1].value.data.artifact_count)
	}

	contextValue = 'soarartifactsection';
	
}

export class ArtifactItem extends ContainerTreeItem {
    constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
	) {
		super(label, data, collapsibleState);
		this.description = `label: ${data.label} • type: ${data.type} • source identifier: ${data.source_data_identifier}`
        this.iconPath = new vscode.ThemeIcon("symbol-variable")
	}

	contextValue = 'soarartifact';
}

export class ContainerVaultSection extends ContainerTreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
	) {
		super(label, data, collapsibleState);
        this.iconPath = new vscode.ThemeIcon(data.icon)
	}

	contextValue = 'soarvaultsection';
	
}

export class ContainerNoteSection extends ContainerTreeItem {
	constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
	) {
		super(label, data, collapsibleState);
        this.iconPath = new vscode.ThemeIcon(data.icon)
	}

	contextValue = 'soarnotesection';
	
}


export class VaultItem extends ContainerTreeItem {
    constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
	) {
		super(label, data, collapsibleState);
        this.iconPath = new vscode.ThemeIcon("symbol-enum-member")
		this.description = `hash: ${data["_pretty_hash"]}`
	}

	contextValue = 'soarvaultitem';
}

export class NoteItem extends ContainerTreeItem {
    constructor(
		public readonly label: string,
		public readonly data: any,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
	) {
		super(label, data, collapsibleState);
        this.iconPath = new vscode.ThemeIcon("pencil")
		this.description = `${data["id"]}`
	}

	contextValue = 'soarnoteitem';
}