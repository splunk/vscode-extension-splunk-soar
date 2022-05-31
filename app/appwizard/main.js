// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

function setVSCodeMessageListener() {
  window.addEventListener("message", (event) => {
    const command = event.data.command;
  });
}

function createApp() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const productVendor = document.getElementById("productVendor").value;
  const productName = document.getElementById("productName").value;
  const appType = document.getElementById("appType").value
  const publisher = document.getElementById("publisher").value

  const app = {
    name: name,
    description: description,
    productVendor: productVendor,
    productName: productName,
    publisher: publisher,
    appType: appType
  }

  vscode.postMessage({ command: "createApp", app: app });
  
}

function main() {
  setVSCodeMessageListener();

  const saveButton = document.getElementById("submit-button");
  saveButton.addEventListener("click", () => createApp());
}