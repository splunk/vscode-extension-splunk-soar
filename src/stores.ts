import * as vscode from 'vscode';

class TreeViewStore {
    store = new Map<string, vscode.TreeView<any>>();
  
    get<T>(name: string): vscode.TreeView<T> {
      return this.store.get(name)!;
    }
  
    add<T>(name: string, provider: vscode.TreeView<T>): void {
      this.store.set(name, provider);
    }
}
 
export const treeViewStore = new TreeViewStore();
