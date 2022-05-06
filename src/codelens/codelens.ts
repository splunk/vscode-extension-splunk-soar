import * as vscode from 'vscode'
import { RunActionLensProvider, runActionLensSelector } from './runActionLensProvider'

export function registerCodeLenses(context: vscode.ExtensionContext) {
    let codeLensProviderDisposable = vscode.languages.registerCodeLensProvider(
		runActionLensSelector,
		new RunActionLensProvider(context)
	  )
	  
	  context.subscriptions.push(codeLensProviderDisposable)

}