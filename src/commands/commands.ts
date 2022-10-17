import * as vscode from 'vscode'
import { activateEnvironment, addEnvironment, copyPasswordToClipboard, removeEnvironment, environmentVersion, openEnvironmentWeb } from '../commands/environments/environments';
import { AppWizardPanel } from '../webviews/appWizard';
import { cancelActionRun } from './actionRuns/cancelActionRun';
import { repeatActionRun, repeatLastActionRun } from './actionRuns/repeatActionRun';
import { diffFile } from './apps/diffFile';
import { downloadBundle } from './apps/downloadBundle';
import { downloadBundle as downloadPlaybookBundle} from './playbooks/downloadBundle';
import { installBundle } from './apps/installBundle';
import { runActionInput } from './actionRuns/triggerActionRun';
import { viewAppDocs } from './apps/viewAppDocs';
import { runPlaybookInput } from './playbooks/runPlaybook';
import { openAppAssetConfiguration, openAppDevDocs, openRepoDocs, openRepoIssues, openWebActionRunResult, openWebAnalystQueue, openWebApp, openWebApps, openWebAsset, openWebContainer, openWebPlaybook, openWebPlaybookEditor, openWebPlaybooks } from './web';
import { cancelPlaybookRun } from './playbookRuns/cancel';
import { add, clear, deleteContainer, remove } from './containers/containerWatcher';
import { deleteArtifact } from './artifacts/delete';
import { runPlaybookOnContainer } from './containers/runPlaybook';
import { syncScm } from './scm/scm';
import { installFromConnector, installFromFolder } from './apps/deploy';
import { pinApp, unpinApp } from './apps/pin';
import { createContainer } from './containers/create';
import { repeatPlaybookRun } from './playbookRuns/repeat';
import { showAll, showOnlyConfigured } from './apps/show';
import { activate, deactivate } from './playbooks/activeState';

