import * as vscode from 'vscode'
import { activateEnvironment, connectEnvironment, disconnectEnvironment, environmentVersion, openEnvironmentWeb } from '../config/environment';
import { AppWizardPanel } from '../webviews/appWizard';
import { cancelActionRun } from './actionRuns/cancelActionRun';
import { repeatActionRun } from './actionRuns/repeatActionRun';
import { diffFile } from './apps/diffFile';
import { downloadBundle } from './apps/downloadBundle';
import { downloadBundle as downloadPlaybookBundle} from './playbooks/downloadBundle';
import { installBundle } from './apps/installBundle';
import { runActionInput } from './apps/runAction';
import { viewAppDocs } from './apps/viewAppDocs';
import { runPlaybookInput } from './playbooks/runPlaybook';
import { openAppDevDocs, openRepoDocs, openRepoIssues, openWeb, openWebActionRunResult, openWebApp, openWebApps, openWebAsset, openWebPlaybook } from './web';


export function registerCommands(context: vscode.ExtensionContext) {

    let disposableOpenWeb = vscode.commands.registerCommand('splunkSoar.openWeb', async () => { openWeb(context) });
	context.subscriptions.push(disposableOpenWeb);

	let disposableOpenWebApps = vscode.commands.registerCommand('splunkSoar.openWebApps', async () => { openWebApps(context) });
	context.subscriptions.push(disposableOpenWebApps);

	let disposableInstallBundle = vscode.commands.registerCommand('soarApps.installBundle', () => { installBundle(context) });
	context.subscriptions.push(disposableInstallBundle);

	let disposableConnectEnvironment = vscode.commands.registerCommand('splunkSoar.environments.connect', () => { connectEnvironment(context) });
	context.subscriptions.push(disposableConnectEnvironment);

	let disposableDisconnectEnvironment = vscode.commands.registerCommand('splunkSoar.environments.disconnect', (actionContext) => { disconnectEnvironment(context, actionContext) });
	context.subscriptions.push(disposableDisconnectEnvironment);

	let activateEnvironmentDisposable = vscode.commands.registerCommand('splunkSoar.environments.activate', (actionContext) => { activateEnvironment(context, actionContext) });
	context.subscriptions.push(activateEnvironmentDisposable);

	let openEnvironmentWebDisposable = vscode.commands.registerCommand('splunkSoar.environments.openWeb', (environmentContext) => { openEnvironmentWeb(context, environmentContext) });
	context.subscriptions.push(openEnvironmentWebDisposable);

	let versionEnvironmentDisposable = vscode.commands.registerCommand('splunkSoar.environments.version', async (environmentContext) => { environmentVersion(context, environmentContext) });
	context.subscriptions.push(versionEnvironmentDisposable);

	let disposableReportIssue = vscode.commands.registerCommand('splunkSoar.reportIssue', async () => { openRepoIssues() });
	context.subscriptions.push(disposableReportIssue);

	let disposableExtensionDocs = vscode.commands.registerCommand('splunkSoar.openExtensionDocs', async () => { openRepoDocs() });
	context.subscriptions.push(disposableExtensionDocs);

	let disposableAppDevDocs = vscode.commands.registerCommand('splunkSoar.openAppDevDocs', async () => { openAppDevDocs() });
	context.subscriptions.push(disposableAppDevDocs);

    context.subscriptions.push(vscode.commands.registerCommand('soarActionRuns.repeatActionRun', async (data) => {
		if (data) {
			repeatActionRun(context, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewActionRunWeb', async (actionRunContext) => {
		if (actionRunContext) {
			let containerId = actionRunContext.data["actionRun"]["container"]
			let actionRunId = actionRunContext.data["actionRun"]["id"]
			openWebActionRunResult(context, containerId, actionRunId)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

    context.subscriptions.push(vscode.commands.registerCommand('soarApps.cancelActionRun', async (actionRunContext) => {
		return cancelActionRun(context, actionRunContext)
	}))

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewPlaybookWeb', async (playbookId) => {
		if (playbookId) {
			openWebPlaybook(context, playbookId.data.playbook.id)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	let disposableDownloadBundle = vscode.commands.registerCommand('soarApps.downloadBundle', (appContext) => { downloadBundle(context, appContext) });
	context.subscriptions.push(disposableDownloadBundle);

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewAppWeb', async (appId) => {
		if (appId) {
			openWebApp(context, appId.data.app.id)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewAssetWeb', async (assetContext) => {
		console.log("hwy")
		if (assetContext) {
			openWebAsset(context, assetContext.data.app.id, assetContext.data.asset.id)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

    context.subscriptions.push(vscode.commands.registerCommand('soarApps.runAction', async (data) => {
		if (data) {
			runActionInput(context, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

    context.subscriptions.push(vscode.commands.registerCommand('soarApps.viewAppDocs', async (data) => {
		if (data) {
			viewAppDocs(context, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

    context.subscriptions.push(vscode.commands.registerCommand("soarApps.showAppWizard", async () => {
		AppWizardPanel.render(context.extensionUri);
    }));

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.runPlaybook', async (data) => {
		if (data) {
			runPlaybookInput(context, data).catch(console.error)
		} else {
			vscode.window.showInformationMessage("Please call this method solely from the inline context menu in the SOAR App View")
		}
	}))

	context.subscriptions.push(vscode.commands.registerCommand('soarApps.diffFile', async (fileContext) => {
		diffFile(context, fileContext)
	}))

	let disposablePlaybookDownloadBundle = vscode.commands.registerCommand('splunkSoar.playbooks.downloadBundle', (playbookContext) => { downloadPlaybookBundle(context, playbookContext) });
	context.subscriptions.push(disposablePlaybookDownloadBundle);


}