import * as vscode from 'vscode'
import { addOrReplace, removeIfExists } from '../../utils'
import { refreshViews } from '../../views/views'
import { Environment, SoarEnvironmentsTreeItem } from '../../views/environments'
import { getClientForEnvironment, SoarClient } from '../../soar/client'
import { addEnvironmentWizard } from './addEnvironmentWizard'
import { IActionContext } from '../actionRuns/actionRuns'
import { removePinnedAppsForEnv } from '../apps/pin'

export const ENV_KEY = "splunkSOAR.environments"
export const ACTIVE_ENV_KEY = "splunkSOAR.activeEnvironment"

export interface BaseConnectEnvironment {
    url: string,
    sslVerify: boolean,
    username: string
}

export interface ConnectEnvironment extends BaseConnectEnvironment {
    password: string
}

export interface ConfiguredConnectEnvironment extends BaseConnectEnvironment {
    key: string
}

function deriveEnvKey(url: string, username: string) {
    return `${username}@${url}`
}

export async function addEnvironment(context: vscode.ExtensionContext) {
    let state = await addEnvironmentWizard()

    if (!state.password || !state.username || !state.url) {
        vscode.window.showErrorMessage("Could not add environment")
        return
    }

    let envKey = deriveEnvKey(state.url, state.username)
    let newEnv: ConfiguredConnectEnvironment = {"key": envKey , "url": state.url, "username": state.username, "sslVerify": state.sslVerify}

    let currentEnvironments = listEnvironments(context)

    let newEnvironments = addOrReplace(currentEnvironments, newEnv)
    context.globalState.update(ENV_KEY, newEnvironments)
    context.secrets.store(envKey, state.password)

    if (newEnvironments.length === 1) {
        try {
            await activateEnvironment(context, {"data": newEnvironments[0]})
        } catch (error) {
            vscode.window.showWarningMessage("Added environment but could not activate it.")
        }
    } else {
        await refreshViews(context)
    }
}

export async function removeEnvironment(context: vscode.ExtensionContext, actionContext: IActionContext) {
    let key = actionContext.data["key"]

    let choice = await vscode.window.showWarningMessage(`Do you want to remove ${key}?`, ...["Yes", "No"])
    if (choice !== "Yes") {
        return
    }

    let currentEnvironments = listEnvironments(context)
    let newEnvironments = removeIfExists(currentEnvironments, "key", key)

    if (key == context.globalState.get(ACTIVE_ENV_KEY)) {
        vscode.window.showWarningMessage("Active environment got removed. Please ensure an another environment is activated to use the SOAR extension.")
        context.globalState.update(ACTIVE_ENV_KEY, undefined)
        vscode.commands.executeCommand('setContext', 'splunkSoar.environments.hasActive', false);
    }

    context.globalState.update(ENV_KEY, newEnvironments)

    await removePinnedAppsForEnv(context, key)
    await refreshViews(context)
}

export async function activateEnvironment(context: vscode.ExtensionContext, environmentContext: IActionContext) {
    let envKey: string;

    if (!environmentContext) {
        let envPickResult = await pickEnvironment(context)
        if (!envPickResult) {
            return
        }
        envKey = envPickResult
    } else {
        envKey = environmentContext.data.key
    }

    let client = await getClientForEnvironment(context, envKey)
    try {
        let response = await client.version()
        context.globalState.update(ACTIVE_ENV_KEY, envKey)
        vscode.commands.executeCommand('setContext', 'splunkSoar.environments.hasActive', true);
    } catch (error: any) {
        const {response} = error

        let errorMsg = `Failed to activate environment.`
        if (response?.data?.message) {
            errorMsg += " " + response.data.message
        } else {
            errorMsg += " " + JSON.stringify(error.message)
        }
        vscode.window.showErrorMessage(errorMsg)
        throw new Error(errorMsg)
    }
    await refreshViews(context)
}

export async function getActiveEnvironment(context: vscode.ExtensionContext) {
    let activeKey: string = context.globalState.get(ACTIVE_ENV_KEY)!
    return getEnvironment(context, activeKey)
}

export async function getEnvironment(context: vscode.ExtensionContext, envKey: string) {
    let currentEnvironments = listEnvironments(context)

    if (currentEnvironments.length == 0) {
        throw new Error(`No environments configured.`)
    }

    let password = await context.secrets.get(envKey)

    if (password == undefined) {
        throw new Error(`Could not retrieve password for environment ${envKey}`)
    }

    let env = currentEnvironments.find(env => env.key == envKey)!

    return {...env, "password": password}
}


export function listEnvironments(context: vscode.ExtensionContext): ConfiguredConnectEnvironment[] {
    let environments: ConfiguredConnectEnvironment[] = context.globalState.get(ENV_KEY) || []
    return environments
}

export async function openEnvironmentWeb(context: vscode.ExtensionContext, environmentContext: Environment) {
    let envKey: string;

    if (!environmentContext) {
        let envPickResult = await pickEnvironment(context)
        if (!envPickResult) {
            return
        }
        envKey = envPickResult
    } else {
        envKey = environmentContext.data.key
    }

    let environment = await getEnvironment(context, envKey)
    vscode.env.openExternal(vscode.Uri.parse(environment.url))
}

export async function environmentVersion(context: vscode.ExtensionContext, environmentContext: Environment) {
    let envKey: string;

    if (!environmentContext) {
        let envPickResult = await pickEnvironment(context)
        if (!envPickResult) {
            return
        }
        envKey = envPickResult
    } else {
        envKey = environmentContext.data.key
    }

    let environment = await getEnvironment(context, envKey)
    let client = new SoarClient(environment.url, environment.username, environment.password, environment.sslVerify)

    let response = await client.version().catch((err) => {
        return Promise.reject(err)
    })
    let {version} = response.data

    vscode.window.showInformationMessage(`SOAR Version: ${version}`)
}

export async function copyPasswordToClipboard(context: vscode.ExtensionContext, environmentContext: Environment) {
    let env: ConfiguredConnectEnvironment = environmentContext.data

    let environment = await getEnvironment(context, env.key)
    let client = new SoarClient(environment.url, environment.username, environment.password, environment.sslVerify)

    vscode.env.clipboard.writeText(client.password)
    vscode.window.setStatusBarMessage("Copied password to clipboard", 2000)
}

export async function pickEnvironment (context: vscode.ExtensionContext) {
    let envs = listEnvironments(context)
    let envItems = envs.map((env) => ({'label': env["key"], "description": env.username}))
    let selectedEnv = await vscode.window.showQuickPick(envItems, {canPickMany: false})
    if (!selectedEnv) {
        return undefined
    }
    return selectedEnv.label
}