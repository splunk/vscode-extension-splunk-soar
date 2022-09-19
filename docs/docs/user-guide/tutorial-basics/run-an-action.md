---
sidebar_position: 2
---
import ReactPlayer from 'react-player'
import runAction from '@site/static/video/run_action.webm';
import reviewRunResults from '@site/static/video/review_run_action_results.webm';
import repeatActionRun from '@site/static/video/repeat_action_run.webm';

# Run an Action

The VS Code Extension for SOAR allows to trigger action runs from within the editor. This is a key feature that significantly speeds up development and testing.
The action is triggered on the active instance and we 

<ReactPlayer width="100%" height="auto" controls url={runAction} />

## Reviewing the Results
<ReactPlayer width="100%" height="auto" controls url={reviewRunResults} />

## Repeating an Action Run
<ReactPlayer width="100%" height="auto" controls url={repeatActionRun} />