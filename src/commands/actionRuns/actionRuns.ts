import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client';

export interface IActionRun {
	id: string
}

export interface IAction {
	name: string
}

export interface IActionDefinition {
	parameters: Object,
	action: string,
	identifier: string
}

export interface IApp {
	id: string,
	directory: string,
	_pretty_asset_count: number
}

export interface IActionContext {
	data: {
		key: string,
		app: IApp,
		action: IAction
		app_json: {
			actions: IActionDefinition[]
		}
	}
}

export interface IParamInfo {
	required: boolean,
	value_list: string[],
	data_type: string,
	description: string,
	default: string
}

export interface IActionRunContext {
	data: {
		actionRun: IActionRun,
	}
}

export async function processRunAction(actionName: string, containerId: string, actionRunTargets: any, progress: vscode.Progress<{message?: string | undefined, increment?: number | undefined}>, context: vscode.ExtensionContext){
    let client = await getClientForActiveEnvironment(context)

    progress.report({ increment: 0 });
    let result = await client.triggerActionTargets(actionName, containerId, actionRunTargets)
    let {action_run_id, message} = result.data
    progress.report({ increment: 10, message: `${message}: Action Run ID: ${action_run_id}`});
    
    let actionRunResult = await client.getActionRun(action_run_id)
    await vscode.commands.executeCommand('splunkSoar.actionRuns.refresh');
    
    const config = vscode.workspace.getConfiguration()

    let maxTries: number = config.get<number>("runAction.timeout", 30)
    let actualTries = 0

    while (actionRunResult.data.status === "running" && actualTries < maxTries) {
        progress.report({increment: 25, message: "Still running..."})
        actualTries += 1
        await wait()
        console.log(`Try: ${actualTries}`);
        actionRunResult = await client.getActionRun(action_run_id)
    }
    if (actionRunResult.data.status === "running") {
        vscode.window.showErrorMessage("Action execution timed out, action still running. Will retrieve last known status.")
    }

    progress.report({increment: 50, message: `${actionRunResult.data.message}`})

    let appRunsResult = await client.getActionRunAppRuns(action_run_id)
    
    progress.report({increment: 75, message: "Collecting Results"})

    let appRunId = appRunsResult.data.data[0]["id"]

    let appRunResult = await client.getAppRun(appRunId)

    let soarOutput = vscode.window.createOutputChannel("Splunk SOAR: Action Run");
    soarOutput.clear()
    soarOutput.append(JSON.stringify(appRunResult.data, null, 4))
    soarOutput.show()
    await vscode.commands.executeCommand('splunkSoar.actionRuns.refresh');
    await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh')
}

export function wait(ms = 1000) {
	return new Promise(resolve => {
	  setTimeout(resolve, ms);
	});
}