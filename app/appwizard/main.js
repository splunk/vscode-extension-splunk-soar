// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

function setVSCodeMessageListener() {
  window.addEventListener("message", (event) => {
    const command = event.data.command;
    const noteData = JSON.parse(event.data.payload);

    switch (command) {
      case "receiveDataInWebview":
        openedNote = noteData;
        renderTags(openedNote.tags);
        break;
    }
  });
}



function createApp() {
  const titleInputValue = document.getElementById("name").value;
  const descriptionInputValue= document.getElementById("description").value;

  const app = {
    name: titleInputValue,
    description: descriptionInputValue
  }

  vscode.postMessage({ command: "createApp", app: app });
  
}

function main() {
  setVSCodeMessageListener();

  const saveButton = document.getElementById("submit-button");
  saveButton.addEventListener("click", () => createApp());
}