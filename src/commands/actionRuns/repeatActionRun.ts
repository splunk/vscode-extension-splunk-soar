import { QuickPickItem, window, Disposable, CancellationToken, QuickInputButton, QuickInput, ExtensionContext, QuickInputButtons, Uri, ProgressLocation, env, workspace, commands } from 'vscode';
import { getClientForActiveEnvironment } from '../../soar/client';

function wait(ms = 1000) {
	return new Promise(resolve => {
	  setTimeout(resolve, ms);
	});
}


interface IActionRun {
	id: string
}


export interface IActionRunContext {
	data: {
		actionRun: IActionRun,
	}
}

export async function repeatActionRun(context: ExtensionContext, actionRunContext: IActionRunContext) {
    let client = await getClientForActiveEnvironment(context)
	let actionRunId = actionRunContext.data["actionRun"]["id"]

	client.getActionRun(actionRunId).then(function(actionRun) {
		let actionName = actionRun.data["action"]
		let actionContainer = actionRun.data["container"]
		let actionRunTargets = actionRun.data["targets"]

		window.withProgress({
			location: ProgressLocation.Notification,
			title: `Repeating ${actionName}`,
			cancellable: false
		}, async (progress, token) => {
			progress.report({ increment: 0 });
			let result = await client.triggerActionTargets(actionName, actionContainer, actionRunTargets)
			let {action_run_id, message} = result.data
			progress.report({ increment: 10, message: `${message}: Action Run ID: ${action_run_id}`});
			
			let actionRunResult = await client.getActionRun(action_run_id)
			await commands.executeCommand('splunkSoar.actionRuns.refresh');
			
			let maxTries = 30
			let actualTries = 0

			while (actionRunResult.data.status === "running" && actualTries < maxTries) {
				progress.report({increment: 25, message: "Still running..."})
				actualTries += 1
				await wait()
				console.log(`Try: ${actualTries}`);
				actionRunResult = await client.getActionRun(action_run_id)
			}
	
			progress.report({increment: 50, message: `${actionRunResult.data.message}`})
	
			let appRunsResult = await client.getActionRunAppRuns(action_run_id)
			
			progress.report({increment: 75, message: "Collecting Results"})
	
			let appRunId = appRunsResult.data.data[0]["id"]
	
			let appRunResult = await client.getAppRun(appRunId)
	
			let soarOutput = window.createOutputChannel("Splunk SOAR: Action Run");
			soarOutput.clear()
			soarOutput.append(JSON.stringify(appRunResult.data, null, 4))
			soarOutput.show()
			await commands.executeCommand('splunkSoar.actionRuns.refresh');
		})
	}).catch(err => {
		console.log(err)
	})
}