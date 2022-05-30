import * as vscode from 'vscode'
import * as fs from 'fs'
import { getClientForActiveEnvironment, SoarClient } from '../../soar/client';
import * as util from 'util'
import * as stream from 'stream'

const pipeline = util.promisify(stream.pipeline)

export async function downloadBundle(context: vscode.ExtensionContext, playbookContext: any) {
    let client: SoarClient = await getClientForActiveEnvironment(context)

    let options: vscode.OpenDialogOptions = {
        canSelectMany: false,
        canSelectFiles: false,
        canSelectFolders: true
    }

    let fileUri = await vscode.window.showOpenDialog(options)
    if (!fileUri) {
        return;
    }

    console.log(fileUri)
    console.log(playbookContext)

    try {
        let res = await client.downloadPlaybook(playbookContext.data.playbook.id)
        await pipeline(res.data, fs.createWriteStream(fileUri[0].fsPath + "/" + playbookContext.data.playbook.name + ".tgz"))
        vscode.window.setStatusBarMessage("$(pass-filled) Successfully downloaded Playbook", 3000)
    } catch (err) {
        vscode.window.showErrorMessage(`Could not download Playbook bundle: ${err}`)
    }

}