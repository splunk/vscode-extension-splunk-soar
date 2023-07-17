import { AxiosResponse } from 'axios';
import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../soar/client';

export interface SoarContent {
    scheme: string
    prefix: string
    getContentFunName: string,
    processContent(response: AxiosResponse): string
}


export class SoarContentProvider implements vscode.TextDocumentContentProvider {
    private onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    readonly onDidChange = this.onDidChangeEmitter.event;

    soarContent: SoarContent
    prefix: string

    constructor(private context: vscode.ExtensionContext, soarContent: SoarContent) {
        this.soarContent = soarContent
        this.prefix = soarContent.prefix
    }

    async provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): Promise<string> {
        let client = await getClientForActiveEnvironment(this.context)
        
        let argument = uri.path.replace(".json", "")
        argument = argument.replace(".md", "")
        argument = argument.replace(".py", "")
        argument = argument.replace(this.soarContent.prefix, "")

        // @ts-expect-error

        try {
            let contentResponse = await client[this.soarContent.getContentFunName](argument)
        } catch (err) {
            return Promise.reject(err)
        }
        console.log(uri)
        return this.soarContent.processContent(contentResponse)
    }
}