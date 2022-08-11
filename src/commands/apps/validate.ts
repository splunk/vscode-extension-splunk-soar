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
    line: number = 1
    col: number = 1
    appJSON: any = null
    output: string[] = []
    metaFileLocation: string

    constructor(appPath: string) {
        this.appPath = appPath
        let dirName = path.basename(this.appPath)
        this.metaFileLocation = path.join(this.appPath, `${dirName}.json`)
        if (!fs.existsSync(this.metaFileLocation)) {
            this.appJSON == null
        }
    
        this.appJSON = JSON.parse(fs.readFileSync(this.metaFileLocation, 'utf-8'))
    }

    containsApp() {
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

    incrementLine() {
        this.line++
        this.col = 1
    }

    _validateAction(action: any) {
        let actionDataPaths = action.output.map((out: any) => out.data_path).sort()
        let requiredDataPaths = ['action_result.data', 'action_result.summary', 'action_result.status', 'action_result.message']
        var missingPaths = requiredDataPaths.filter(item => actionDataPaths.indexOf(item) == -1);
        if (missingPaths.length > 0) {
            missingPaths.map(missingPath => {
                this.col++
                let newMessage = validationMessage(this.metaFileLocation, this.line, this.col, "warning", `action ${action.action} missing required data path ${missingPath}`)
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