import * as vscode from 'vscode'
import { getClientForActiveEnvironment, SoarClient } from '../../soar/client'

export async function deleteArtifact(context: vscode.ExtensionContext, artifactContext: any) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    let artifactId: string;

    if (!artifactContext) {
        let artifactInput = await vscode.window.showInputBox({ placeHolder: 'Artifact ID' });
        if (!artifactInput) {
            return
        }
        artifactId = artifactInput
    } else {
        artifactId = artifactContext.data.id
    }

    let choice = await vscode.window.showWarningMessage(`Are you sure you want to delete artifact ${artifactId}?`, ...["Yes", "No"])
    if (choice == "No") {
        return
    }

    let result = await client.deleteArtifact(artifactId)
    console.log(result.data)
    await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh')
}