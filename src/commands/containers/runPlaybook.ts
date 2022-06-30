import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client';
import { MultiStepInput } from '../../wizard/MultiStepInput';
import { processPlaybookRun } from '../playbookRuns/playbookRuns';

export async function runPlaybookOnContainer(context: vscode.ExtensionContext, containerItemContext: any) {
    interface PlaybookRunState {
        playbook_id: number;
        container_id: string
        scope: vscode.QuickPickItem;
    }

    let containerInfo: any;

    if (containerItemContext.data[1].status == "fulfilled") {
        containerInfo = containerItemContext.data[1].value.data
    } else {
        return
    }

    let client = getClientForActiveEnvironment(context)

    const title = `Run Playbook on Container: ${JSON.stringify(containerInfo.id)}`;
    const totalSteps = 1;

    async function collectInputs() {
        const state = {
            container_id: JSON.stringify(containerInfo.id)
        } as Partial<PlaybookRunState>;
        await MultiStepInput.run(input => pickPlaybook(input, state));
        return state as PlaybookRunState;
    }

	function shouldResume() {
		// Could show a notification with the option to resume.
		return new Promise<boolean>((resolve, reject) => {
			// noop
		});
	}

    async function pickPlaybook(input: MultiStepInput, state: Partial<PlaybookRunState>){
        
        let playbooks = await (await (await client).listPlaybooks()).data

        let playbookPick = await input.showQuickPick({
            title,
            step: 2,
            totalSteps: totalSteps,
            placeholder: 'Playbook?',
            items: playbooks.data.map((playbook: any) => { return {"label": playbook.name, "description": `${JSON.stringify(playbook.id)}`}}),
            shouldResume: shouldResume
        });
        state.playbook_id = Number(playbookPick.description)
        return (input: MultiStepInput) => scopeInput(input, state);
    }

    async function scopeInput(input: MultiStepInput, state: Partial<PlaybookRunState>){
        let scopePick = await input.showQuickPick({
            title,
            step: 2,
            totalSteps: totalSteps,
            placeholder: 'Scope?',
            items: [{"label": "all", "description": "Run the playbook for only artifacts added to the container since the last time the playbook was run"}, {"label": "new", "description": "Run the playbook against all artifacts in the container"}],
            shouldResume: shouldResume
        });
        state.scope = scopePick
    }    

    const state = await collectInputs();

    vscode.window.withProgress({
		location: vscode.ProgressLocation.Notification,
		title: `Running Playbook'`,
		cancellable: false
	}, async (progress, token) => {
		await processPlaybookRun(progress, context, state.playbook_id, state.container_id, state.scope.label)
	})
}
