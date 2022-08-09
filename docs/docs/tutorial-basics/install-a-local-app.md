---
sidebar_position: 3 
---
import ReactPlayer from 'react-player'
import configureTaskVideo from '@site/static/video/install_app_configure_task.webm';
import installEditorBarVideo from '@site/static/video/install_app_editor_bar.webm';
import installAppFolderVideo from '@site/static/video/install_app_folder.webm';
import installUploadPackageVideo from '@site/static/video/install_app_upload_package.webm';

# Install a Local App

There are multiple ways to get a local app installed on a configured environment.

- with a **VS Code Task** (recommended)
- using the **Editor bar button**
- with the **File Explorer context menu**
- Packaged upload via the **Apps view**

Which one works best for you depends on your usual workflow. We recommend the [VS Code Task workflow](#vs-code-task) as it can be 
used with keybindings and offers the best developer experience after initial setup.

## VS Code Task

<ReactPlayer width="100%" height="auto" controls url={configureTaskVideo} />


## Editor Bar

<ReactPlayer width="100%" height="auto" controls url={installEditorBarVideo} />

## File Explorer Context Menu

<ReactPlayer width="100%" height="auto" controls url={installAppFolderVideo} />

## Apps View Upload

:::caution

This works only if you already have your SOAR app packaged as a tar.gz file

:::

<ReactPlayer width="100%" height="auto" controls url={installUploadPackageVideo} />
