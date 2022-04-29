import * as vscode from 'vscode'
import { getConfiguredClient, SoarClient } from '../../soar/client';

export async function viewAppDocs(context, appContext) {
    let client: SoarClient = getConfiguredClient()

    let directory = appContext["data"]["app"]["directory"]
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/docs/app_reference/${directory}`))
}


/*export function openWebApps() {
    let client: SoarClient = getConfiguredClient()
    
    client.getApp(uri.path).then(function(res) {
        let outJSON = JSON.stringify(res.data, null, '\t')
        return outJSON
    }).catch(function(err) {
        console.log(err)
        return "none"
    })

    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/apps`))

}*/