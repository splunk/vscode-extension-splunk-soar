import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../soar/client';

export class PlaybookRunContentProvider implements vscode.TextDocumentContentProvider {
    private onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    readonly onDidChange = this.onDidChangeEmitter.event;

    constructor(private context: vscode.ExtensionContext) {
	}
    
    async provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): Promise<string> {
        let client = await getClientForActiveEnvironment(this.context)
        return client.getPlaybookRun(uri.path.replace(".json", "")).then(function(res) {
            let outJSON = JSON.stringify(res.data, null, '\t')
            return outJSON
        }).catch(function(err) {
            console.log(err)
            return "none"
        })
    }
}
export class PlaybookRunLogContentProvider implements vscode.TextDocumentContentProvider {
    private onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    readonly onDidChange = this.onDidChangeEmitter.event;

    constructor(private context: vscode.ExtensionContext) {
	}
    
    async provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): Promise<string> {
        let client = await getClientForActiveEnvironment(this.context)
        return client.getPlaybookRunLog(uri.path.replace(".json", "")).then(function(res) {
            let outJSON = JSON.stringify(res.data, null, '\t')
            return outJSON
        }).catch(function(err) {
            console.log(err)
            return "none"
        })
    }
}