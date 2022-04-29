import { QuickPickItem, window, Disposable, CancellationToken, QuickInputButton, QuickInput, ExtensionContext, QuickInputButtons, Uri, ProgressLocation, env, workspace, commands } from 'vscode';
import { getConfiguredClient } from '../../soar/client';

function wait(ms = 1000) {
	return new Promise(resolve => {
	  console.log(`waiting ${ms} ms...`);
	  setTimeout(resolve, ms);
	});
}

export async function repeatActionRun(context: ExtensionContext, actionRunContext) {
    let client = getConfiguredClient()
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
			
			while (actionRunResult.data.status === "running") {
				progress.report({increment: 25, message: "Still running..."})
				await wait()
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
			commands.executeCommand('soarActionRuns.refresh');
		})
	}).catch(err => {
		console.log(err)
	})
}