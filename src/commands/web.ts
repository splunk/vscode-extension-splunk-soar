import * as vscode from 'vscode';
import { getClientForActiveEnvironment, SoarClient } from "../soar/client";

export async function openWeb(context) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(client.server))	
}

export async function openWebApps(context) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/apps`))	
}

export async function openWebActionRunResult(context, containerId, actionRunId) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/mission/${containerId}/analyst/action_run/${actionRunId}/`))	
}


export async function openWebPlaybook(context, playbookId) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/playbook/${playbookId}`))	
}