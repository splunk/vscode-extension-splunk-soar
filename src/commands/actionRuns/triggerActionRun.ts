 //@ts-nocheck
import { QuickPickItem, window, QuickInputButton, ExtensionContext, Uri, ProgressLocation, env, workspace, commands, ThemeIcon } from 'vscode';
import { getClientForActiveEnvironment } from '../../soar/client';
import {MultiStepInput} from '../../wizard/MultiStepInput'
import { openAppAssetConfiguration } from '../web';
import { processRunAction } from './actionRuns';
import { IActionDefinition, IParamInfo, IActionContext } from './actionRuns';

export async function runActionInput(context: ExtensionContext, actionContext: IActionContext) {
	class MyButton implements QuickInputButton {
		constructor(public iconPath: ThemeIcon, public tooltip: string) { }
	}
	const skipParamButton = new MyButton(new ThemeIcon("debug-step-over"),'Skip');

	interface State {
		title: string;
        container_id: string
		step: number;
		totalSteps: number;
		asset: QuickPickItem;
		name: string;
		parameters: any[]
	}

	async function collectInputs() {
		const state = {
			parameters: [{}]
		} as Partial<State>;
		await MultiStepInput.run(input => pickAsset(input, state));
		return state as State;
	}

	const title = `Run Action: ${JSON.stringify(actionContext.data.action["name"])}`;
	let client = await getClientForActiveEnvironment(context)

	let appActions: IActionDefinition[] = await (await client.getAppActions(actionContext.data["app"]["id"])).data.data

    let actionName = actionContext.data.action["name"]
    const actionDefinition = appActions.find((action: IActionDefinition) => action.action == actionName);
	if (actionDefinition == undefined) {
		window.showErrorMessage("Run Action failed: Could not find action definition in app metadata")
		return
	}
    const actionParameters = actionDefinition.parameters
    const parameterList = Object.entries(actionParameters).filter(actionParam => {
		let actionParamData = actionParam[1]
		return actionParamData["data_type"] !== "ph"
	})

    const totalSteps = parameterList.length + 2;

	async function pickAsset(input: MultiStepInput, state: Partial<State>) {

        let assetResponse = await client.listAppAssets(actionContext.data.app.id)

        const assets: QuickPickItem[] = assetResponse.data.data
    		.map((asset: any) => ({'label': asset["name"]}));

		if (assets.length === 0) {
			window.showErrorMessage("No asset configured for app.", ...["Configure Asset in SOAR"]).then(selection => {
				if (selection) {
					openAppAssetConfiguration(context, actionContext.data["app"]["id"])
				}
			})
			return
		}

		const pick = await input.showQuickPick({
			title,
			step: 1,
			totalSteps: totalSteps,
			placeholder: 'Pick an asset',
			items: assets,
			activeItem: typeof state.asset !== 'string' ? state.asset : undefined,
			canSelectMany: true,
			shouldResume: shouldResume
		});
		state.asset = pick;
		return (input: MultiStepInput) => pickContainer(input, state);
	}

    async function pickContainer(input: MultiStepInput, state: Partial<State>){
        state.container_id = await input.showInputBox({
			title,
			step: 2,
			totalSteps: totalSteps,
			value: state.container_id || '',
			prompt: `Container ID`,
			shouldResume: shouldResume,
            validate: validateContainerExists
		});

        if (parameterList.length > 0) {
            return (input: MultiStepInput) => pickParam(input, state, 0);
        }
    }

    async function pickParam(input: MultiStepInput, state: Partial<State>, actionParamIndex: number){
        let [paramName, paramInfo]: [string, IParamInfo] = parameterList[actionParamIndex]
		let enteredParam;

		if (state.parameters == undefined){
			state.parameters = [{}]
		}

		let showSkip = true
		if ("required" in paramInfo && paramInfo["required"] === true) {
			showSkip = false
		}

		if ('value_list' in paramInfo && paramInfo["value_list"].length > 0) {
			const values: QuickPickItem[] = paramInfo["value_list"]
    		.map((value: string) => ({'label': value}));
			
			enteredParam = await input.showQuickPick({
				title,
				step: 1,
				totalSteps: totalSteps,
				placeholder: `Pick a value for ${paramName}`,
				items: values,
				activeItem: typeof state.parameters[0][paramName] !== 'string' ? state.parameters[0][paramName] : undefined,
				shouldResume: shouldResume,
				canSelectMany: false,
				buttons: showSkip ? [skipParamButton] : [] 
			});

			if (enteredParam instanceof MyButton) {
				enteredParam = undefined
			} else {
				enteredParam = enteredParam[0].label
			}
	
		} else if (paramInfo["data_type"] === "boolean") {
			const values: QuickPickItem[] = [{'label': "true"}, {'label': "false"}]
			enteredParam = await input.showQuickPick({
				title,
				step: 1,
				totalSteps: totalSteps,
				placeholder: `Pick a value for ${paramName}`,
				items: values,
				activeItem: typeof state.parameters[0][paramName] !== 'string' ? state.parameters[0][paramName] : undefined,
				shouldResume: shouldResume,
				canSelectMany: false,
				buttons: showSkip ? [skipParamButton] : []
			});

			if (enteredParam instanceof MyButton) {
				enteredParam = undefined
			} else {
				enteredParam = enteredParam[0].label
			}
		} else {

			enteredParam = await input.showInputBox({
				title,
				step: 2 + actionParamIndex,
				totalSteps: totalSteps,
				value: paramInfo["default"] || '',
				prompt: `${paramName}: ${paramInfo["description"]}`,
				shouldResume: shouldResume,
				validate: validateNameIsUnique,
				buttons: showSkip ? [skipParamButton] : []
			});

			if (enteredParam instanceof MyButton) {
				enteredParam = undefined
			}
		}

		if (enteredParam !== undefined) {
			state.parameters[0][paramName] = enteredParam
		}

        if (actionParamIndex < parameterList.length - 1) {
            return (input: MultiStepInput) => pickParam(input, state, actionParamIndex + 1);
        }
    }

	function shouldResume() {
		return new Promise<boolean>((resolve, reject) => {
			// noop
		});
	}

	async function validateNameIsUnique(name: string) {
		return name === 'vscode' ? 'Name not unique' : undefined;
	}

	async function validateContainerExists(containerId: string) {
		let client = await getClientForActiveEnvironment(context)

		try {
			await client.getContainer(containerId)
			return undefined
		} catch {
			return 'Container was not found in Splunk SOAR. Please enter a valid ID.'
		}
	}

	const state = await collectInputs();

	window.withProgress({
		location: ProgressLocation.Notification,
		title: `Running ${actionContext.data.action["name"]} with Asset ${state.asset.map((asset: any) => asset.label).join()} on container ${state.container_id}'`,
		cancellable: false
	}, async (progress, token) => {

		let targets = [{
                "assets": state.asset.map((asset: any) => asset.label),
                "parameters": state.parameters,
                "app_id": actionContext.data.app.id
        }]
		await processRunAction(actionName, state.container_id, targets, progress, context)
	})
}
