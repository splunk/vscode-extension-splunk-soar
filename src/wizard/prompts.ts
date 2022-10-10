import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../soar/client'

export async function validateContainerExists(context: vscode.ExtensionContext, containerId: string) {
    let client = await getClientForActiveEnvironment(context)

    try {
        await client.getContainer(containerId)
        return undefined
    } catch {
        return 'Container was not found in Splunk SOAR. Please enter a valid ID.'
    }
}

export async function promptContainerId(context: vscode.ExtensionContext) {
    const options: vscode.InputBoxOptions = {
        "placeHolder": "Enter a numeric container id",
        "validateInput": (in_str) => validateContainerExists(context, in_str)
    }

    const containerId = await vscode.window.showInputBox(options);
    return containerId
}