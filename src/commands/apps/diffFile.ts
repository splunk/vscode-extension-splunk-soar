import * as vscode from 'vscode'
import * as fs from 'fs'
import { getClientForActiveEnvironment, SoarClient } from '../../soar/client';

export async function diffFile(context: vscode.ExtensionContext, fileContext: any) {

    let buff = Buffer.from(fileContext.data.file.content).toString('base64')
    const uri = vscode.Uri.parse('soarfile:' + fileContext.data.file.name + "#" + buff);
    var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath!;
    if (!currentlyOpenTabfilePath) {
        vscode.window.showErrorMessage("Cannot provide diff without opened file.")
        return
    }
    await vscode.commands.executeCommand("vscode.diff", uri, vscode.Uri.parse(currentlyOpenTabfilePath));
}