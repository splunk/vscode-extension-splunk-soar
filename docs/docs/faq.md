---
sidebar_position: 8 
---

# FAQ

## How is this different from the App Editor in the SOAR Web UI?

Splunk SOAR ships with a built-in App editing experience. It allows to create *draft apps* which are essentially working copies. It is great for quickly modifying and editing 
SOAR apps or get started with development. We highly recommend checking it out! Still, some developers prefer using their usual development environment and this extension is here to support those of us that use VS Code. 

## Is this a Splunk-supported product?

No. It is released as-is and does not come with any support or warranty. The source code is published on [Github](https://github.com/splunk/vscode-extension-splunk-soar) under Apache 2.0. 

## Why can't I see files for immutable SOAR Apps?

Certain SOAR apps are installed using an older packaging method that encouraged to only ship compiled `.pyc` files instead of sources. Unfortunately, for those apps it's not possible to review the remotely deployed files.

## Where do I report issues or suggest features?

On the [Github Issue Tracker](https://github.com/splunk/vscode-extension-splunk-soar/issues).