import * as vscode from 'vscode'
import { SoarActionRunTreeProvider } from './actionRun';
import { SoarAppsTreeProvider } from './apps';
import { SoarEnvironmentsTreeProvider } from './environments';
import { SoarHelpTreeProvider } from './help';
import { SoarPlaybookTreeProvider } from './playbooks';

export function registerTreeViews(context: vscode.ExtensionContext) {

    const soarEnvironmentsTreeProvider = new SoarEnvironmentsTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarEnvironments', soarEnvironmentsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.environments.refresh', () => soarEnvironmentsTreeProvider.refresh());

    const soarAppsTreeProvider = new SoarAppsTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarApps', soarAppsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.apps.refresh', () => soarAppsTreeProvider.refresh());

	const soarActionRunsTreeProvider = new SoarActionRunTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarActionRuns', soarActionRunsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.actionRuns.refresh', () => soarActionRunsTreeProvider.refresh());

	const playbooksTreeProvider = new SoarPlaybookTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarPlaybooks', playbooksTreeProvider)
	vscode.commands.registerCommand('splunkSoar.playbooks.refresh', () => playbooksTreeProvider.refresh());

	const helpTreeProvider = new SoarHelpTreeProvider(context)
    vscode.window.registerTreeDataProvider('soarHelp', helpTreeProvider)

}


export async function refreshViews() {
	await vscode.commands.executeCommand('splunkSoar.environments.refresh');
    await vscode.commands.executeCommand('splunkSoar.apps.refresh');
    await vscode.commands.executeCommand('splunkSoar.actionRuns.refresh');
    await vscode.commands.executeCommand('splunkSoar.playbooks.refresh');
}