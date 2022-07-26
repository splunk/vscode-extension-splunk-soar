import * as vscode from 'vscode'
import { processPlaybookRun } from './playbookRuns'

export async function repeatPlaybookRun(context: vscode.ExtensionContext, playbookRunContext: any) {
    
    let playbookRun = playbookRunContext.data.playbookRun

    vscode.window.withProgress({
		location: vscode.ProgressLocation.Notification,
		title: `Running ${playbookRun["_pretty_playbook"]}'`,
		cancellable: false
	}, async (progress, token) => {
		await processPlaybookRun(progress, context, parseInt(playbookRun.playbook), playbookRun.container, playbookRun.misc.scope)
	})
}