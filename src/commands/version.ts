import * as vscode from 'vscode';
import { getClientForActiveEnvironment, SoarClient } from "../soar/client";

export async function version(context: vscode.ExtensionContext) {
    let client: SoarClient = await getClientForActiveEnvironment(context)

    client.version().then(
        function(response) {
            let {version} = response.data
            vscode.window.showInformationMessage(`Connected with SOAR Version: ${version} at ${client.server}`)
        }
    )
}