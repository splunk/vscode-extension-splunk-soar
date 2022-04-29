import * as vscode from 'vscode'
import { getConfiguredClient } from '../soar/client';

export const AppContentProvider = new class implements vscode.TextDocumentContentProvider {
    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): vscode.ProviderResult<string> {
        let client = getConfiguredClient()
        return client.getApp(uri.path).then(function(res) {
            let outJSON = JSON.stringify(res.data, null, '\t')
            return outJSON
        }).catch(function(err) {
            console.log(err)
            return "none"
        })
    }
}