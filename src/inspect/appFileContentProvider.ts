import * as vscode from 'vscode'

export const AppFileContentProvider = new class implements vscode.TextDocumentContentProvider {
    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    async provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): Promise<string> {
        let encodedData = uri.fragment
        let buff = Buffer.from(encodedData, 'base64').toString('ascii')
        return buff
    }
}