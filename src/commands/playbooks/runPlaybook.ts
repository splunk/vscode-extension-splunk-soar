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

export async function runPlaybookInput(context: vscode.ExtensionContext, playbookContext: IPlaybookContext) {
    interface PlaybookRunState {
        playbook_id: string;
        container_id: string
        scope: string;
    }

    const title = `Run Playbook: ${JSON.stringify(playbookContext.data.playbook.name)}`;
    const totalSteps = 2;

    async function collectInputs() {
        const state = {
            playbook_id: playbookContext.data.playbook.id
        } as Partial<PlaybookRunState>;
        await MultiStepInput.run(input => pickContainer(input, state));
        return state as PlaybookRunState;
    }

	function shouldResume() {
		// Could show a notification with the option to resume.
		return new Promise<boolean>((resolve, reject) => {
			// noop
		});
	}
	async function validateContainerExists(containerId: string) {
		let client = await getClientForActiveEnvironment(context)

		try {
			await client.getContainer(containerId)
			return undefined
		} catch {
			return 'Container was not found in Splunk SOAR. Please enter a valid ID.'
		}
	}

    async function pickContainer(input: MultiStepInput, state: Partial<PlaybookRunState>){
        state.container_id = await input.showInputBox({
			title,
			step: 1,
			totalSteps: totalSteps,
			value: state.container_id || '',
			prompt: `Container ID`,
			shouldResume: shouldResume,
            validate: validateContainerExists
		});

        return (input: MultiStepInput) => scopeInput(input, state);

    }

    async function scopeInput(input: MultiStepInput, state: Partial<PlaybookRunState>){
        let scopePick = await input.showQuickPick({
            title,
            step: 2,
            totalSteps: totalSteps,
            placeholder: 'Scope?',
            items: [{"label": "all", "description": "Run the playbook for only artifacts added to the container since the last time the playbook was run"}, {"label": "new", "description": "Run the playbook against all artifacts in the container"}, {"label": "artifact", "description": "Run the playbook on specific artifact(s)"}],
            shouldResume: shouldResume,
            canSelectMany: false
        });
        state.scope = scopePick[0].label

        if (state.scope === "artifact") {
            return (input: MultiStepInput) => artifactInput(input, state);
        }

    }    
    async function artifactInput(input: MultiStepInput, state: Partial<PlaybookRunState>){
        let client = await getClientForActiveEnvironment(context)

        let artifacts = (await client.getContainerArtifacts(state.container_id!)).data.data
        
        if (artifacts.length == 0) {
            vscode.window.showErrorMessage("No artifacts found on container. Please re-run playbook with different scope type")
            return
        }
        let artifactPick: vscode.QuickPickItem[] = await input.showQuickPick({
            title,
            step: 3,
            totalSteps: totalSteps + 1,
            placeholder: 'Artifact?',
            items: artifacts.map((artifact: any) => {return {"label": String(artifact["id"]), "description": artifact["name"]}}),
            shouldResume: shouldResume,
            canSelectMany: true
        });
        state.scope = "[" + artifactPick.map((pick: any) => pick.label).join(",") + "]"
    } 

    const state = await collectInputs();

    vscode.window.withProgress({
		location: vscode.ProgressLocation.Notification,
		title: `Running ${playbookContext.data.playbook["name"]}'`,
		cancellable: false
	}, async (progress, token) => {
		await processPlaybookRun(progress, context, parseInt(state.playbook_id), state.container_id, state.scope)
	})
}
