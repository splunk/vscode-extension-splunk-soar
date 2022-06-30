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