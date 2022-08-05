import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client';
import {wait} from '../actionRuns/actionRuns'

export async function processPlaybookRun(progress: any, context: vscode.ExtensionContext, outputChannel: vscode.OutputChannel, playbookId: number, containerId: string, scope: string) {
        let client = await getClientForActiveEnvironment(context)
  
        progress.report({ increment: 0 });
		try {
        let result = await client.runPlaybook(playbookId, scope, containerId)
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


		progress.report({increment: 50, message: `Last Status: ${playbookRun.data.status}`})

		if (playbookRun.data.status === "running") {
			vscode.window.showWarningMessage("Playbook execution polling timed out, playbook still running. Will retrieve last known status.")
		}
		
		progress.report({increment: 90, message: "Collecting Results"})

		await vscode.commands.executeCommand("splunkSoar.playbookRuns.logs", {"data": {"playbookRun": playbookRun.data}})

		await vscode.commands.executeCommand('splunkSoar.playbookRuns.refresh');
		await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh')
		} catch(err) {
			console.log(err)
		}	

}