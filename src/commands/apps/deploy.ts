import path = require('path')
import * as vscode from 'vscode'
import * as os from 'os'
import * as tar from 'tar'
import * as fs from 'fs'
import ignore from 'ignore'

import { getClientForActiveEnvironment } from '../../soar/client'
import { SoarApp } from '../../soar/models'

export async function installConnector(context: vscode.ExtensionContext, actionContext: any, outputChannel: vscode.OutputChannel) {
    let client = await getClientForActiveEnvironment(context)

    let connFile = actionContext.path
    let appFolder = path.dirname(connFile)

    if (!directoryContainsApp(appFolder)) {
        vscode.window.showErrorMessage("Could not find SOAR App in selected folder")
        return
    }

    let tmpDir = os.tmpdir()
    let outPath = tmpDir + "/tmpapp.tgz"

    let packageDispose = vscode.window.setStatusBarMessage("$(loading~spin) Packaging App...")
    await packageApp(appFolder, outPath)
    packageDispose.dispose()

    let uploadDispose = vscode.window.setStatusBarMessage("$(loading~spin) Uploading App...")
    const appFile = fs.readFileSync(outPath, { encoding: 'base64' })
    try {
        let res = await client.installApp(appFile)
        outputChannel.appendLine(JSON.stringify(res.data))
        uploadDispose.dispose()
        vscode.window.setStatusBarMessage("$(pass-filled) Successfully Uploaded App", 3000)
        console.log(res)
    } catch (error) {
        vscode.window.showErrorMessage("Failed to upload and install app")
        uploadDispose.dispose()
    }
}

export async function installFolder(context: vscode.ExtensionContext, actionContext: any, outputChannel: vscode.OutputChannel) {
    let client = await getClientForActiveEnvironment(context)
    let appFolder = actionContext.path

    let tmpDir = os.tmpdir()
    let outPath = tmpDir + "/tmpapp.tgz"


    if (!directoryContainsApp(appFolder)) {
        vscode.window.showErrorMessage("Could not find SOAR App in selected folder")
        return
    }
    let packageDispose = vscode.window.setStatusBarMessage("$(loading~spin) Packaging App...")

    await packageApp(appFolder, outPath)
    packageDispose.dispose()
    let uploadDispose = vscode.window.setStatusBarMessage("$(loading~spin) Uploading App...")

    const appFile = fs.readFileSync(outPath, { encoding: 'base64' })
    try {
        let res = await client.installApp(appFile)
        outputChannel.appendLine(JSON.stringify(res.data))
        uploadDispose.dispose()
        vscode.window.setStatusBarMessage("$(pass-filled) Successfully Uploaded App", 3000)
        console.log(res)
    } catch (error) {
        outputChannel.appendLine(JSON.stringify(error))
        outputChannel.show()
        vscode.window.showErrorMessage("Failed to upload and install app")
        uploadDispose.dispose()
    }
}


export async function packageApp(appPath: string, outPath: string) {
    let excludeFilesPath = path.join(appPath, 'exclude_files.txt')

    let excludedFilePatterns: string[] = []
    if (fs.existsSync(excludeFilesPath)) {
        excludedFilePatterns = fs.readFileSync(excludeFilesPath).toString().replace(/\r\n/g, '\n').split('\n');
    }

    const filterFiles = (filepath: any, entry: any) => {
        filepath = filepath.substring(filepath.indexOf('/') + 1)
        if (excludedFilePatterns) {
            const ig = ignore().add(excludedFilePatterns)
            console.log(ig.ignores(filepath), filepath)
            if (ig.ignores(filepath)) {
                return false
            }
        }

        if (filepath.includes("venv") || filepath.includes("__pycache__") || filepath.includes(".git") || filepath.includes(".mypy_cache") || filepath.includes(".DS_Store") || filepath.includes("./.pytest_cache") || filepath.includes(".vscode")) {
            return false
        }
        return true
    }

    let base = path.basename(appPath)
    let result = await tar.create({ file: outPath, gzip: true, cwd: path.join(appPath, "../"), filter: filterFiles }, [base])

    console.log(`Packaging app located in: ${outPath}\r\n`)

    return outPath
}

export function directoryContainsApp(dirPath: string) {
    // This function heuristically determines whether a given folder contains a SOAR app, mainly based on the insight that there needs to be a metadata file named after the folder.
    let dirName = path.basename(dirPath)

    // Check whether there is a metadata file
    let metadataJSON = path.join(dirPath, `${dirName}.json`)
    if (!fs.existsSync(metadataJSON)) {
        return false
    }

    var appMetadata = JSON.parse(fs.readFileSync(metadataJSON, 'utf-8'))
    return looksLikeAppJSON(appMetadata)
}

export function looksLikeAppJSON(candidate: Object) {
    let keys = ['appid', 'name', 'description', 'publisher', 'package_name', 'type',
    'license', 'main_module', 'app_version', 'product_vendor',
    'product_name', 'product_version_regex', 'min_phantom_version', 'logo', 'configuration', 'actions']

    if (!keys.every(key => candidate.hasOwnProperty(key))) {
        return false
    }

    return true
}

export function validateAction(action: any) {

}

export function validateApp(dirPath: string) {
    let output = []

    let dirName = path.basename(dirPath)


    let metadataJSON = path.join(dirPath, `${dirName}.json`)
    if (!fs.existsSync(metadataJSON)) {
        return false
    }

    output.push("Validating App JSON")
    output.push(`Working on ${metadataJSON}`)

    if (looksLikeAppJSON(metadataJSON)) {
        output.push("Looks like an App JSON")
    }
    output.push("Processing App JSON")

    var appMetadata = JSON.parse(fs.readFileSync(metadataJSON, 'utf-8'))
    
    output.push("Processing actions")

    for (let action of appMetadata.actions) {
        output.push(`========== ${action.action} (${action.identifier}) ===========`)

        let actionDataPaths = action.output.map((out: any) => out.data_path).sort()
        let requiredDataPaths = ['action_result.data', 'action_result.summary', 'action_result.status', 'action_result.message']


        var missingPaths = requiredDataPaths.filter(item => actionDataPaths.indexOf(item) == -1);
        if (missingPaths.length > 0) {
            output.push("Following required data paths not in output list")
            output.push(missingPaths.map(entry => "\t" + entry).join("\n\r"))
        }


    }

    return output.join("\r\n")
}