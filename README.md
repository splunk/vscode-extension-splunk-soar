# Splunk SOAR Extension for VS Code

The extension for developers building applications for Splunk SOAR. Works with SOAR hosted either on-prem or in Cloud and its goal is to make the app development experience as seamless and efficient as possible on the [VS Code](https://code.visualstudio.com/) editor platform.

During setup, the extension is configured to connect to the SOAR platform. This allows the extension to pull information from SOAR and allows the developer to perform common operations such as browsing of remote objects, running actions and managing resulting action runs.

## Features
> TODO add features

All features are targeted towards speeding up SOAR app development. Explicitly out-of-scope are features that assist with playbook development. For developing playbooks, the new Visual Playbook Editor (VPE) within SOAR is strongly recommended.

## Getting Started
### Installation

Download the extension via the Visual Studio Marketplace.

Alternatively, download the VSIX file from the [Releases page](https://github.com/splunk/vscode-extension-splunk-soar/releases/) and use the *Extensions -> Install from VSIX...* dialog within the VS Code extension panel.

### Connect your environment

After successful installation, open the Splunk SOAR view from the sidebar and press the **Connect Environment** button to set up the connection to your SOAR environment. Type info such as SOAR URL and credentials to the appearing step-by-step interactive dialog.

Once the environment is set up, it will be activated automatically.

<p align="center">
  <img src="media/connect_environment.png" alt="Connect Environment" />
</p>

Use the available context menu to manage environment(s) and receive information about them. To open the context menu, right-click on the desired environment listed in the view.

#### Multi-Environment Support

You can create multiple environments to quickly context-switch between remote SOAR instances, but **only a single environment can be active** at the same time. To connect another environment click the plus icon on the top right of the view

<p align="center">
  <img src="media/activate_environment.png" alt="Connect Environment" />
</p>

## Usage
### App Installation

To install your locally developed app to the configured SOAR instance, click on the upload icon on the top right of the apps view. You'll be prompted to select the folder containing the your app files.

> TODO what happens next?

### Run Actions

* Select the action you want to run from the Apps View
* Click on the play icon for that action
* Provide action parameters as well as execution context info (e.g. asset, container) at request in the appearing interactive dialog

Once the operation has completed, results will be displayed in the OUTPUT terminal.

<p align="center">
  <img src="media/actionrun.gif" alt="Run an action" />
</p>

### Hover Information

<p align="center">
<img src="media/actionrun_hover.png" alt="Action Run Hover" />
</p>

Hovering over Playbook Runs and Action Runs views shows additional contextual information which provides quick links for inspecting the elements.

>TODO review section

### App Wizard

<p align="center">
<img src="media/appwizard.png" alt="App Wizard" />
</p>

The App Wizard allows to quickly scaffold a new SOAR App, similar to the App Wizard in the SOAR Web UI. After generation, the user will be asked for the directory where the new project should be saved and the project is opened in a new editor window.

>TODO review section

### Inspecting SOAR Objects

<p align="center">
<img src="media/inspect.gif" alt="Inspect" />
</p>

By providing a [Tree View](https://code.visualstudio.com/api/extension-guides/tree-view), the extension allows to browse apps and assets configured on the connected SOAR instance. Using [Virtual Documents](https://code.visualstudio.com/api/extension-guides/virtual-documents), users are able to review SOAR objects in JSON format on-the-fly. Note that these views are read-only.[](media/appinstall.gif)

>TODO review section

## Documentation
More specific documentation can be found in the wiki hosted on the public repository.

https://github.com/splunk/vscode-extension-splunk-soar/wiki

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
