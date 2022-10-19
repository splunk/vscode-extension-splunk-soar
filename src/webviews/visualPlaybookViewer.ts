import { Disposable, Webview, WebviewPanel, window, Uri, ViewColumn, commands, ExtensionContext } from "vscode";
import { getClientForActiveEnvironment, SoarClient } from '../soar/client';
import { getNonce } from '../utils';
import { PlaybookItem } from '../views/playbooks';


/**
 * This class manages the state and behavior of HelloWorld webview panels.
 *
 * It contains all the data and methods for:
 *
 * - Creating and rendering HelloWorld webview panels
 * - Properly cleaning up and disposing of webview resources when the panel is closed
 * - Setting the HTML (and by proxy CSS/JavaScript) content of the webview panel
 * - Setting message listeners so data can be passed between the webview and extension
 */

function getUri(webview: Webview, extensionUri: Uri, pathList: string[]) {
  return webview.asWebviewUri(Uri.joinPath(extensionUri, ...pathList));
}


export class VisualPlaybookViewerPanel {
  public static currentPanel: VisualPlaybookViewerPanel | undefined;
  private readonly _panel: WebviewPanel;
  private _disposables: Disposable[] = [];
  private context: ExtensionContext;

  /**
   * The HelloWorldPanel class private constructor (called only from the render method).
   *
   * @param panel A reference to the webview panel
   * @param extensionUri The URI of the directory containing the extension
   */
  private constructor(panel: WebviewPanel, context: ExtensionContext, playbook: any) {
    this._panel = panel;
    this.context = context


    // Set an event listener to listen for when the panel is disposed (i.e. when the user closes
    // the panel or when the panel is closed programmatically)
    this._panel.onDidDispose(this.dispose, null, this._disposables);

    // Set the HTML content for the webview panel
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, context, playbook);

    // Set an event listener to listen for messages passed from the webview context
    this._setWebviewMessageListener(this._panel.webview, context);
  }

  /**
   * Renders the current webview panel if it exists otherwise a new webview panel
   * will be created and displayed.
   *
   * @param extensionUri The URI of the directory containing the extension.
   */
  public static async render(context: ExtensionContext, playbookContext: PlaybookItem) {
    if (VisualPlaybookViewerPanel.currentPanel) {
      // If the webview panel already exists reveal it
      VisualPlaybookViewerPanel.currentPanel._panel.reveal(ViewColumn.One);
    } else {
      // If a webview panel does not already exist create and show a new one
      const panel = window.createWebviewPanel(
        // Panel view type
        "showHelloWorld",
        // Panel title
        "Playbook Viewer",
        // The editor column the panel should be displayed in
        ViewColumn.One,
        // Extra panel configurations
        {
          // Enable JavaScript in the webview
          enableScripts: true,
        }
      );

      
      const client = await getClientForActiveEnvironment(context)

      try {
        const playbook = await client.getPlaybook(String(playbookContext.data.playbook.id))
        const data = await playbook.data
        VisualPlaybookViewerPanel.currentPanel = new VisualPlaybookViewerPanel(panel, context, data);
        panel.webview.postMessage({ "command": "playbook", data })
      }
      catch (err) {
        console.error(err)
      }



    }
  }

  /**
   * Cleans up and disposes of webview resources when the webview panel is closed.
   */
  public dispose() {
    VisualPlaybookViewerPanel.currentPanel = undefined;

    // Dispose of the current webview panel
    this._panel.dispose();

    // Dispose of all disposables (i.e. commands) for the current webview panel
    while (this._disposables.length) {
      const disposable = this._disposables.pop();
      if (disposable) {
        disposable.dispose();
      }
    }
  }

  /**
   * Defines and returns the HTML that should be rendered within the webview panel.
   *
   * @remarks This is also the place where references to CSS and JavaScript files/packages
   * (such as the Webview UI Toolkit) are created and inserted into the webview HTML.
   *
   * @param webview A reference to the extension webview
   * @param extensionUri The URI of the directory containing the extension
   * @returns A template string literal containing the HTML that should be
   * rendered within the webview panel
   */
  private _getWebviewContent(webview: Webview, context: ExtensionContext, playbook: any) {
    //const toolkitUri = getUri(webview, context.extensionUri, ["app", "VisualPlaybookViewer", "toolkit.js"]);

    const mainUri = getUri(webview, context.extensionUri, ["app", "build", "playbookviewer.js"]);
    //const styleUri = getUri(webview, context.extensionUri, ["app", "VisualPlaybookViewer", "styles.css"]);

    //console.log(mainUri)
    //console.log(styleUri)

    const nonce = getNonce()
    // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
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

  /**
   * Sets up an event listener to listen for messages passed from the webview context and
   * executes code based on the message that is recieved.
   *
   * @param webview A reference to the extension webview
   * @param context A reference to the extension context
   */
  private _setWebviewMessageListener(webview: Webview, context: ExtensionContext) {
    webview.onDidReceiveMessage(
      async (message: any) => {

        console.log(message)

        switch (message.command) {
          case "request_playbook_run":
            this.playbookRunContext(message.data.playbook_run_id)
            break;
        }

      },
      undefined,
      this._disposables
    );
  }

  async playbookRunContext(playbookRunId: string) {
    console.log(playbookRunId)

    const client = await getClientForActiveEnvironment(this.context)

    const playbookRunActions = await client.listPlaybookRunActions(playbookRunId)
    const playbookRunActionsData = playbookRunActions.data

    const playbookRun = await client.getPlaybookRun(playbookRunId)
    const playbookRunData = playbookRun.data
    

    let playbookRunResults: any = []
    const appPromises: any = []

    playbookRunActionsData.data.map(async (actionRun) => {
      if (actionRun._pretty_has_app_runs) {
        appPromises.push(client.getActionRunAppRuns(actionRun["id"]))
      }
    })

    playbookRunResults = await Promise.allSettled(appPromises)

    playbookRunResults = playbookRunResults.map((promise: any) => {
        return promise.value.data
    })


    const appRunPromises: any = []
    playbookRunResults.forEach((actionRun: any) => {
      actionRun.data.forEach((appRun: any) => {
        appRunPromises.push(client.getAppRun(appRun.id))
      })
    })

    let appRunResults = await Promise.allSettled(appRunPromises)

    appRunResults = appRunResults.map((promise: any) => {
        return promise.value.data
    })


    console.log(playbookRunResults)
    
    
    const payload = {
      "playbookRunResults": appRunResults,
      "playbookRunActions": playbookRunActionsData.data,
      "playbookRun": playbookRunData
    }

    this._panel.webview.postMessage({ "command": "deliver_playbook_run", data: payload })
  }
}
