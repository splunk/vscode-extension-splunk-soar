import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ExtensionContext } from './context';
import PlaybookViewer from './PlaybookViewer';

import './PlaybookViewer.css'
const vscode = acquireVsCodeApi();

ReactDOM.render(
  <ExtensionContext.Provider value={vscode}>
    <PlaybookViewer/>
  </ExtensionContext.Provider>,
  document.getElementById('root')
);
