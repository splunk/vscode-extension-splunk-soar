import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MetadataEditor from './MetadataEditor';
import { ExtensionContext } from './context';

const vscode = acquireVsCodeApi();

ReactDOM.render(
  <ExtensionContext.Provider value={vscode}>
  <MetadataEditor/>
  </ExtensionContext.Provider>,
  document.getElementById('root')
);
