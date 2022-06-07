import * as vscode from 'vscode';
import { getClientForActiveEnvironment, SoarClient } from "../soar/client";

export async function openWebApps(context: vscode.ExtensionContext) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/apps`))	
}

export async function openWebActionRunResult(context: vscode.ExtensionContext, containerId: string, actionRunId: string) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/mission/${containerId}/analyst/action_run/${actionRunId}/`))	
}

export async function openWebPlaybook(context: vscode.ExtensionContext, playbookId: string) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/playbook/${playbookId}`))	
}

export async function openRepoIssues() {
    vscode.env.openExternal(vscode.Uri.parse("https://github.com/splunk/vscode-extension-splunk-soar/issues"))
}

export async function openAppDevDocs() {
    vscode.env.openExternal(vscode.Uri.parse("https://docs.splunk.com/Documentation/SOAR/current/DevelopApps/Overview"))
}

export async function openRepoDocs() {
    vscode.env.openExternal(vscode.Uri.parse("https://github.com/splunk/vscode-extension-splunk-soar/wiki"))
}

export async function openWebApp(context: vscode.ExtensionContext, appId: string) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/apps/${appId}/asset`))	
}

export async function openWebAsset(context: vscode.ExtensionContext, appId: string, assetId: string) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/apps/${appId}/asset/${assetId}`))
}

export async function openWebPlaybookEditor(context: vscode.ExtensionContext) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/playbook/`))	
}

export async function openWebContainer(context: vscode.ExtensionContext, containerId: string) {
    let client: SoarClient = await getClientForActiveEnvironment(context)
    vscode.env.openExternal(vscode.Uri.parse(`${client.server}/mission/${containerId}/`))	
}