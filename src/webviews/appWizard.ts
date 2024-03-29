import * as fs from 'fs'
import * as ejs from 'ejs'
const fsPromises = fs.promises;
import { Disposable, Webview, WebviewPanel, window, Uri, ViewColumn, commands, ExtensionContext } from "vscode";
import path = require('path');
import { randomUUID } from 'crypto';
import { getClientForActiveEnvironment } from '../soar/client';

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

  
export class AppWizardPanel {
  public static currentPanel: AppWizardPanel | undefined;
  private readonly _panel: WebviewPanel;
  private _disposables: Disposable[] = [];

  /**
   * The HelloWorldPanel class private constructor (called only from the render method).
   *
   * @param panel A reference to the webview panel
   * @param extensionUri The URI of the directory containing the extension
   */
  private constructor(panel: WebviewPanel, context: ExtensionContext) {
    this._panel = panel;

    // Set an event listener to listen for when the panel is disposed (i.e. when the user closes
    // the panel or when the panel is closed programmatically)
    this._panel.onDidDispose(this.dispose, null, this._disposables);

    // Set the HTML content for the webview panel
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, context);

    // Set an event listener to listen for messages passed from the webview context
    this._setWebviewMessageListener(this._panel.webview, context);
  }

  /**
   * Renders the current webview panel if it exists otherwise a new webview panel
   * will be created and displayed.
   *
   * @param extensionUri The URI of the directory containing the extension.
   */
  public static render(context: ExtensionContext) {
    if (AppWizardPanel.currentPanel) {
      // If the webview panel already exists reveal it
      AppWizardPanel.currentPanel._panel.reveal(ViewColumn.One);
    } else {
      // If a webview panel does not already exist create and show a new one
      const panel = window.createWebviewPanel(
        // Panel view type
        "showHelloWorld",
        // Panel title
        "SOAR App Wizard",
        // The editor column the panel should be displayed in
        ViewColumn.One,
        // Extra panel configurations
        {
          // Enable JavaScript in the webview
          enableScripts: true,
        }
      );

      AppWizardPanel.currentPanel = new AppWizardPanel(panel, context);
    }
  }

  /**
   * Cleans up and disposes of webview resources when the webview panel is closed.
   */
  public dispose() {
    AppWizardPanel.currentPanel = undefined;

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
  private _getWebviewContent(webview: Webview, context: ExtensionContext) {
    //const toolkitUri = getUri(webview, context.extensionUri, ["app", "appwizard", "toolkit.js"]);

    const mainUri = getUri(webview, context.extensionUri, ["app", "build", "appwizard.js"]);
    //const styleUri = getUri(webview, context.extensionUri, ["app", "appwizard", "styles.css"]);

    //console.log(mainUri)
    //console.log(styleUri)

    // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script type="module" src="${mainUri}"></script>
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
        const command = message.command;
        const text = message.text;

        switch (command) {
          case "createApp":
            // Code that should run in response to the hello message command

            try {
              const targetFolder = await window.showOpenDialog({
                canSelectMany: false,
                canSelectFiles: false,
                canSelectFolders: true
              })

              if (!targetFolder) {
                return
              }

              console.log(context)

              let client = getClientForActiveEnvironment(context)

              let soarVersionResponse = (await (await client).version()).data
              message.soarVersion = soarVersionResponse["version"]

              message.app.appid = randomUUID()
              message.app.name_lower = message.app.appName.toLowerCase().replaceAll(' ', '')

              let targetFolderPath = targetFolder[0].fsPath
              let outAppFolderPath = path.join(targetFolderPath, message.app.name_lower)

              await fsPromises.mkdir(outAppFolderPath).catch((err) => {
                //decide what you want to do if this failed
                console.error(err);
              });
            
              let templatePath = Uri.joinPath(context.extensionUri, "resources", "app-template")
              console.log(templatePath)
              
              let templateFiles = await fsPromises.readdir(templatePath.fsPath)
              console.log(templateFiles)

              templateFiles.forEach(file => {
                let currFile = fs.readFileSync(path.join(templatePath.fsPath, file), 'utf-8')
                var outFilename = file.substring(0, file.indexOf('.ejs'))
                var outStr = ejs.render(currFile, message)

                if (outFilename == "connector.py") {
                  outFilename = `${message.app.name_lower}_connector.py`
                } else if (outFilename == "connector.json"){
                  outFilename = `${message.app.name_lower}.json`
                } else if (outFilename == "consts.py"){
                  outFilename = `${message.app.name_lower}_consts.py`
                }

                fs.writeFileSync(path.join(outAppFolderPath, outFilename), outStr)
              })

              window.showInformationMessage(`App created in ${outAppFolderPath}`, ...["Open Folder"]).then(selection => {
                commands.executeCommand("vscode.openFolder", Uri.parse(outAppFolderPath), true)
              })


            } catch(err) {
              console.error(err)

            }
            return;
          // Add more switch case statements here as more webview message commands
          // are created within the webview context (i.e. inside media/main.js)
        }
      },
      undefined,
      this._disposables
    );
  }
}
