import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppWizard from './AppWizard';
import { ExtensionContext } from './context';

const vscode = acquireVsCodeApi();

createRoot(document.getElementById('root')).render(
  <ExtensionContext.Provider value={vscode}>
  <AppWizard/>
  </ExtensionContext.Provider>
);
