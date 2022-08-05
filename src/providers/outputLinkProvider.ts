import * as vscode from 'vscode'

export default {
    provideDocumentLinks(document: vscode.TextDocument) {
        let out: any = []

        const regexPlaybookId  = new RegExp(/playbook id: (\d+)\)/g);
        out = out.concat(this.findEntity(document, regexPlaybookId, "soarplaybook", "playbook_"))

        const regexContainerId  = new RegExp(/container id: (\d+)\)/g);
        out = out.concat(this.findEntity(document, regexContainerId, "soarcontainer", "container_"))

        const playbookRunId  = new RegExp(/playbook run id: (\d+)\)/g);
        out = out.concat(this.findEntity(document, playbookRunId, "soarplaybookrun", "playbook-run_"))

        console.log(out)
        return out
    },
    
    findEntity(document: vscode.TextDocument, regex: RegExp, scheme: string, prefix: string) {
        let matches;
        let docText = document.getText() 
        let out = [];

        while ((matches = regex.exec(docText)) !== null) {
            const line = document.lineAt(document.positionAt(matches.index).line)
            const indexOf = line.text.indexOf(matches[0])
            const entityId = matches[1]

            const position = new vscode.Position(line.lineNumber, indexOf)
            const range = document.getWordRangeAtPosition(position, new RegExp(regex))
			
            const target = vscode.Uri.parse(`${scheme}:${prefix}${entityId}.json`);

            if (range) {
                out.push({"range": range, "target": target})
            }
        }
        return out

    }
}