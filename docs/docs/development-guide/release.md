---
sidebar_position: 8 
---
# Releases

This page collects information on how a new version of the extension is published and what steps need to be taken.

## Release Setup

Following [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) the app is packaged and published to the Azure Marketplace using the `vsce` command-line utility.

`vsce` is added to the extension as a development dependency.


## Creating a Release

Release candidates are created in the [Github Actions CI workflow](https://github.com/splunk/vscode-extension-splunk-soar/actions/workflows/ci.yml). As part of this workflow, a new Github release is created and the version is uploaded to the Azure Marketplace.

### Ensure Build passes

Ensure the build passes by packaging locally
```
vsce package
```

### Increment Version Number

Ensure the version number is incremented in the following files:
- `package.json`

### Tag the commit

Tag the commit with the new version to-be-released following semantic versioning. See an example below.

```
git tag v0.1.0 
```

### Push the tag

Push the new tag. This will kick of a new release pipeline.

```
git push origin main --tags
```