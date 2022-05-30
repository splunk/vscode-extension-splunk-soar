import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client'

export async function cancelPlaybookRun(context: vscode.ExtensionContext, playbookRunContext: any) {
    let client = await getClientForActiveEnvironment(context)
    if (playbookRunContext) {
        let playbookRunId = playbookRunContext.data["playbookRun"]["id"]
        try {
            await client.cancelPlaybookRun(playbookRunId)
            await vscode.commands.executeCommand('splunkSoar.playbookRuns.refresh');
        } catch(err: any) {
            vscode.window.showErrorMessage(err.response.data.message)
        }
    } else {
        vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
    }
}