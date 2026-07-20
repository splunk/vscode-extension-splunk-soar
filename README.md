# Splunk SOAR Extension for VS Code

[![GitHub Workflow Status](https://github.com/splunk/vscode-extension-splunk-soar/actions/workflows/ci.yml/badge.svg)](https://github.com/splunk/vscode-extension-splunk-soar/actions/workflows/ci.yml)
[![Slack](https://img.shields.io/badge/Slack-soar__app__dev-blue?logo=slack)](https://splunk-usergroups.slack.com/archives/C03FYT64AJZ)


The extension for developers building applications for Splunk SOAR. Works with SOAR hosted either on-prem or in Cloud and its goal is to make the app development experience as seamless and efficient as possible on the [VS Code](https://code.visualstudio.com/) editor platform.

During setup, the extension is configured to connect to the SOAR platform. This allows the extension to pull information from SOAR and allows the developer to perform common operations such as browsing of remote objects, running actions and managing resulting action runs.

The screenshots below are taken from the [Visual Studio Code](https://github.com/microsoft/vscode) environment
where the extension is installed successfully.

Browse the full [documentation](https://splunk.github.io/vscode-extension-splunk-soar/).

## Features
* Browse apps and assets configured on the connected SOAR instance via [Tree View](https://github.com/splunk/vscode-extension-splunk-soar/wiki/features#inspect-soar-objects)
* [Apps Installation](#app-installation) via custom [SOAR App Build Task](https://github.com/splunk/vscode-extension-splunk-soar/wiki/features#app-build-task) to install a local SOAR app on the configured instance with a [single key combination](https://github.com/splunk/vscode-extension-splunk-soar/wiki/commands#installing-an-app-using-the-command-palette)
* Integrated [Actions Execution](#run-actions) to run a given action on the configured instance
* Integrated [Playbooks Execution](#run-playbooks) to run a given playbook on the configured instance
* Built-in [App Wizard](https://github.com/splunk/vscode-extension-splunk-soar/wiki/features#app-wizard) to bootstrap a new local SOAR App project
* Smart [Run Action CodeLens](https://github.com/splunk/vscode-extension-splunk-soar/wiki/features#run-action-codelens) to detect action handlers in connector code and provide an inline action command
* Set of useful [SOAR commands](https://github.com/splunk/vscode-extension-splunk-soar/wiki/commands) aiming to
  * Browse remote SOAR objects such as Containers, Assets, Apps
  * Navigate to SOAR Web UI
* Integrated [SOAR: Container Watcher Console](https://github.com/splunk/vscode-extension-splunk-soar/wiki/features#container-watcher-console) to watch containers for changes at either action or playbook execution

:warning: All features are targeted towards speeding up SOAR apps development. Explicitly out-of-scope are features assisting with playbook development. For developing playbooks, the new Visual Playbook Editor (VPE) within SOAR is strongly recommended.

## Getting Started
### Installation

Download the extension via the Visual Studio Marketplace.

Alternatively, download the VSIX file from the [Releases page](https://github.com/splunk/vscode-extension-splunk-soar/releases/) and use the *Extensions -> Install from VSIX...* dialog within the VS Code extension panel.

### Connect your environment

After successful installation, open the Splunk SOAR view from the sidebar and press the **Connect Environment** button to set up the connection to your SOAR environment. Type info such as SOAR URL and credentials to the appearing step-by-step interactive dialog. Once the environment is set up, it will be activated automatically.

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

To install your locally developed app to the configured SOAR instance, click on the upload icon on the top right of the apps view. You'll be prompted to select the folder containing your app bundle (`.tgz` file)

If you don't have a bundled app yet, automatically bundle and install it by following [these instructions](https://github.com/splunk/vscode-extension-splunk-soar/wiki/commands#installing-an-app-using-the-command-palette)

> NOTE: Your app code **must** be opened in a dedicated VSCode window to work

### Run Actions

* Select the action you want to run from the Apps View
* Click on the play icon for that action
* Provide action parameters as well as execution context info (e.g. asset, container) at request in the appearing interactive dialog

Once the operation has completed, results will be displayed in the OUTPUT terminal.

<p align="center">
  <img src="media/actionrun.gif" alt="Run an action" />
</p>

:warning:  If the app has no asset configured, an error could be thrown

To re-execute the action keeping the same parameters and context, simply click on the refresh icon for that specific action in Action Runs View.

#### Run Actions: Details

By hovering over each run listed under the Action Runs View, additional contextual information can be displayed. Quick links for inspecting the elements can be clicked to open details for both the action run and the container.

<p align="center">
<img src="media/actionrun_hover.png" alt="Action Run Hover" />
</p>

By right-clicking on each run users can:
* Inspect the Action Run,
* View the action in SOAR Web UI

### Run Playbooks

* Select the playbook you want to run from the Playbooks View
* Click on the play icon for that playbook
* Provide scope as well as execution context info (e.g. asset, container) at request in the appearing interactive dialog

Once the operation has completed, results will be displayed in the OUTPUT terminal.

To re-execute the playbook keeping the same parameters and context, simply click on the refresh icon for that specific action in Playbook Runs View.

By right-clicking on each playbook users can:
* Inspect the playbook,
* View the playbook code,
* Download the playbook bundle (`tgz`),
* Open the playbook in Visual Playbook Editor

#### Run Playbooks: Details

Similarly to Actions, by hovering over each run listed under the Playbook Runs View, additional contextual information can be displayed. Quick links for inspecting the elements can be clicked to open details for both the playbook run and the container.

Execution logs can be displayed by:
* right-clicking on a run listed under the Playbook Runs View
* clicking on "Logs"

## Development

### Prerequisites

- VS Code 1.101 or newer
- Node.js 22.18.0 (the repository includes an `.nvmrc`)
- Yarn 1.22.22

This repository uses Yarn exclusively. Do not use npm to install or update dependencies; the root extension and the documentation site each have their own `yarn.lock`.

### Set up the repository

```bash
git clone https://github.com/splunk/vscode-extension-splunk-soar.git
cd vscode-extension-splunk-soar
nvm use
yarn install --frozen-lockfile
code .
```

If the requested Node.js version is not installed yet, run `nvm install` before `nvm use`.

### Inner development loop

1. Open **Run and Debug** in VS Code and start the **Run Extension** configuration, or press `F5`.
2. The default `yarn: watch` task starts webpack in watch mode and opens an Extension Development Host window with a temporary VS Code profile.
3. Exercise the change in the Extension Development Host. Open the Splunk SOAR view or invoke a contributed command to activate the extension.
4. After changing extension or webview source code, wait for webpack to finish rebuilding, then run **Developer: Reload Window** in the Extension Development Host to load the new bundles.
5. Set breakpoints in `src/` and inspect extension-host output in the Debug Console. Webview code is bundled from `app/src/` into `app/build/`.

The temporary profile does not inherit environments configured in your regular VS Code profile. If a change requires a SOAR connection, configure a non-production SOAR environment inside the Extension Development Host.

### Local checks

Run these before opening a pull request:

```bash
# Type-check the extension without emitting JavaScript
yarn check-types

# Lint extension and webview sources
yarn lint

# Create development bundles once, without watch mode
yarn compile

# Create optimized production bundles
yarn package

# Build the same VSIX artifact produced by CI
yarn vsce package --out vscode-splunk-soar.vsix
```

The current lint configuration reports an existing warning backlog but should complete with zero errors. Webpack also reports bundle-size recommendations for the webviews; these warnings do not fail the build.

There is currently no automated extension-host test suite. The required verification is type-checking, linting, production bundling, and exercising the affected workflow in the Extension Development Host.

### Updating dependencies

Run dependency commands from the directory whose manifest is being updated:

```bash
# Runtime dependency
yarn add <package>

# Development dependency
yarn add --dev <package>

# Remove a dependency
yarn remove <package>
```

Commit both the affected `package.json` and its `yarn.lock`. Verify the resulting graph with `yarn install --frozen-lockfile` and `yarn audit`.

### Documentation site

The Docusaurus site is an independent Yarn project under `docs/`:

```bash
cd docs
yarn install --frozen-lockfile
yarn start
```

The development server is available at [http://localhost:3000](http://localhost:3000). Run `yarn build` from `docs/` to verify a production documentation build.

## Documentation

The documentation is located on https://splunk.github.io/vscode-extension-splunk-soar/ and hosted via Github Pages.

## Contributing

Please review our [Contribution Guide](./CONTRIBUTING.md)


## Support & License

Please refer to [License](LICENSE) with regards to licensing. This software is released as-is. Splunk provides no warranty and no support on this software. If you have any issues with the software, please file an issue on the repository.

## Splunk Copyright Notice

Copyright 2022 Splunk Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
