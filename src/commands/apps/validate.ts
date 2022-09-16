import * as path from 'path'
import * as fs from 'fs'

export function directoryContainsApp(dirPath: string) {
    let appValidator = new AppValidator(dirPath)
    return appValidator.containsApp()
}

function validationMessage(filename: string, line: number, col: number, level: string, message: string) {
    return `${filename}:${line}:${col}: ${level}: ${message}`
}

class AppValidator {
    appPath: string
    appJSONContent: string
    line: number = 1
    col: number = 1
    appJSON: any = null
    dirName: string
    output: string[] = []
    metaFileLocation: string

    constructor(appPath: string) {
        this.appPath = appPath
        this.appJSONContent = ""
        this.dirName = path.basename(this.appPath)
        this.metaFileLocation = path.join(this.appPath, `${this.dirName}.json`)
        if (!fs.existsSync(this.metaFileLocation)) {
            this.appJSON == null
        }
    }

    containsApp() {
        
        if (!fs.existsSync(this.metaFileLocation)) {
            throw new Error(`Could not find App Metadata JSON - Expected location: ${this.metaFileLocation}`)
        }
        try {
            this.appJSONContent = fs.readFileSync(this.metaFileLocation, 'utf-8')
            this.appJSON = JSON.parse(this.appJSONContent)
        } catch (e: any) {
            throw new Error(`Could not parse App Metadata JSON at ${this.metaFileLocation}: ${e.message}`)
        }


        return AppValidator.looksLikeAppJSON(this.appJSON)
    }

    static looksLikeAppJSON(candidate: Object) {
        let keys = ['appid', 'name', 'description', 'publisher', 'package_name', 'type',
            'license', 'main_module', 'app_version', 'product_vendor',
            'product_name', 'product_version_regex', 'min_phantom_version', 'logo', 'configuration', 'actions']
    
        if (!keys.every(key => candidate.hasOwnProperty(key))) {
            return false
        }
        return true
    }

    validate(): string[] {
        this.output.push("Starting App JSON validation\n")

        this.validateActions()
        this.validatePackageName()
        return this.output
    }

    validateActions() {
        for (let action of this.appJSON.actions) {
            this.output.push(`========== ${action.action} (${action.identifier}) ===========`) 
            this._validateAction(action)
            this.output.push("\n")
            this.incrementLine()
        }
    }

    validatePackageName() {
        this.incrementLine()

        if (!this.appJSON.package_name.startsWith("phantom_")) {
            this.output.push(validationMessage(`${this.dirName}.json`, this.line, this.col, "warning", `package_name property should start with "phantom_"`))
        }
        this.output.push("\n")
    }

    incrementLine() {
        this.line++
        this.col = 1
    }

    _validateAction(action: any) {

        if (action.type === "test" || action.type === "ingest") {
            return
        }

        let actionDataPaths = action.output.map((out: any) => out.data_path).sort()
        let requiredDataPaths = ['action_result.data', 'action_result.summary', 'action_result.status', 'action_result.message']
        let missingPaths = requiredDataPaths
        
        for (let path of actionDataPaths) {
            for (let requiredPath of requiredDataPaths) {
                if (path.startsWith(requiredPath)) {
                    missingPaths = missingPaths.filter(item => item !== requiredPath)
                }
            }
            
        }

        console.log(missingPaths)
            
        if (missingPaths.length > 0) {

            let identifier = action.action

            let regex = `"action": "${identifier}"`
            let findRegex = new RegExp(regex, "gim")
           
            console.log(findRegex)

            let line = this.line
            let col = this.col

            findOccurrences(findRegex, this.appJSONContent).forEach(result => {
                line = result.lineNumber
                col = result.column
            }
            );
            

            missingPaths.map(missingPath => {
                this.col++
                col++
                let newMessage = validationMessage(`${this.dirName}.json`, line, col, "warning", `action ${action.action} missing required data path ${missingPath}`)
                this.output.push(newMessage)
            })
        }
     
    }

}

export function validateApp(dirPath: string) {

    let appValidator = new AppValidator(dirPath)
    if (!appValidator.containsApp()) {
        return false
    }
    let output = appValidator.validate()
    return output.join("\r\n")
}


function lineNumberByIndex(index: any, string: any) {
    const re = /^[\S\s]/gm;
    let line = 0,
      match;
    let lastRowIndex = 0;
    while ((match = re.exec(string))) {
      if (match.index > index) break;
      lastRowIndex = match.index;
      line++;
    }
    return [Math.max(line - 1, 0), lastRowIndex];
  }
  
const findOccurrences = (needle: any, haystack: any) => {
    let match;
    const result = [];
    while ((match = needle.exec(haystack))) {
      const pos = lineNumberByIndex(needle.lastIndex, haystack);
      result.push({
        match,
        lineNumber: pos[0],
        column: needle.lastIndex - pos[1] - match[0].length
      });
    }
    return result;
};