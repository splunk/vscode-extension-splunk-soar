import * as vscode from 'vscode'
import { addOrReplace, removeIfExists } from '../utils'
export const ENV_KEY = "splunkSOAR.environments"
export const ACTIVE_ENV_KEY = "splunkSOAR.activeEnvironment"

function deriveEnvKey(url, username) {
    return `${username}@${url}`
}

export async function connectEnvironment(context: vscode.ExtensionContext) {
    console.log("connecting")
    const urlInput = await vscode.window.showInputBox({"title": "SOAR URL"})
    const userInput = await vscode.window.showInputBox({"title": "SOAR Username"})
    const verifyInput = await vscode.window.showQuickPick(["Yes", "No"], {canPickMany: false, title: "Verify SSL?"})
    const passwordInput = await vscode.window.showInputBox({"title": "SOAR Password", "password": true})

    if (!userInput || !userInput || !passwordInput || !verifyInput) {
        vscode.window.showErrorMessage("Could not add environment")
        return
    }

    let envKey = deriveEnvKey(urlInput, userInput)
    let newEnv = {"key": envKey , "url": urlInput, "username": userInput, "sslVerify": verifyInput == "Yes" ? true : false}

    let currentEnvironments = context.globalState.get(ENV_KEY) || []
    console.log(currentEnvironments)

    let newEnvironments = addOrReplace(currentEnvironments, newEnv)
    
    if (newEnvironments.length === 1) {
        context.globalState.update(ACTIVE_ENV_KEY, envKey)
    }

    context.globalState.update(ENV_KEY, newEnvironments)
    context.secrets.store(envKey, passwordInput)
    await vscode.commands.executeCommand('splunkSoar.environments.refresh');
}

export async function disconnectEnvironment(context, actionContext) {
    console.log("disconnecting")
    let key = actionContext.data["key"]
    let currentEnvironments = context.globalState.get(ENV_KEY) || []

    let newEnvironments = removeIfExists(currentEnvironments, "key", key)

    context.globalState.update(ENV_KEY, newEnvironments)
    await vscode.commands.executeCommand('splunkSoar.environments.refresh');
}

export async function activateEnvironment(context: vscode.ExtensionContext, actionContext) {
    let key = actionContext.data["key"]

    context.globalState.update(ACTIVE_ENV_KEY, key)
    await vscode.commands.executeCommand('splunkSoar.environments.refresh');
    await vscode.commands.executeCommand('splunkSoar.apps.refresh');
    await vscode.commands.executeCommand('splunkSoar.actionRuns.refresh');
}

export function getActiveEnvironment(context: vscode.ExtensionContext) {
    let activeKey: string = context.globalState.get(ACTIVE_ENV_KEY)
    return getEnvironment(context, activeKey)
}

export async function getEnvironment(context: vscode.ExtensionContext, envKey: string) {
    let currentEnvironments = context.globalState.get(ENV_KEY) || []
    let password = await context.secrets.get(envKey)
    let env = currentEnvironments.find(env => env.key == envKey)

    return {...env, "password": password}
}