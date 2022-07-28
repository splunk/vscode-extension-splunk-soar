import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client'
import { addOrReplace, removeIfExists } from '../../utils'
import { getActiveEnvironment } from '../environments/environments'

export const PINNED_APPS_KEY = "splunkSOAR.pinnedApps"

export interface PinnedApp {
    key: string,
    appId: string,
    environment: string
}

// Add an App to Pinned Apps
export async function pinApp(context: vscode.ExtensionContext, appContext: any) {
    let appId = String(appContext.data.app.id)

    let pinnedApps = context.globalState.get(PINNED_APPS_KEY) || []
    let newPinnedApp = await pinnedAppFromId(context, appId)

    let newPinnedApps = addOrReplace(pinnedApps, newPinnedApp)
    context.globalState.update(PINNED_APPS_KEY, newPinnedApps)
    await vscode.commands.executeCommand('splunkSoar.apps.refresh')
}


// Remove an App from Pinned Apps
export async function unpinApp(context: vscode.ExtensionContext, appContext: any) {
    let appId = appContext.data.app.id

    let pinnedApps = context.globalState.get(PINNED_APPS_KEY) || []
    let pinnedApp = await pinnedAppFromId(context, appId)
    let newPinnedApps = removeIfExists(pinnedApps, "key", pinnedApp.key)
    context.globalState.update(PINNED_APPS_KEY, newPinnedApps)

    await vscode.commands.executeCommand('splunkSoar.apps.refresh')
}

export async function pinnedAppFromId(context: vscode.ExtensionContext, appId: string) {
    let env = await getActiveEnvironment(context)
 
    let pinnedApp: PinnedApp = {
        "key": `${appId}@${env.key}`,
        "appId": appId,
        "environment": env.key
    }
    return pinnedApp
}

export async function listPinnedApps(context: vscode.ExtensionContext) {
    let env = await getActiveEnvironment(context)
    let pinnedApps: PinnedApp[] = context.globalState.get(PINNED_APPS_KEY) || []

    pinnedApps = pinnedApps.filter(entry => entry.environment == env.key)
    return pinnedApps
}

export async function removePinnedAppsForEnv(context: vscode.ExtensionContext, envKey: string) {
    let pinnedApps: PinnedApp[] = context.globalState.get(PINNED_APPS_KEY) || []
    let newPinnedApps = pinnedApps.filter((app: PinnedApp) => {app.environment != envKey})
    context.globalState.update(PINNED_APPS_KEY, newPinnedApps)
}