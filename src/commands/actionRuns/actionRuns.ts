import { AxiosResponse } from 'axios';
import * as vscode from 'vscode'
import { getClientForActiveEnvironment } from '../../soar/client';
import { SoarAction, SoarActionRun, SoarApp, SoarAppRun } from '../../soar/models';

export interface IActionRun {
    id: string
}

export interface IActionContext {
	data: {
		key: string,
		app: SoarApp,
		action: SoarAction
		app_json: {
			actions: SoarAction[]
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

export async function processRunAction(actionName: string, containerId: string, actionRunTargets: any, progress: vscode.Progress<{message?: string | undefined, increment?: number | undefined}>, context: vscode.ExtensionContext, outputChannel: vscode.OutputChannel){
    let client = await getClientForActiveEnvironment(context)
    progress.report({ increment: 0 });

    let action_run_id: string;
    let message: string;
    let result: AxiosResponse
    try {
    result = await client.triggerActionTargets(actionName, containerId, actionRunTargets)

    message = result.data.message
    action_run_id = result.data.action_run_id
    } catch (error: any) {
        message = error.response.data.message
        vscode.window.showErrorMessage(`Error while running Action: ${message}`)
        return
    }
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
        vscode.window.showWarningMessage("Action execution polling timed out, action still running. Will retrieve last known status.")
    }

    progress.report({increment: 50, message: `${actionRunResult.data.message}`})

    let appRunsResult = await client.getActionRunAppRuns(action_run_id)
    
    progress.report({increment: 75, message: "Collecting Results"})

    outputChannel.clear()
    let appRunOutput = appRunsResult.data.data.map((appRun: SoarAppRun) => {
        return `
        =========== App Run: ${appRun.id} ===========
        Start: ${appRun.start_time}
        End: ${appRun.end_time}

        App: ${appRun.app_name}
        Action: ${appRun.action}
        Asset: ${appRun._pretty_asset}

        ${appRun.message}
        `
    }).join("\n")

    outputChannel.append(appRunOutput)
    outputChannel.show()

    await vscode.commands.executeCommand('splunkSoar.actionRuns.refresh');
    await vscode.commands.executeCommand('splunkSoar.containerWatcher.refresh')
}

export function wait(ms = 1000) {
	return new Promise(resolve => {
	  setTimeout(resolve, ms);
	});
}