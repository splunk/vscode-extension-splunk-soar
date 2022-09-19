---
sidebar_position: 6 
---
# Extension Development

### Set up the local development environment

Clone the repository

```
git clone https://github.com/splunk/vscode-extension-splunk-soar
```

Switch into the cloned repo and install all required dependencies

```bash
yarn install
```

### Running the Extension in Debug Mode

Run the `Run Extension (vscode-extension-splunk-soar)` target in the `Run and Debug` view. This will:

* Start a task `npm: watch` to compile the code
* Run the extension in a new VS Code window

:::note
Click on **Debug Anyway** when prompted by a warning popup.
:::
