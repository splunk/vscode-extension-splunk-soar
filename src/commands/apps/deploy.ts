import path = require('path')
import * as vscode from 'vscode'
import * as os from 'os'
import * as tar from 'tar'
import * as fs from 'fs'
import ignore from 'ignore'

import { getClientForActiveEnvironment } from '../../soar/client'

export async function installConnector(context: vscode.ExtensionContext, actionContext: any) {
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
        uploadDispose.dispose()
        vscode.window.setStatusBarMessage("$(pass-filled) Successfully Uploaded App", 3000)
        console.log(res)
    } catch (error) {
        vscode.window.showErrorMessage("Failed to upload and install app")
        uploadDispose.dispose()
    }
}

export async function installFolder(context: vscode.ExtensionContext, actionContext: any) {
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
        uploadDispose.dispose()
        vscode.window.setStatusBarMessage("$(pass-filled) Successfully Uploaded App", 3000)
        console.log(res)
    } catch (error) {
        console.log(error)
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
    console.log(appMetadata)
    let keys = ["appid", "name", "logo", "logo_dark", "main_module", "package_name"]
    if (!keys.every(key => appMetadata.hasOwnProperty(key))) {
        return false
    }

    return true
}