---
sidebar_position: 7 
---

# Documentation

The documentation is hosted in the `docs/` subfolder. All subsequent commands assume you are located in this folder.

### Run the development server
```
npx docusaurus start
```

The development server will start on [http://localhost:3000](http://localhost:3000)

### Create a production bundle
```
yarn run build
```

### Review the production bundle
```
yarn run serve
```

### Deploying

[The Github Actions Workflow](https://github.com/splunk/vscode-extension-splunk-soar/actions/workflows/docs_deploy.yml) will trigger if there is a modification on the `docs/` subfolder and automatically deploy the updated docs to [https://splunk.github.io/vscode-extension-splunk-soar/](https://splunk.github.io/vscode-extension-splunk-soar/) via Github Pages.