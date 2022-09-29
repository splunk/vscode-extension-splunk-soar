//@ts-nocheck
import * as vscode from 'vscode'
import { MultiStepInput } from '../../wizard/MultiStepInput';
import { getClientForActiveEnvironment } from '../../soar/client';
import { processPlaybookRun } from '../playbookRuns/playbookRuns';

export interface IPlaybookContext {
    data: {
        playbook: {
            id: string,
            name: string
        }
    }
}

export interface DialogContext {
    context: vscode.ExtensionContext
    title: String,
    totalSteps: Number
}

export function shouldResume() {
    // Could show a notification with the option to resume.
    return new Promise<boolean>((resolve, reject) => {
        // noop
    });
}

async function validateContainerExists(context, containerId: string) {
    let client = await getClientForActiveEnvironment(context)

    try {
        await client.getContainer(containerId)
        return undefined
    } catch {
        return 'Container was not found in Splunk SOAR. Please enter a valid ID.'
    }
}

export async function pickContainer(dialogContext: DialogContext, input: MultiStepInput, state: Partial<PlaybookRunState>, next: CallableFunction) {
    state.container_id = await input.showInputBox({
        title: dialogContext.title,
        step: 1,
        totalSteps: dialogContext.totalSteps,
        value: state.container_id || '',
        prompt: `Container ID`,
        shouldResume: shouldResume,
        validate: (str) => validateContainerExists(dialogContext.context, str)
    });

    return (input: MultiStepInput) => next(input, state);
}


export async function runPlaybookInput(context: vscode.ExtensionContext, outputChannel: vscode.OutputChannel, playbookContext: IPlaybookContext) {
    interface PlaybookRunState {
        playbook_id: string;
        container_id: string
        scope: string;
        inputs: any
    }

    const title = `Run Playbook: ${JSON.stringify(playbookContext.data.playbook.name)}`;

    const isInputPlaybook = playbookContext.data.playbook.playbook_type === "data"
    const inputSpec = playbookContext.data.playbook.input_spec

    let totalSteps = 2;
    if (isInputPlaybook) {
        totalSteps += inputSpec.length
    }

    const dialogContext = {
        context: context,
        title: title,
        totalSteps: totalSteps
    }

    async function collectInputs() {
        const state = {
            playbook_id: playbookContext.data.playbook.id
        } as Partial<PlaybookRunState>;
        await MultiStepInput.run(input => pickContainer(dialogContext, input, state, scopeInput));
        return state as PlaybookRunState;
    }

    /* For input playbooks only*/
    async function pickParam(input: MultiStepInput, state: Partial<PlaybookRunState>, paramIndex: number) {
        const param = inputSpec[paramIndex]
        const paramName = param["name"]
        const paramDescription = param["description"]

        if (state.inputs == undefined) {
            state.inputs = {}
        }

        const enteredParam = await input.showInputBox({
            title,
            step: 3 + paramIndex,
            totalSteps: totalSteps,
            value: '',
            prompt: `${paramName}: ${paramDescription}`,
            shouldResume: shouldResume,
            validate: () => { return undefined }
        })

        if (enteredParam !== undefined) {
            state.inputs[paramName] = enteredParam
        }

        if (paramIndex < inputSpec.length - 1) {
            return (input: MultiStepInput) => pickParam(input, state, paramIndex + 1)
        }
    }

    async function scopeInput(input: MultiStepInput, state: Partial<PlaybookRunState>) {
        let scopePick = await input.showQuickPick({
            title,
            step: 2,
            totalSteps: totalSteps,
            placeholder: 'Scope?',
            items: [{ "label": "all", "description": "Run the playbook for only artifacts added to the container since the last time the playbook was run" }, { "label": "new", "description": "Run the playbook against all artifacts in the container" }, { "label": "artifact", "description": "Run the playbook on specific artifact(s)" }],
            shouldResume: shouldResume,
            canSelectMany: false
        });
        state.scope = scopePick[0].label

        if (state.scope === "artifact") {
            return (input: MultiStepInput) => artifactInput(input, state);
        } else {
            if (isInputPlaybook) {
                return (input: MultiStepInput) => pickParam(input, state, 0)
            }
        }

    }
    async function artifactInput(input: MultiStepInput, state: Partial<PlaybookRunState>) {
        let client = await getClientForActiveEnvironment(context)

        let artifacts = (await client.getContainerArtifacts(state.container_id!)).data.data

        if (artifacts.length == 0) {
            vscode.window.showErrorMessage("No artifacts found on container. Please re-run playbook with different scope type")
            return
        }
        let artifactPick: vscode.QuickPickItem[] = await input.showQuickPick({
            title,
            step: 2,
            totalSteps: totalSteps,
            placeholder: 'Artifact?',
            items: artifacts.map((artifact: any) => { return { "label": String(artifact["id"]), "description": artifact["name"] } }),
            shouldResume: shouldResume,
            canSelectMany: true
        });
        state.scope = "[" + artifactPick.map((pick: any) => pick.label).join(",") + "]"

        if (isInputPlaybook) {
            return (input: MultiStepInput) => pickParam(input, state, 0)
        }
    }

    const state = await collectInputs();

    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: `Running ${playbookContext.data.playbook["name"]}'`,
        cancellable: false
    }, async (progress, token) => {
        await processPlaybookRun(progress, context, outputChannel, parseInt(state.playbook_id), state.container_id, state.scope, state.inputs)
    })
}
