import * as vscode from 'vscode'
import { listEnvironments } from '../commands/environments/environments';
import { SoarActionRunTreeProvider } from './actionRun';
import { SoarAppsTreeProvider } from './apps';
import { SoarContainerWatcherTreeProvider } from './containerWatcher';
import { SoarEnvironmentsTreeProvider } from './environments';
import { SoarHelpTreeProvider } from './help';
import { SoarPlaybookRunTreeProvider } from './playbookRun';
import { SoarPlaybookTreeProvider } from './playbooks';
import { treeViewStore } from '../stores';

export function registerTreeViews(context: vscode.ExtensionContext) {

    const soarEnvironmentsTreeProvider = new SoarEnvironmentsTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarEnvironments', soarEnvironmentsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.environments.refresh', () => soarEnvironmentsTreeProvider.refresh());

    const soarAppsTreeProvider = new SoarAppsTreeProvider(context)
	const soarAppsTreeView = vscode.window.createTreeView("soarApps", {
		treeDataProvider: soarAppsTreeProvider,
		"canSelectMany": false
	})
	treeViewStore.add("soarApps", soarAppsTreeView)

	soarAppsTreeView.badge = {tooltip: "Connected Environments", value: listEnvironments(context).length}

	vscode.commands.registerCommand('splunkSoar.apps.refresh', () => soarAppsTreeProvider.refresh());

	const soarActionRunsTreeProvider = new SoarActionRunTreeProvider(context)
	vscode.commands.registerCommand('splunkSoar.actionRuns.refresh', () => soarActionRunsTreeProvider.refresh());

	vscode.window.createTreeView("soarActionRuns", {
		treeDataProvider: soarActionRunsTreeProvider
	})

	const soarPlaybookRunsTreeProvider = new SoarPlaybookRunTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarPlaybookRuns', soarPlaybookRunsTreeProvider)
	vscode.commands.registerCommand('splunkSoar.playbookRuns.refresh', () => soarPlaybookRunsTreeProvider.refresh());

	const playbooksTreeProvider = new SoarPlaybookTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarPlaybooks', playbooksTreeProvider)
	vscode.commands.registerCommand('splunkSoar.playbooks.refresh', () => playbooksTreeProvider.refresh());

	const helpTreeProvider = new SoarHelpTreeProvider(context)
    vscode.window.registerTreeDataProvider('soarHelp', helpTreeProvider)

	const containerWatcherTreeProvider = new SoarContainerWatcherTreeProvider(context)
	vscode.window.registerTreeDataProvider('soarContainerWatcher', containerWatcherTreeProvider)
	vscode.commands.registerCommand('splunkSoar.containerWatcher.refresh', () => containerWatcherTreeProvider.refresh());

}

export async function refreshViews(context: vscode.ExtensionContext) {

	let numEnvironments = listEnvironments(context).length
	treeViewStore.get("soarApps").badge = {"tooltip": "Connected Environments", value: numEnvironments}

	await vscode.commands.executeCommand('splunkSoar.environments.refresh');
    await vscode.commands.executeCommand('splunkSoar.apps.refresh');
    await vscode.commands.executeCommand('splunkSoar.actionRuns.refresh');
    await vscode.commands.executeCommand('splunkSoar.playbooks.refresh');
	await vscode.commands.executeCommand('splunkSoar.playbookRuns.refresh');
	await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh');
}