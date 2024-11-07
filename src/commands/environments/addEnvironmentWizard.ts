 //@ts-nocheck
import {MultiStepInput} from '../../wizard/MultiStepInput'
import { ConnectEnvironment } from './environments';

const wizardTitle = "Add Environment"
const totalSteps = 5

function shouldResume() {
    // Could show a notification with the option to resume.
    return new Promise<boolean>((resolve, reject) => {
        // noop
    });
}

export async function addEnvironmentWizard() {
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
        ignoreFocusOut: true,
        canSelectMany: false
    });
    state.sslVerify = sslPick[0].label === "Yes"
    return (input: MultiStepInput) => authTypeInput(input, state);
}

async function authTypeInput(input: MultiStepInput, state: Partial<ConnectEnvironment>){
    let authPick = await input.showQuickPick({
        title: wizardTitle,
        step: 3,
        totalSteps: totalSteps,
        placeholder: 'Auth type',
        value: state.authType || '',
        items: [{"label": "local"}, {"label": "token"}],
        shouldResume: shouldResume,
        ignoreFocusOut: true,
        canSelectMany: false
    });

    if (authPick[0].label === "local") {
        state.authType = "local";
        return (input: MultiStepInput) => connectUsernameInput(input, state);
    }
    else {
        state.authType = "token";
        return (input: MultiStepInput) => connectTokenNameInput(input, state);
    }

}

async function connectUsernameInput(input: MultiStepInput, state: Partial<ConnectEnvironment>){
    state.username = await input.showInputBox({
        title: wizardTitle,
        step: 4,
        totalSteps: totalSteps,
        value: state.username || '',
        prompt: `Username`,
        shouldResume: shouldResume,
        validate: validateNameIsUnique,
        ignoreFocusOut: true
    });

    return (input: MultiStepInput) => connectPasswordInput(input, state);
}

async function connectTokenNameInput(input: MultiStepInput, state: Partial<ConnectEnvironment>){
    state.username = await input.showInputBox({
        title: wizardTitle,
        step: 4,
        totalSteps: totalSteps,
        value: state.username || '',
        prompt: `Token name`,
        shouldResume: shouldResume,
        validate: validateNameIsUnique,
        ignoreFocusOut: true
    });

    return (input: MultiStepInput) => connectTokenInput(input, state);
}

async function connectTokenInput(input: MultiStepInput, state: Partial<ConnectEnvironment>){
    state.password = await input.showInputBox({
        title: wizardTitle,
        step: 5,
        totalSteps: totalSteps,
        value: '',
        prompt: `Token`,
        shouldResume: shouldResume,
        validate: validateNameIsUnique,
        isPassword: true,
        ignoreFocusOut: true
    });

    return;
}

async function connectPasswordInput(input: MultiStepInput, state: Partial<ConnectEnvironment>){
    state.password = await input.showInputBox({
        title: wizardTitle,
        step: 5,
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
