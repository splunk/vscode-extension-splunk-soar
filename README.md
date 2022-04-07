# vscode-extension-splunk-soar

This repository hosts a VS Code extension for Splunk SOAR app developers. 


## Quick Start

- Install the extension either from the `.vsix` file or the Ext



## Features

All features are targeted towards speeding up SOAR app development. Explicitly out-of-scope are features that assist with playbook development. For developing playbooks, the new Visual Playbook Editor (VPE) within SOAR is strongly recommended.


### App Installation

Using the [TaskProvider API](https://code.visualstudio.com/api/extension-guides/task-provider) the extension provides a Task that allows to install a local app to the configured SOAR instance via REST API. This procedure works for both on-prem and cloud SOAR. The task will transparently create a tar bundle of the app code for and upload it  to the instance.

![App Installation](https://raw.githubusercontent.com/splunk/vscode-extension-splunk-soar/main/media/appinstall.gif)

### Inspecting SOAR Objects

By providing a [Tree View](https://code.visualstudio.com/api/extension-guides/tree-view), the extension allows to browse apps and assets configured on the connected SOAR instance. Using [Virtual Documents](https://code.visualstudio.com/api/extension-guides/virtual-documents), users are able to review SOAR objects in JSON format on-the-fly. Note that these views are read-only.

![Inspecting SOAR Objects](https://raw.githubusercontent.com/splunk/vscode-extension-splunk-soar/main/media/inspect.gif)


### Running Actions

Within the SOAR Apps view, there is a contextual control to run an action in the connected SOAR instance from within VS Code. An interactive dialog allows the user to provide the actions parameters as well as the desired execution context (asset, container). After triggering the execution, the extension will poll for the action to complete and pipe the generated result back into the VS Code Output terminal.

![Running an Action](https://raw.githubusercontent.com/splunk/vscode-extension-splunk-soar/main/media/actionrun.gif)

## Contributing
### Requirements
* `yarn` or `npm` installed
* Open this repo in a clean VS Code workspace

### Running the Extension
* Install the dependencies on the first run by executing in Terminal
```bash
$ npm install
# or
$ yarn install
```
* Run the `Run Extension (vscode-extension-splunk-soar)` target in the `Run and Debug` view. This will:
    * Start a task `npm: watch` to compile the code
        > NOTE: click on `Debug Anyway` when prompted by a warning popup 
    * Run the extension in a new VS Code window

## Support & License

Please refer to [License](LICENSE) with regards to licensing. This software is released as-is. Splunk provides no warranty and no support on this software. If you have any issues with the software, please file an issue on the repository.