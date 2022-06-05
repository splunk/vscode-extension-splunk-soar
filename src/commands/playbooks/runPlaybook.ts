import * as vscode from 'vscode'
import { MultiStepInput } from '../apps/runAction';
import { getClientForActiveEnvironment } from '../../soar/client';

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
        scope: vscode.QuickPickItem;
    }

    const title = `Run Playbook: ${JSON.stringify(playbookContext.data.playbook.name)}`;
    const totalSteps = 1;

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
            items: [{"label": "all"}, {"label": "new"}],
            shouldResume: shouldResume
        });
        state.scope = scopePick
    }    

    const state = await collectInputs();
    console.log(state)

    let client = await getClientForActiveEnvironment(context)



    vscode.window.withProgress({
		location: vscode.ProgressLocation.Notification,
		title: `Running ${playbookContext.data.playbook["name"]}'`,
		cancellable: false
	}, async (progress, token) => {
		progress.report({ increment: 0 });
        let result = await client.runPlaybook(state.playbook_id, state.scope.label, state.container_id)
		let {playbook_run_id, message} = result.data
		progress.report({ increment: 10, message: `${message}: Playbook Run ID: ${playbook_run_id}`});
		
		let playbookRun = await client.getPlaybookRun(playbook_run_id)
		await vscode.commands.executeCommand('splunkSoar.playbookRuns.refresh');
					
		const config = vscode.workspace.getConfiguration()

		let maxTries: number = config.get<number>("runAction.timeout", 30)
		let actualTries = 0


		while (playbookRun.data.status === "running" && actualTries < maxTries) {
			progress.report({increment: 25, message: "Still running..."})
			actualTries += 1
			await wait()
			playbookRun = await client.getPlaybookRun(playbook_run_id)
		}


		progress.report({increment: 50, message: `${playbookRun.data.message}`})

		if (playbookRun.data.status === "running") {
			vscode.window.showErrorMessage("Playbook execution timed out, playbook still running. Will retrieve last known status.")
		}
		
		progress.report({increment: 75, message: "Collecting Results"})

		let soarOutput = vscode.window.createOutputChannel("Splunk SOAR: Action Run");
		soarOutput.clear()
		soarOutput.append(playbookRun.data.message)
		soarOutput.show()
		await vscode.commands.executeCommand('splunkSoar.playbookRuns.refresh');
		await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh')
	})

    function wait(ms = 1000) {
        return new Promise(resolve => {
          console.log(`waiting ${ms} ms...`);
          setTimeout(resolve, ms);
        });
    }
}
