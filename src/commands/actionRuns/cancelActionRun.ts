import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client'
import {IActionRunContext} from './repeatActionRun'

export async function cancelActionRun(context: vscode.ExtensionContext, actionRunContext: IActionRunContext) {
    let client = await getClientForActiveEnvironment(context)
    if (actionRunContext) {
        let actionRunId = actionRunContext.data["actionRun"]["id"]
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
