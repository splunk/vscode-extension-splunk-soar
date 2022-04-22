import * as vscode from 'vscode';
import { getConfiguredClient, SoarClient } from "../soar/client";

export function openWeb() {
    let client: SoarClient = getConfiguredClient()
    vscode.env.openExternal(vscode.Uri.parse(client.server))	
}

export function openWebApps() {
    let client: SoarClient = getConfiguredClient()
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/apps`))	
}