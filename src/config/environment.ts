import * as vscode from 'vscode'
import { addOrReplace, removeIfExists } from '../utils'
export const ENV_KEY = "splunkSOAR.environments"
export const ACTIVE_ENV_KEY = "splunkSOAR.activeEnvironment"
import {MultiStepInput} from '../commands/apps/runAction'

function deriveEnvKey(url, username) {
    return `${username}@${url}`
}

interface ConnectEnvironment {
    url: string,
    sslVerify: boolean
    username: string,
    password: string
}

const wizardTitle = "Connect a SOAR Environment"
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

async function connectUrlInput(input: MultiStepInput, state){
    state.url = await input.showInputBox({
        title: wizardTitle,
        step: 1,
        totalSteps: totalSteps,
        value: state.url || '',
        prompt: `SOAR Environment URL`,
        shouldResume: shouldResume,
        validate: validateNameIsUnique
    });

    return (input: MultiStepInput) => connectSslVerifyInput(input, state);
}
async function connectSslVerifyInput(input: MultiStepInput, state){
    let sslPick = await input.showQuickPick({
        title: wizardTitle,
        step: 2,
        totalSteps: totalSteps,
        placeholder: 'Verify TLS?',
        items: [{"label": "Yes"}, {"label": "No"}],
        activeItem: typeof state.sslVerify !== 'string' ? state.sslVerify : undefined,
        shouldResume: shouldResume
    });
    state.sslVerify = sslPick.label === "Yes"
    return (input: MultiStepInput) => conectUsernameInput(input, state);
}

async function conectUsernameInput(input: MultiStepInput, state){
    state.username = await input.showInputBox({
        title: wizardTitle,
        step: 3,
        totalSteps: totalSteps,
        value: state.username || '',
        prompt: `Username`,
        shouldResume: shouldResume,
        validate: validateNameIsUnique
    });

    return (input: MultiStepInput) => connectPasswordInput(input, state);
}

async function connectPasswordInput(input: MultiStepInput, state){
    state.password = await input.showInputBox({
        title: wizardTitle,
        step: 4,
        totalSteps: totalSteps,
        value: '',
        prompt: `Password`,
        shouldResume: shouldResume,
        validate: validateNameIsUnique,
        isPassword: true
    });

    return
}


async function validateNameIsUnique(name: string) {
    // ...validate...
    return name === 'vscode' ? 'Name not unique' : undefined;
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
    
    if (newEnvironments.length === 1) {
        context.globalState.update(ACTIVE_ENV_KEY, envKey)
        await vscode.commands.executeCommand('splunkSoar.environments.refresh');
        await vscode.commands.executeCommand('splunkSoar.apps.refresh');
        await vscode.commands.executeCommand('splunkSoar.actionRuns.refresh');    
    }

    context.globalState.update(ENV_KEY, newEnvironments)
    context.secrets.store(envKey, state.password)
    await vscode.commands.executeCommand('splunkSoar.environments.refresh');
}

export async function disconnectEnvironment(context, actionContext) {
    console.log("disconnecting")
    let key = actionContext.data["key"]

    let choice = await vscode.window.showInformationMessage(`Do you want to remove ${key}?`, ...["Yes", "No"])
    if (choice == "No") {
        return
    }

    let currentEnvironments = context.globalState.get(ENV_KEY) || []
    let newEnvironments = removeIfExists(currentEnvironments, "key", key)

    context.globalState.update(ENV_KEY, newEnvironments)
    await vscode.commands.executeCommand('splunkSoar.environments.refresh');
    await vscode.commands.executeCommand('splunkSoar.actionRuns.refresh');
    await vscode.commands.executeCommand('splunkSoar.apps.refresh');
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