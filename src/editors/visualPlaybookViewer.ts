import * as vscode from 'vscode'
import { getNonce } from '../utils';

function getUri(webview: vscode.Webview, extensionUri: vscode.Uri, pathList: string[]) {
    return webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, ...pathList));
}

export class PlaybookViewerDocument implements vscode.CustomDocument {
    _uri: vscode.Uri

    constructor(uri: vscode.Uri) {
        this._uri = uri;
    }

    public get uri() {
        return this._uri;
    }
    
    dispose(): void {
    }    

}

export class VisualPlaybookViewerProvider implements vscode.CustomReadonlyEditorProvider {
    _context: vscode.ExtensionContext
    public static readonly viewType = 'splunkSoar.views.visualPlaybookViewer';

    constructor(context: vscode.ExtensionContext) {
        this._context = context
    }

    openCustomDocument(uri: vscode.Uri, openContext: vscode.CustomDocumentOpenContext, token: vscode.CancellationToken): vscode.CustomDocument | Thenable<vscode.CustomDocument> {
        console.log(uri)
        const doc = new PlaybookViewerDocument(uri)
        return doc
    }

    async resolveCustomEditor(document: vscode.CustomDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): Promise<void> {
        webviewPanel.webview.options = {
			enableScripts: true,
		};

        webviewPanel.webview.html = this.getHtmlForWebView(webviewPanel.webview);


    }

    private getHtmlForWebView(webview: vscode.Webview): string {
        const mainUri = getUri(webview, this._context.extensionUri, ["app", "build", "playbookviewer.js"]);
		const nonce = getNonce();

        return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script type="module" nonce="${nonce}" src="${mainUri}"></script>
            <title>App Wizard</title>
          </head>
          <body id="webview-body">
          <div id="root"></div>          
          </body>
        </html>
      `;
    }

}