import * as vscode from 'vscode'
import { getClientForActiveEnvironment, SoarClient } from '../../soar/client';

export async function viewAppDocs(context, appContext) {
    let client: SoarClient = await getClientForActiveEnvironment(context)

    let directory = appContext["data"]["app"]["directory"]
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/docs/app_reference/${directory}`))
}