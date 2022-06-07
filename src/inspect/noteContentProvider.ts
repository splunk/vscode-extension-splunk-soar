import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../soar/client';

export class NoteContentProvider implements vscode.TextDocumentContentProvider {
    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    constructor(private context: vscode.ExtensionContext) {
	}

    async provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): Promise<string|null> {
        let client = await getClientForActiveEnvironment(this.context)
        return client.getNote(uri.path.replace(".md", "")).then(function(res) {
            let outJSON = res.data.content
            return outJSON
        }).catch(function(err) {
            console.log(err)
            return "none"
        })
    }
}

export class NoteMetaContentProvider implements vscode.TextDocumentContentProvider {
    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    constructor(private context: vscode.ExtensionContext) {
	}

    async provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): Promise<string|null> {
        let client = await getClientForActiveEnvironment(this.context)
        return client.getNote(uri.path.replace(".json", "")).then(function(res) {
            let outJSON = JSON.stringify(res.data, null, '\t')
            return outJSON
        }).catch(function(err) {
            console.log(err)
            return "none"
        })
    }
}