import { QuickPickItem, window, Disposable, CancellationToken, QuickInputButton, QuickInput, ExtensionContext, QuickInputButtons, Uri, ProgressLocation, env, workspace } from 'vscode';
import { getConfiguredClient } from '../../soar/client';

/**
 * A multi-step input using window.createQuickPick() and window.createInputBox().
 * 
 * This first part uses the helper class `MultiStepInput` that wraps the API for the multi-step case.
 */
export async function runActionInput(context: ExtensionContext, actionContext) {

	interface State {
		title: string;
        container_id: string
		step: number;
		totalSteps: number;
		asset: QuickPickItem;
		name: string;
		runtime: QuickPickItem;
		parameters: object[]
	}

	async function collectInputs() {
		const state = {
			parameters: [{}]
		} as Partial<State>;
		await MultiStepInput.run(input => pickAsset(input, state));
		return state as State;
	}

	const title = `Run Action: ${actionContext.data.action["name"]}`;

    let actionName = actionContext.data.action["name"]
    const actionDefinition = actionContext.data.app_json.actions.find((action) => action.action == actionName);
    const actionParameters = actionDefinition.parameters
    const parameterList = Object.entries(actionParameters).filter(actionParam => {
		let actionParamData = actionParam[1]
		return actionParamData["data_type"] !== "ph"
	})

    const totalSteps = parameterList.length + 2;

	async function pickAsset(input: MultiStepInput, state: Partial<State>) {

        let client = getConfiguredClient()
        let assetResponse = await client.listAppAssets(actionContext.data.app.id)

        const assets: QuickPickItem[] = assetResponse.data.data
    		.map((asset: any) => ({'label': asset["name"]}));

		if (assets.length === 0) {
			window.showErrorMessage("No asset configured for app.", ...["Configure in SOAR"]).then(selection => {
				const server: string = workspace.getConfiguration().get<string>("authentication.server", '')
				
				if (selection) {
					let assetConfigUrl = `${server}/apps/${actionContext.data.app.id}/asset/`
					env.openExternal(Uri.parse(assetConfigUrl))	
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
			shouldResume: shouldResume
		});
		state.asset = pick;
		return (input: MultiStepInput) => pickContainer(input, state);
	}

    async function pickContainer(input: MultiStepInput, state){
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

    async function pickParam(input: MultiStepInput, state, actionParamIndex){
        let [paramName, paramInfo] = parameterList[actionParamIndex]
        let enteredParam = await input.showInputBox({
			title,
			step: 2 + actionParamIndex,
			totalSteps: totalSteps,
			value: state.name || '',
			prompt: `${paramName}: ${paramInfo["description"]}`,
			shouldResume: shouldResume,
            validate: validateNameIsUnique
		});

		state.parameters[0][paramName] = enteredParam

        if (actionParamIndex < parameterList.length - 1) {
            return (input: MultiStepInput) => pickParam(input, state, actionParamIndex + 1);
        }
    }

	function shouldResume() {
		// Could show a notification with the option to resume.
		return new Promise<boolean>((resolve, reject) => {
			// noop
		});
	}

	async function validateNameIsUnique(name: string) {
		// ...validate...
		return name === 'vscode' ? 'Name not unique' : undefined;
	}

	async function validateContainerExists(containerId: string) {
		let client = getConfiguredClient()

		try {
			await client.getContainer(containerId)
			return undefined
		} catch {
			return 'Container was not found in Splunk SOAR. Please enter a valid ID.'
		}
	}

	const state = await collectInputs();
    console.log(state)

	let client = getConfiguredClient()

	window.withProgress({
		location: ProgressLocation.Notification,
		title: `Running ${actionContext.data.action["name"]} with Asset ${state.asset.label} on Container ${state.container_id}'`,
		cancellable: false
	}, async (progress, token) => {
		progress.report({ increment: 0 });
		let result = await client.triggerAction(actionName, state.container_id, state.asset.label, actionContext.data.app.id, state.parameters)
		let {action_run_id, message} = result.data
		progress.report({ increment: 10, message: `${message}: Action Run ID: ${action_run_id}`});
		
		let actionRunResult = await client.getActionRun(action_run_id)
		
		while (actionRunResult.data.status === "running") {
			progress.report({increment: 25, message: "Still running..."})
			await wait()
			actionRunResult = await client.getActionRun(action_run_id)
		}

		progress.report({increment: 50, message: `${actionRunResult.data.message}`})

		let appRunsResult = await client.getActionRunAppRuns(action_run_id)
		
		progress.report({increment: 75, message: "Collecting Results"})

		let appRunId = appRunsResult.data.data[0]["id"]

		let appRunResult = await client.getAppRun(appRunId)

		let soarOutput = window.createOutputChannel("Splunk SOAR: Action Run");
		soarOutput.clear()
		soarOutput.append(JSON.stringify(appRunResult.data, null, 4))
		soarOutput.show()

	})
}

function wait(ms = 1000) {
	return new Promise(resolve => {
	  console.log(`waiting ${ms} ms...`);
	  setTimeout(resolve, ms);
	});
}
  


// -------------------------------------------------------
// Helper code that wraps the API for the multi-step case. Taken from the MS Example
// -------------------------------------------------------


class InputFlowAction {
	static back = new InputFlowAction();
	static cancel = new InputFlowAction();
	static resume = new InputFlowAction();
}

type InputStep = (input: MultiStepInput) => Thenable<InputStep | void>;

interface QuickPickParameters<T extends QuickPickItem> {
	title: string;
	step: number;
	totalSteps: number;
	items: T[];
	activeItem?: T;
	placeholder: string;
	buttons?: QuickInputButton[];
	shouldResume: () => Thenable<boolean>;
}

interface InputBoxParameters {
	title: string;
	step: number;
	totalSteps: number;
	value: string;
	prompt: string;
	validate: (value: string) => Promise<string | undefined>;
	buttons?: QuickInputButton[];
	shouldResume: () => Thenable<boolean>;
}

class MultiStepInput {

	static async run<T>(start: InputStep) {
		const input = new MultiStepInput();
		return input.stepThrough(start);
	}

	private current?: QuickInput;
	private steps: InputStep[] = [];

	private async stepThrough<T>(start: InputStep) {
		let step: InputStep | void = start;
		while (step) {
			this.steps.push(step);
			if (this.current) {
				this.current.enabled = false;
				this.current.busy = true;
			}
			try {
				step = await step(this);
			} catch (err) {
				if (err === InputFlowAction.back) {
					this.steps.pop();
					step = this.steps.pop();
				} else if (err === InputFlowAction.resume) {
					step = this.steps.pop();
				} else if (err === InputFlowAction.cancel) {
					step = undefined;
				} else {
					throw err;
				}
			}
		}
		if (this.current) {
			this.current.dispose();
		}
	}

	async showQuickPick<T extends QuickPickItem, P extends QuickPickParameters<T>>({ title, step, totalSteps, items, activeItem, placeholder, buttons, shouldResume }: P) {
		const disposables: Disposable[] = [];
		try {
			return await new Promise<T | (P extends { buttons: (infer I)[] } ? I : never)>((resolve, reject) => {
				const input = window.createQuickPick<T>();
				input.title = title;
				input.step = step;
				input.totalSteps = totalSteps;
				input.placeholder = placeholder;
				input.items = items;
				if (activeItem) {
					input.activeItems = [activeItem];
				}
				input.buttons = [
					...(this.steps.length > 1 ? [QuickInputButtons.Back] : []),
					...(buttons || [])
				];
				disposables.push(
					input.onDidTriggerButton(item => {
						if (item === QuickInputButtons.Back) {
							reject(InputFlowAction.back);
						} else {
							resolve(<any>item);
						}
					}),
					input.onDidChangeSelection(items => resolve(items[0])),
					input.onDidHide(() => {
						(async () => {
							reject(shouldResume && await shouldResume() ? InputFlowAction.resume : InputFlowAction.cancel);
						})()
							.catch(reject);
					})
				);
				if (this.current) {
					this.current.dispose();
				}
				this.current = input;
				this.current.show();
			});
		} finally {
			disposables.forEach(d => d.dispose());
		}
	}

	async showInputBox<P extends InputBoxParameters>({ title, step, totalSteps, value, prompt, validate, buttons, shouldResume }: P) {
		const disposables: Disposable[] = [];
		try {
			return await new Promise<string | (P extends { buttons: (infer I)[] } ? I : never)>((resolve, reject) => {
				const input = window.createInputBox();
				input.title = title;
				input.step = step;
				input.totalSteps = totalSteps;
				input.value = value || '';
				input.prompt = prompt;
				input.buttons = [
					...(this.steps.length > 1 ? [QuickInputButtons.Back] : []),
					...(buttons || [])
				];
				let validating = validate('');
				disposables.push(
					input.onDidTriggerButton(item => {
						if (item === QuickInputButtons.Back) {
							reject(InputFlowAction.back);
						} else {
							resolve(<any>item);
						}
					}),
					input.onDidAccept(async () => {
						const value = input.value;
						input.enabled = false;
						input.busy = true;
						if (!(await validate(value))) {
							resolve(value);
						}
						input.enabled = true;
						input.busy = false;
					}),
					input.onDidChangeValue(async text => {
						const current = validate(text);
						validating = current;
						const validationMessage = await current;
						if (current === validating) {
							input.validationMessage = validationMessage;
						}
					}),
					input.onDidHide(() => {
						(async () => {
							reject(shouldResume && await shouldResume() ? InputFlowAction.resume : InputFlowAction.cancel);
						})()
							.catch(reject);
					})
				);
				if (this.current) {
					this.current.dispose();
				}
				this.current = input;
				this.current.show();
			});
		} finally {
			disposables.forEach(d => d.dispose());
		}
	}
}