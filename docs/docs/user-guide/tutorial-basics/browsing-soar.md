---
sidebar_position: 2 
---

# Browsing SOAR

The VS Code Extension for Splunk SOAR packages a number of custom views to browse connected SOAR environments and retrieve information about them. Most objects support an **Inspect** command that shows the object in JSON format within a virtual, read-only document.

## Environments

![Environments View](/img/activate_environment.png)

This view provides actions to manage and interact with connected SOAR environments.

- Connect new SOAR environments
- Review all connected environments
- Remove connected environments
- Change the currently active environment

## Apps

![Apps View](/img/sidebar_apps.png)

This view provides actions to manage and interact with installed apps on the SOAR environment. Users will have the ability to:

- Review all installed apps, assets and provided actions
- Trigger actions from installed apps
- Pin apps of interest to the top
- Browse files deployed within apps and compare remote files with a opened local file

## Action Runs

![Action Runs View](/img/sidebar_action_runs.png)

This view provides means to manage and review current and prior actions runs as well as their resulting app runs

- Get information about current and past runs
- Cancel an ongoing run using the context menu
- Re-run a prior action run with identical parameters
- Review action run results and their data

## Playbooks

![Playbooks View](/img/sidebar_playbooks.png)

This view provides means to review playbooks that are installed on the active environment. They are grouped by their SCM location.

- View playbook code and associated metadata
- Trigger a playbook run
- Download a playbook to your local workstation
- Trigger SCM synchronization

## Playbook Runs

![Playbooks Runs View](/img/sidebar_playbook_runs.png)

This view provides means to manage and review current and prior playbook runs.

- Repeat a prior playbook run with identical parameters
- Cancel an ongoing playbook run
- Review playbook run logs
