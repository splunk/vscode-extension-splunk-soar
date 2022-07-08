import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client'

export async function syncScm(context: vscode.ExtensionContext, repoContext: any, force: boolean = false) {

    let repoId = repoContext.data.repo.id
    let repoName = repoContext.data.repo.name

    let client = await getClientForActiveEnvironment(context)

    if (force) {
        let choice = await vscode.window.showWarningMessage(`Are you sure you want to perform a forced sync? This is a potentially destructive action.`, ...["Yes", "No"])
        if (choice == "No") {
            return
        }
    }
    let packageDispose = vscode.window.setStatusBarMessage("$(loading~spin) Syncing SCM...")
    let syncResponse = await client.syncScm(repoId, force)
    packageDispose.dispose()
    vscode.window.setStatusBarMessage("$(pass-filled) Synced SCM", 3000)

}