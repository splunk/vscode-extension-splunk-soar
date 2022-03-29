import * as vscode from 'vscode';
import { getConfiguredClient, SoarClient } from "../soar/client";

export function version() {
    let client: SoarClient = getConfiguredClient()

    client.version().then(
        function(response) {
            let {version} = response.data
            vscode.window.showInformationMessage(`Connected with SOAR Version: ${version}`)
        }
    )
}