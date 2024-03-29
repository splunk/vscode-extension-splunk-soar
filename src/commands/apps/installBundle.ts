import * as vscode from 'vscode'
import * as fs from 'fs'
import { getClientForActiveEnvironment, SoarClient } from '../../soar/client';

export async function installBundle(context: vscode.ExtensionContext) {
    let client: SoarClient = await getClientForActiveEnvironment(context)

    let options: vscode.OpenDialogOptions = {
        canSelectMany: false,
        filters: {
            'tgz': ['tar.gz', 'tgz']
        }
    }

    let fileUri = await vscode.window.showOpenDialog(options)
    if (!fileUri) {
        return;
    }    

    let uploadDispose = vscode.window.setStatusBarMessage("$(loading~spin) Uploading App...")

    try {
        const appFile = fs.readFileSync(fileUri[0].fsPath, {encoding: 'base64'})
        let res = await client.installApp(appFile)
        uploadDispose.dispose()
        vscode.window.setStatusBarMessage("$(pass-filled) Successfully installed App", 3000)

    } catch(err: any) {
        vscode.window.setStatusBarMessage("$(error) Error uploading App", 3000)
        vscode.window.showErrorMessage(JSON.stringify(err.response.data.message))
        console.log(err)
    }
}