import { window, ExtensionContext, ProgressLocation, OutputChannel} from 'vscode';
import { getClientForActiveEnvironment } from '../../soar/client';
import { ActionRun } from '../../views/actionRun';
import { processRunAction } from './actionRuns';

export async function repeatActionRun(context: ExtensionContext, outputChannel: OutputChannel, actionRunContext: ActionRun) {
    let client = await getClientForActiveEnvironment(context)
	let actionRunId = actionRunContext.data["actionRun"]["id"]

	client.getActionRun(String(actionRunId)).then(function(actionRun) {
		let actionName = actionRun.data["action"]
		let actionContainer = actionRun.data["container"]
		let actionRunTargets = actionRun.data["targets"]

		window.withProgress({
			location: ProgressLocation.Notification,
			title: `Repeating ${actionName}`,
			cancellable: false
		}, async (progress, token) => {
			await processRunAction(actionName, actionContainer, actionRunTargets, progress, context, outputChannel)
	})
	}).catch(err => {
		console.log(err)
	})
}

export async function repeatLastActionRun(context: ExtensionContext, outputChannel: OutputChannel) {
	let client = await getClientForActiveEnvironment(context)

	let actionRunResponse = await client.getLastUserActionRun()

	if (actionRunResponse.data["data"].length == 0) {
		window.showWarningMessage("Did not find any action runs for the active user. Aborting.")
		return
	}
	let actionRun = actionRunResponse.data["data"][0]

	client.getActionRun(String(actionRun["id"])).then(function(actionRun) {
		let actionName = actionRun.data["action"]
		let actionContainer = actionRun.data["container"]
		let actionRunTargets = actionRun.data["targets"]

		window.withProgress({
			location: ProgressLocation.Notification,
			title: `Repeating ${actionName}`,
			cancellable: false
		}, async (progress, token) => {
			await processRunAction(actionName, actionContainer, actionRunTargets, progress, context, outputChannel)
	})
	}).catch(err => {
		console.log(err)
	})
}