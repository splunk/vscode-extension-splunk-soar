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

export function openWebActionRunResult(containerId, actionRunId) {
    let client: SoarClient = getConfiguredClient()
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/mission/${containerId}/analyst/action_run/${actionRunId}/`))	
}


export function openWebPlaybook(playbookId) {
    let client: SoarClient = getConfiguredClient()
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/playbook/${playbookId}`))	
}