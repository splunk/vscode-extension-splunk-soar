import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client'
import { PlaybookItem } from '../../views/playbooks'

export async function activate(context: vscode.ExtensionContext, playbookContext: PlaybookItem) {
    console.log("activated")

    let client = await getClientForActiveEnvironment(context)
    let playbookId = String(playbookContext.data.playbook.id)


    try {
        const result = await client.setPlaybookActiveState(playbookId, true, undefined)
        console.log(result.data)
    } catch (err: any) {
        vscode.window.showErrorMessage(err.response.data.message)
    }

    await vscode.commands.executeCommand('splunkSoar.playbooks.refresh');
}

export async function deactivate(context: vscode.ExtensionContext, playbookContext: any) {
    let client = await getClientForActiveEnvironment(context)
    let playbookId = String(playbookContext.data.playbook.id)

    let cancelExistingRuns = false

    const cancelRuns = await vscode.window.showQuickPick(["yes", "no"], {
        placeHolder: "Cancel existing runs?"
    })


    if (cancelRuns == "yes") {
        cancelExistingRuns = true
    }

    try {
        const result = await client.setPlaybookActiveState(playbookId, false, cancelExistingRuns)
        console.log(result.data)
    } catch (err: any) {
        vscode.window.showErrorMessage(err.response.data.message)
    }

    await vscode.commands.executeCommand('splunkSoar.playbooks.refresh');
}