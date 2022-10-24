import path = require('path')
import * as vscode from 'vscode'
import * as os from 'os'
import * as tar from 'tar'
import * as fs from 'fs'
import ignore from 'ignore'
import { getClientForActiveEnvironment } from '../../soar/client'
import { directoryContainsApp, validateApp } from './validate'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { CustomBuildTaskTerminal, DeployTaskProvider } from '../../tasks/deployTaskProvider'


export async function installFromConnector(context: vscode.ExtensionContext, actionContext: any, outputChannel: vscode.OutputChannel) {
    let connFile = actionContext.path
    let appFolder = path.dirname(connFile)
    //installApp(context, outputChannel, appFolder)
    
    let definition = {
        type: DeployTaskProvider.CustomBuildScriptType,
    };


    let task = new vscode.Task(definition, vscode.TaskScope.Workspace, `connector install`,
    DeployTaskProvider.CustomBuildScriptType, new vscode.CustomExecution(async (): Promise<vscode.Pseudoterminal> => {
        return new CustomBuildTaskTerminal(appFolder, '.', undefined, context, outputChannel);
    }));

    task.problemMatchers = [
        "soarappproblem"
    ]
    await vscode.tasks.executeTask(task)
}

export async function installFromFolder(context: vscode.ExtensionContext, actionContext: any, outputChannel: vscode.OutputChannel) {
    let appFolder = actionContext.path

    let definition = {
        type: DeployTaskProvider.CustomBuildScriptType,
    };


    let task = new vscode.Task(definition, vscode.TaskScope.Workspace, `folder install`,
    DeployTaskProvider.CustomBuildScriptType, new vscode.CustomExecution(async (): Promise<vscode.Pseudoterminal> => {
        return new CustomBuildTaskTerminal(appFolder, '.', undefined, context, outputChannel);
    }));

    task.problemMatchers = [
        "soarappproblem"
    ]
    await vscode.tasks.executeTask(task)
}

export async function uploadApp(context: vscode.ExtensionContext, outputChannel: vscode.OutputChannel, appPath: string) {
    let client = await getClientForActiveEnvironment(context)

    const appFile = fs.readFileSync(appPath, { encoding: 'base64' })
    let res = await client.installApp(appFile)
    outputChannel.appendLine(JSON.stringify(res.data))
    vscode.window.setStatusBarMessage("$(pass-filled) Successfully Uploaded App", 3000)
    console.log(res)
    return res
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