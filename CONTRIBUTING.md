# Contribution Guide

## Working on the Extension

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

## Working on Documentation

The documentation is hosted in the `docs/` subfolder. All subsequent commands assume you are located in this folder.

Run the development server (starting on port 3000)
```
npx docusaurus start
```

Create a production bundle
```
yarn run build
```

Review the production bundle
```
yarn run serve
```

### Releasing the Documentation on Github Pages

```
GIT_USER=<username> GIT_PASS=<github-access-token> yarn deploy
```

