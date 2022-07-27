import path = require('path');
import {CodeLensProvider, TextDocument, CodeLens, Command, DocumentSelector, Position, workspace, ExtensionContext} from 'vscode'
import { getClientForActiveEnvironment } from '../soar/client';
import { SoarAction } from '../soar/models';

export class RunActionLensProvider implements CodeLensProvider {

    constructor(private context: ExtensionContext) { }

    async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {
      let client = await getClientForActiveEnvironment(this.context)
      const config = workspace.getConfiguration()
      const codeLensEnabled: boolean = config.get<boolean>("codeLensEnabled", true)
      
      if (!codeLensEnabled) {
        return []
      }
      
      let fileName = path.parse(document.fileName).base.replace("_connector.py", "")
      let metadataUri = document.uri.with({path: path.join(document.uri.path, '..', fileName + ".json")})
  
      let metadataDoc = await workspace.openTextDocument(metadataUri)
      let metadataJSON = JSON.parse(metadataDoc.getText())
      let appRes = await client.getAppByAppid(metadataJSON["appid"])
      let appData = appRes.data.data[0]

      let actionsIdentifiers = metadataJSON["actions"].map((action: SoarAction) => action.identifier)

      let codeLenses = [];
      const regex = new RegExp(/(def _handle_(.+)\()/g);
      const text = document.getText();
      let matches;
      while ((matches = regex.exec(text)) !== null) {
          const line = document.lineAt(document.positionAt(matches.index).line);
          const indexOf = line.text.indexOf(matches[0]);

          const foundIdentifier = matches[2]

          if (!actionsIdentifiers.includes(foundIdentifier)) {
            continue
          }
          const actionDefinition = metadataJSON.actions.find((action: SoarAction) => action.identifier == foundIdentifier);
          
          let actionContext = {
            "data": {
              "action": {
                "name": actionDefinition.action
              },
              "app": appData,
              "app_json": metadataJSON
            }
          }

          let c: Command = {
            command: 'splunkSoar.apps.runAction',
            title: `Run Action: ${matches[2]}`,
            arguments: [actionContext]
          }

          const position = new Position(line.lineNumber, indexOf);
          const range = document.getWordRangeAtPosition(position, new RegExp(regex));
          if (range) {
              codeLenses.push(new CodeLens(range, c));
          }
      }
      return codeLenses;
    }
}

export const runActionLensSelector: DocumentSelector = {
  language: 'python',
  scheme: 'file',
  pattern: "**/*_connector.py"
}
