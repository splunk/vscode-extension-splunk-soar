import * as vscode from 'vscode'
import { addOrReplace, removeIfExists } from '../utils'
export const ENV_KEY = "splunkSOAR.environments"
export const ACTIVE_ENV_KEY = "splunkSOAR.activeEnvironment"
import {IActionContext, MultiStepInput} from '../commands/apps/runAction'
import { refreshViews } from '../views/views'
import { SoarInstancesTreeItem } from '../views/environments'
import { getClientForEnvironment, SoarClient } from '../soar/client'

function deriveEnvKey(url: string, username: string) {
    return `${username}@${url}`
}

interface BaseConnectEnvironment {
    url: string,
    sslVerify: boolean,
    username: string
}

interface ConnectEnvironment extends BaseConnectEnvironment {
    password: string
}

interface ConfiguredConnectEnvironment extends BaseConnectEnvironment {
    key: string
}

const wizardTitle = "Connect Environment"
const totalSteps = 4

function shouldResume() {
    // Could show a notification with the option to resume.
    return new Promise<boolean>((resolve, reject) => {
        // noop
    });
}

async function connectEnvironmentWizard() {
    const state = {}
    await MultiStepInput.run(input => connectUrlInput(input, state))
    return state as ConnectEnvironment
}

async function connectUrlInput(input: MultiStepInput, state: Partial<ConnectEnvironment>){
    state.url = await input.showInputBox({
        title: wizardTitle,
        step: 1,
        totalSteps: totalSteps,
        value: state.url || '',
        prompt: `SOAR Environment URL`,
        shouldResume: shouldResume,
        validate: validateNoTrailingSlash,
        ignoreFocusOut: true
    });

    return (input: MultiStepInput) => connectSslVerifyInput(input, state);
}
async function connectSslVerifyInput(input: MultiStepInput, state: Partial<ConnectEnvironment>){
    let sslPick = await input.showQuickPick({
        title: wizardTitle,
        step: 2,
        totalSteps: totalSteps,
        placeholder: 'Verify TLS?',
        items: [{"label": "$(lock) Yes"}, {"label": "$(unlock) No"}],
        shouldResume: shouldResume,
        ignoreFocusOut: true
    });
    state.sslVerify = sslPick.label === "Yes"
    return (input: MultiStepInput) => conectUsernameInput(input, state);
}

async function conectUsernameInput(input: MultiStepInput, state: Partial<ConnectEnvironment>){
    state.username = await input.showInputBox({
        title: wizardTitle,
        step: 3,
        totalSteps: totalSteps,
        value: state.username || '',
        prompt: `Username`,
        shouldResume: shouldResume,
        validate: validateNameIsUnique,
        ignoreFocusOut: true
    });

    return (input: MultiStepInput) => connectPasswordInput(input, state);
}

async function connectPasswordInput(input: MultiStepInput, state: Partial<ConnectEnvironment>){
    state.password = await input.showInputBox({
        title: wizardTitle,
        step: 4,
        totalSteps: totalSteps,
        value: '',
        prompt: `Password`,
        shouldResume: shouldResume,
        validate: validateNameIsUnique,
        isPassword: true,
        ignoreFocusOut: true
    });

    return
}


async function validateNameIsUnique(name: string) {
    // ...validate...
    return name === 'vscode' ? 'Name not unique' : undefined;
}

async function validateNoTrailingSlash(url: string) {
    if (url.endsWith("/")) {
        return "Please remove the trailing slash"
    } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return "Please ensure that the URL starts with http:// or https://"
    }
    return 
}



export async function connectEnvironment(context: vscode.ExtensionContext) {
    let state = await connectEnvironmentWizard()

    if (!state.password || !state.username || !state.url) {
        vscode.window.showErrorMessage("Could not add environment")
        return
    }

    let envKey = deriveEnvKey(state.url, state.username)
    let newEnv = {"key": envKey , "url": state.url, "username": state.username, "sslVerify": state.sslVerify}

    let currentEnvironments = context.globalState.get(ENV_KEY) || []
    console.log(currentEnvironments)

    let newEnvironments = addOrReplace(currentEnvironments, newEnv)
    context.globalState.update(ENV_KEY, newEnvironments)
    context.secrets.store(envKey, state.password)

    if (newEnvironments.length === 1) {
        try {
            await activateEnvironment(context, {"data": newEnvironments[0]})
            await refreshViews()
        } catch (error) {
            vscode.window.showWarningMessage("Added environment but could not activate it.")
        }
    }

    await vscode.commands.executeCommand('splunkSoar.environments.refresh');
}

export async function disconnectEnvironment(context: vscode.ExtensionContext, actionContext: IActionContext) {
    let key = actionContext.data["key"]

    let choice = await vscode.window.showInformationMessage(`Do you want to remove ${key}?`, ...["Yes", "No"])
    if (choice == "No") {
        return
    }

    let currentEnvironments = context.globalState.get(ENV_KEY) || []
    let newEnvironments = removeIfExists(currentEnvironments, "key", key)

    if (key == context.globalState.get(ACTIVE_ENV_KEY)) {
        vscode.window.showInformationMessage("Active environment got disconnected. Please ensure an another environment is activated to use the SOAR extension.")
        context.globalState.update(ACTIVE_ENV_KEY, undefined)
        vscode.commands.executeCommand('setContext', 'splunkSoar.environments.hasActive', false);
    }

    context.globalState.update(ENV_KEY, newEnvironments)
    await refreshViews()
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
        await refreshViews()    
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
}

export function getActiveEnvironment(context: vscode.ExtensionContext) {
    let activeKey: string = context.globalState.get(ACTIVE_ENV_KEY)!
    return getEnvironment(context, activeKey)
}

export async function getEnvironment(context: vscode.ExtensionContext, envKey: string) {
    let currentEnvironments: ConfiguredConnectEnvironment[] = context.globalState.get(ENV_KEY) || []

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


export async function listEnvironments(context: vscode.ExtensionContext) {
    let environments: ConfiguredConnectEnvironment[] = context.globalState.get(ENV_KEY) || []
    return environments
}

export async function openEnvironmentWeb(context: vscode.ExtensionContext, environmentContext: SoarInstancesTreeItem) {
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

export async function environmentVersion(context: vscode.ExtensionContext, environmentContext: SoarInstancesTreeItem) {
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

    client.version().then(
        function(response) {
            let {version} = response.data
            vscode.window.showInformationMessage(`SOAR Version: ${version}`)
        }
    )
}

export async function copyPasswordToClipboard(context: vscode.ExtensionContext, environmentContext: SoarInstancesTreeItem) {
    let env: ConfiguredConnectEnvironment = environmentContext.data

    let environment = await getEnvironment(context, env.key)
    let client = new SoarClient(environment.url, environment.username, environment.password, environment.sslVerify)

    vscode.env.clipboard.writeText(client.password)
    vscode.window.setStatusBarMessage("Copied password to clipboard", 2000)
}

export async function pickEnvironment (context: vscode.ExtensionContext) {
    let envs = await listEnvironments(context)
    let envItems = envs.map((env) => ({'label': env["key"], "description": env.username}))
    let selectedEnv = await vscode.window.showQuickPick(envItems, {canPickMany: false})
    if (!selectedEnv) {
        return undefined
    }
    return selectedEnv.label
}