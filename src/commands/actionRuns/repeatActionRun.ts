import { window, ExtensionContext, ProgressLocation} from 'vscode';
import { getClientForActiveEnvironment } from '../../soar/client';
import { processRunAction, IActionRunContext } from './actionRuns';

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
			await processRunAction(actionName, actionContainer, actionRunTargets, progress, context)
	})
	}).catch(err => {
		console.log(err)
	})
}


export async function repeatLastActionRun(context: ExtensionContext) {
	let client = await getClientForActiveEnvironment(context)

	let actionRunResponse = await client.getLastUserActionRun()
	let actionRun = actionRunResponse.data["data"][0]

	client.getActionRun(actionRun["id"]).then(function(actionRun) {
		let actionName = actionRun.data["action"]
		let actionContainer = actionRun.data["container"]
		let actionRunTargets = actionRun.data["targets"]

		window.withProgress({
			location: ProgressLocation.Notification,
			title: `Repeating ${actionName}`,
			cancellable: false
		}, async (progress, token) => {
			await processRunAction(actionName, actionContainer, actionRunTargets, progress, context)
	})
	}).catch(err => {
		console.log(err)
	})
}