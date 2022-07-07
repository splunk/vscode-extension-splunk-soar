import * as vscode from 'vscode'
import { getActiveEnvironment } from '../../commands/environments/environments';
import { getClientForActiveEnvironment } from '../../soar/client';
import { addOrReplace, removeIfExists } from '../../utils';
// Store in Workspace State, but needs to be on a per-environment basiss

export const CONTAINER_WATCHER_KEY = "splunkSOAR.containerWatcher.containers"

export interface WatchedContainer {
    key: string,
    containerId: string
    environment: string
}

export async function add(context: vscode.ExtensionContext) {

    async function validateContainerExists(containerId: string) {
		let client = await getClientForActiveEnvironment(context)
		try {
			await client.getContainer(containerId)
			return undefined
		} catch {
			return 'Container was not found in Splunk SOAR. Please enter a valid ID.'
		}
	}

    let containerId = await vscode.window.showInputBox({ placeHolder: 'Container ID', validateInput: validateContainerExists });

    if (!containerId) {
        return
    }

    let watchedContainers = context.globalState.get(CONTAINER_WATCHER_KEY) || []
    let newContainer = await watchedContainerFromId(context, containerId)
    
    let newWatchedContainers = addOrReplace(watchedContainers, newContainer)
    context.globalState.update(CONTAINER_WATCHER_KEY, newWatchedContainers)

    await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh')
}

export async function remove(context: vscode.ExtensionContext, containerContext: any) {
    let key = containerContext.data[0]["key"]

    let watchedContainers = context.globalState.get(CONTAINER_WATCHER_KEY) || []
    let newWatchedContainers = removeIfExists(watchedContainers, "key", key)
    context.globalState.update(CONTAINER_WATCHER_KEY, newWatchedContainers)
    await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh')
}

export async function deleteContainer(context: vscode.ExtensionContext, containerContext: any) {
    let containerId = containerContext.data[1].value.data["id"]
    let key = containerContext.data[0]["key"]

    let client = getClientForActiveEnvironment(context)
    await (await client).deleteContainer(containerId)

    let watchedContainers = context.globalState.get(CONTAINER_WATCHER_KEY) || []
    let newWatchedContainers = removeIfExists(watchedContainers, "key", key)
    context.globalState.update(CONTAINER_WATCHER_KEY, newWatchedContainers)

    await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh')
}

export async function clear(context: vscode.ExtensionContext) {
    context.globalState.update(CONTAINER_WATCHER_KEY, undefined)
    await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh')
}

async function watchedContainerFromId(context: vscode.ExtensionContext, id: string) {
    let env = await getActiveEnvironment(context)
    let watchedContainerKey = `${id}@${env.key}`
    let containerToAdd: WatchedContainer = {"key": watchedContainerKey, "containerId": id, "environment": env.key}    
    return containerToAdd
}

export async function listActiveWatchedContainers(context: vscode.ExtensionContext) {
    let env = await getActiveEnvironment(context)
    let watchedContainers: WatchedContainer[] = context.globalState.get(CONTAINER_WATCHER_KEY) || []

    watchedContainers = watchedContainers.filter(entry => entry.environment == env.key)
    return watchedContainers
}
