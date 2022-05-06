import * as vscode from 'vscode'
import { getClientForActiveEnvironment, SoarClient } from '../../soar/client';
import { IActionContext } from './runAction';

export async function viewAppDocs(context: vscode.ExtensionContext, appContext: IActionContext) {
    let client: SoarClient = await getClientForActiveEnvironment(context)

    let directory = appContext["data"]["app"]["directory"]
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/docs/app_reference/${directory}`))
}