export function registerCommands(context: vscode.ExtensionContext, outputChannel: vscode.OutputChannel, logOutputChannel: vscode.OutputChannel) {

	let disposableOpenWebApps = vscode.commands.registerCommand('splunkSoar.openWebApps', async () => { openWebApps(context) });
	context.subscriptions.push(disposableOpenWebApps);

	let disposableInstallBundle = vscode.commands.registerCommand('splunkSoar.apps.installBundle', () => { installBundle(context) });
	context.subscriptions.push(disposableInstallBundle);

	let disposableAddEnvironment = vscode.commands.registerCommand('splunkSoar.environments.add', () => { addEnvironment(context) });
	context.subscriptions.push(disposableAddEnvironment);

	let disposableRemoveEnvironment = vscode.commands.registerCommand('splunkSoar.environments.remove', (actionContext) => { removeEnvironment(context, actionContext) });
	context.subscriptions.push(disposableRemoveEnvironment);

	let activateEnvironmentDisposable = vscode.commands.registerCommand('splunkSoar.environments.activate', (actionContext) => { activateEnvironment(context, actionContext) });
	context.subscriptions.push(activateEnvironmentDisposable);

	let openEnvironmentWebDisposable = vscode.commands.registerCommand('splunkSoar.environments.openWeb', (environmentContext) => { openEnvironmentWeb(context, environmentContext) });
	context.subscriptions.push(openEnvironmentWebDisposable);

	let versionEnvironmentDisposable = vscode.commands.registerCommand('splunkSoar.environments.version', async (environmentContext) => { environmentVersion(context, environmentContext) });
	context.subscriptions.push(versionEnvironmentDisposable);

	let copyPasswordDisposable = vscode.commands.registerCommand('splunkSoar.environments.copyPassword', async (environmentContext) => { copyPasswordToClipboard(context, environmentContext) });
	context.subscriptions.push(copyPasswordDisposable);

	let disposableReportIssue = vscode.commands.registerCommand('splunkSoar.reportIssue', async () => { openRepoIssues() });
	context.subscriptions.push(disposableReportIssue);

	let disposableExtensionDocs = vscode.commands.registerCommand('splunkSoar.openExtensionDocs', async () => { openRepoDocs() });
	context.subscriptions.push(disposableExtensionDocs);

	let disposableAppDevDocs = vscode.commands.registerCommand('splunkSoar.openAppDevDocs', async () => { openAppDevDocs() });
	context.subscriptions.push(disposableAppDevDocs);

	let disposablePlaybookEditor = vscode.commands.registerCommand('splunkSoar.openPlaybookEditor', async () => { openWebPlaybookEditor(context) });
	context.subscriptions.push(disposablePlaybookEditor);

	let disposablePlaybooks = vscode.commands.registerCommand('splunkSoar.playbooks.viewListWeb', async () => { openWebPlaybooks(context) });
	context.subscriptions.push(disposablePlaybooks);

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbooks.activate', (playbookContext) => {activate(context, playbookContext)}))
	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbooks.deactivate', (playbookContext) => {deactivate(context, playbookContext)}))


    context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.actionRuns.repeat', async (data) => {
		if (data) {
			repeatActionRun(context, outputChannel, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.actionRuns.viewWeb', async (actionRunContext) => {
		if (actionRunContext) {
			let containerId = actionRunContext.data["actionRun"]["container"]
			let actionRunId = actionRunContext.data["actionRun"]["id"]
			openWebActionRunResult(context, containerId, actionRunId)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

    context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.actionRuns.cancel', async (actionRunContext) => {
		return cancelActionRun(context, actionRunContext)
	}))

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbookRuns.cancel', async (playbookRunContext) => {
		return cancelPlaybookRun(context, playbookRunContext)
	}))

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbooks.viewWeb', async (playbookId) => {
		if (playbookId) {
			openWebPlaybook(context, playbookId.data.playbook.id)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	let disposableDownloadBundle = vscode.commands.registerCommand('splunkSoar.apps.downloadBundle', (appContext) => { downloadBundle(context, appContext) });
	context.subscriptions.push(disposableDownloadBundle);

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.viewWeb', async (appId) => {
		if (appId) {
			openWebApp(context, appId.data.app.id)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.assets.viewWeb', async (assetContext) => {
		if (assetContext) {
			openWebAsset(context, assetContext.data.app.id, assetContext.data.asset.id)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

    context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.runAction', async (data) => {
		if (data) {
			runActionInput(context, outputChannel, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

    context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.viewDocs', async (data) => {
		if (data) {
			viewAppDocs(context, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

    context.subscriptions.push(vscode.commands.registerCommand("splunkSoar.showAppWizard", async () => {
		AppWizardPanel.render(context);
    }));

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbooks.runPlaybook', async (data) => {
		if (data) {
			runPlaybookInput(context, outputChannel, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.containers.runPlaybook', async (data) => {
		if (data) {
			runPlaybookOnContainer(context, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.diffFile', async (fileContext) => {
		diffFile(context, fileContext)
	}))

	let disposablePlaybookDownloadBundle = vscode.commands.registerCommand('splunkSoar.playbooks.downloadBundle', (playbookContext) => { downloadPlaybookBundle(context, playbookContext) });
	context.subscriptions.push(disposablePlaybookDownloadBundle);

	let disposableContainerWatcherAdd = vscode.commands.registerCommand('splunkSoar.containerWatcher.add', () => { add(context) });
	context.subscriptions.push(disposableContainerWatcherAdd);

	let disposableContainerWatcherClear = vscode.commands.registerCommand('splunkSoar.containerWatcher.clear', () => { clear(context) });
	context.subscriptions.push(disposableContainerWatcherClear);

	let disposableContainerWatcherRemove = vscode.commands.registerCommand('splunkSoar.containerWatcher.unwatch', async (containerContext: any) => { remove(context, containerContext) });
	context.subscriptions.push(disposableContainerWatcherRemove);
	
	let disposableContainerWatcherDelete = vscode.commands.registerCommand('splunkSoar.containers.delete', async (containerContext: any) => { deleteContainer(context, containerContext) });
	context.subscriptions.push(disposableContainerWatcherDelete);


	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.containerWatcher.viewWeb', async (containerContext: any) => {
		if (containerContext) {
			let containerId = containerContext.data[1].value.data["id"]
			openWebContainer(context, containerId)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.containerWatcher.viewAnalystQueue', async () => {
			openWebAnalystQueue(context)
	}))


	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.artifacts.delete', async (artifactContext: any) => deleteArtifact(context, artifactContext)))

	let disposableScmSync = vscode.commands.registerCommand('splunkSoar.scm.sync', async (repoContext: any) => { syncScm(context, repoContext) });
	context.subscriptions.push(disposableScmSync);
	let disposableScmSyncForce = vscode.commands.registerCommand('splunkSoar.scm.syncForce', async (repoContext: any) => { syncScm(context, repoContext, true)});
	context.subscriptions.push(disposableScmSyncForce);

	let disposableInstallConnector = vscode.commands.registerCommand('splunkSoar.apps.installConnector', async (actionContext) => { installFromConnector(context, actionContext, logOutputChannel) });
	context.subscriptions.push(disposableInstallConnector);

	let disposableInstallFolder = vscode.commands.registerCommand('splunkSoar.apps.installFolder', async (actionContext) => { installFromFolder(context, actionContext, logOutputChannel) });
	context.subscriptions.push(disposableInstallFolder);


	let disposableConfigureAsset = vscode.commands.registerCommand('splunkSoar.assets.configureWeb', async (actionContext) => { openAppAssetConfiguration(context, String(actionContext.data.app.id)) });
	context.subscriptions.push(disposableConfigureAsset);


	let disposableRepeatLastActionRun = vscode.commands.registerCommand('splunkSoar.actionRuns.repeatLast', async () => { repeatLastActionRun(context, outputChannel) });
	context.subscriptions.push( disposableRepeatLastActionRun);


	// Pinning Apps
	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.pin', (appContext) => { pinApp(context, appContext)}));
	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.unpin', (appContext) => { unpinApp(context, appContext)}));

	context.subscriptions.push(vscode.commands.registerCommand("splunkSoar.containers.create", () => {createContainer(context)}))

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.playbookRuns.repeat', (playbookRunContext) => {repeatPlaybookRun(context, playbookRunContext, outputChannel)}))

	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.showConfiguredOnly', () => {showOnlyConfigured(context)}))
	context.subscriptions.push(vscode.commands.registerCommand('splunkSoar.apps.showAll', () => {showAll(context)}))


}