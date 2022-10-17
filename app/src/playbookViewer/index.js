import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PlaybookViewer from './PlaybookViewer';

const vscode = acquireVsCodeApi();



ReactDOM.render(
  <PlaybookViewer/>,
  document.getElementById('root')
);
