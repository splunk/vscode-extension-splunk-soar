import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppWizard from './AppWizard';

const vscode = acquireVsCodeApi();

ReactDOM.render(
  <AppWizard/>,
  document.getElementById('root')
);
