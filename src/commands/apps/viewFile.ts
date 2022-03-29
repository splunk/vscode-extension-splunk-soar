import * as vscode from 'vscode'

export const FileContainerContentProvider = new class implements vscode.TextDocumentContentProvider {
    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): vscode.ProviderResult<string> {
        let encodedData = uri.fragment
        let buff = Buffer.from(encodedData, 'base64').toString('ascii')
        return buff
    }
}