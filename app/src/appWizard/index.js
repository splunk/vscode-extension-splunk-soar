import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppWizard from './AppWizard';
import { ExtensionContext } from './context';

const vscode = acquireVsCodeApi();

ReactDOM.render(
  <ExtensionContext.Provider value={vscode}>
  <AppWizard/>
  </ExtensionContext.Provider>,
  document.getElementById('root')
);
