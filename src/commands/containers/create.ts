 //@ts-nocheck
import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client'
import { MultiStepInput } from '../../wizard/MultiStepInput'
import { addById } from './containerWatcher'

interface CreateContainer {
    label: string,
    name: string
}

const wizardTitle = "Create Container"
const totalSteps = 2

function shouldResume() {
    // Could show a notification with the option to resume.
    return new Promise<boolean>((resolve, reject) => {
        // noop
    });
}

async function validateNoop(value: string) {
    return undefined
}

export async function createContainer(context: vscode.ExtensionContext) {

    const state: CreateContainer = {
        label: '',
        name: ''
    }

    let client = await getClientForActiveEnvironment(context)

    let containerOptionsReponse = await client.getContainerOptions()
    let labels = containerOptionsReponse.data["label"]


    await MultiStepInput.run(input => labelInput(input, state, labels))

    console.log(state)

    let createResponse = await client.createContainer(state.label, state.name)
    let createResponseData = createResponse.data
    let newContainerId = createResponseData.id

    addById(context, newContainerId)
}

export async function labelInput(input: MultiStepInput, state: Partial<CreateContainer>, labels: string[]) {

    let labelPick = await input.showQuickPick({
        title: wizardTitle,
        step: 1,
        totalSteps: totalSteps,
        placeholder: "Label",
        items: labels.map((entry) => {return {"label": entry}}),
        shouldResume: shouldResume,
        canSelectMany: false
    })

    state.label = labelPick[0].label

    return (input: MultiStepInput) => nameInput(input, state);
}

async function nameInput(input: MultiStepInput, state: Partial<CreateContainer>){
    state.name= await input.showInputBox({
        title: wizardTitle,
        step: 2,
        totalSteps: totalSteps,
        value: state.name || '',
        prompt: `Container Name`,
        shouldResume: shouldResume,
        validate: validateNoop,
        ignoreFocusOut: true
    });

    return;
}