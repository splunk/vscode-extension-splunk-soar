import * as vscode from 'vscode'


export async function showOnlyConfigured(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration()
    await config.update("apps.showConfiguredOnly", true)
}

export async function showAll(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration()
    await config.update("apps.showConfiguredOnly", false)
}
