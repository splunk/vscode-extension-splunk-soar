import * as vscode from 'vscode'
import * as fs from 'fs'
import { getClientForActiveEnvironment, SoarClient } from '../../soar/client';
import * as util from 'util'
import * as stream from 'stream'

const pipeline = util.promisify(stream.pipeline)

export async function downloadBundle(context: vscode.ExtensionContext, appContext: any) {
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

    try {
        let res = await client.downloadApp(appContext.data.app.id)
        await pipeline(res.data, fs.createWriteStream(fileUri[0].fsPath + "/" + appContext.data.app.directory + ".tgz"))
    } catch (err) {
        vscode.window.showErrorMessage(`Could not download App bundle: ${err}`)
    }

}