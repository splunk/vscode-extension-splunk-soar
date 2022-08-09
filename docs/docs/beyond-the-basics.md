---
sidebar_position: 4 
---

# Beyond the Basics

This is a collection of tips and tricks when using the VS Code Extension for SOAR to develop Apps.

## Secondary Sidebar

VS Code has a secondary sidebar which can be enabled under *View* -> *Appearance* -> *Enable Secondary Sidebar*. Unfortunately extensions cannot present itself on the secondary sidebar by default.

We recommend dragging the extension icon from primary bar to secondary because it allows you to review SOAR objects in parallel to the file explorer.


![Secondary Sidebar](/img/secondary_sidebar.png)

## Pin your Apps

Did you notice you can pin individual Apps? Right-click your app and press "Pin" to ensure it appears at the top of the Apps view.

## Hover over Views

When hovering over View items, there may be more useful information presented in a concise Hover panel.

![Hover](/img/actionrun_hover.png)

## Quick Repeat Last Action Run

There is a neat command that allows you to quickly repeat the last action run without leaving your keyboard. Simply open the command palette and find **SOAR Action Runs: Repeat Last Action Run**.

## CodeLens

The extension performs static analysis if it detects a SOAR connector file and provides [CodeLens annotations](https://code.visualstudio.com/blogs/2017/02/12/code-lens-roundup) on functions that have been identified as action handlers. They allow to quickly trigger an action run from within the editor.

![Hover](/img/actionrun_codelens.png)


## Diff Remote Files

Remote files in the Apps View have a context menu that allows you to quickly open them in Diff view with the currently opened file. This allows for quick analysis of the remotely deployed app and version.

![Hover](/img/diff.png)
