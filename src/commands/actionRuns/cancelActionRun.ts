import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client'
import { ActionRun } from '../../views/actionRun'

export async function cancelActionRun(context: vscode.ExtensionContext, actionRunContext: ActionRun) {
    let client = await getClientForActiveEnvironment(context)
    if (actionRunContext) {
        let actionRunId = String(actionRunContext.data["actionRun"]["id"])
        try {
            await client.cancelActionRun(actionRunId)
            await vscode.commands.executeCommand('splunkSoar.actionRuns.refresh');
        } catch(err: any) {
            vscode.window.showErrorMessage(err.response.data.message)
        }
    } else {
        vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
    }

}
