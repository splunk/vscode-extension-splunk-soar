import { AxiosInstance } from "axios";
import * as https from 'https'; 
import * as vscode from 'vscode';
import { getActiveEnvironment, getEnvironment } from "../commands/environments/environments";
import { PlaybookRun } from "../views/playbookRun";
const axios = require('axios').default;
import * as semver from 'semver'

import * as models from './models'

export class SoarClient {
    server: string
    username: string
    password: string
    sslVerify: boolean
    httpClient: AxiosInstance
    fileClient: AxiosInstance

    constructor(server: string, username: string, password: string, sslVerify: boolean) {
        this.server = server
        this.username = username
        this.password = password
        this.sslVerify = sslVerify

        const axiosConfig = {
            baseURL: `${server}/rest/`,
            auth: {username: username, password: password},
        }

        this.httpClient = axios.create(axiosConfig)

        this.fileClient = axios.create({
            timeout: 100000,
            maxBodyLength: 200000000,
            ...axiosConfig
        })
        
        if (!sslVerify) {
            this.httpClient.defaults.httpsAgent = new https.Agent({
                rejectUnauthorized: false
            })
            // For some reason, the httpsClient does not work - putting this here as an ugly workaround
            https.globalAgent.options.rejectUnauthorized = false;
        }
    }

    version = async () => {
        return await this.httpClient.get<models.SoarVersion>("version")
    }

    listApps = async () => {
        return await this.httpClient.get<models.SoarCollection<models.SoarApp>>("app", {params: {"page_size": 0, "pretty": true, "sort": "name"}})
    }

    listAppAssets = async (appId: string) => {
        return await this.httpClient.get<models.SoarCollection<models.SoarAsset>>("asset", {params: {"pretty": true, "page_size": 0, "_filter_app": `"${appId}"`}})
    }

    listActionRuns = async() => {
        return await this.httpClient.get<models.SoarCollection<models.SoarActionRun>>("action_run", {params: {"pretty": true, "page_size": 100, "sort": "create_time", "order": "desc"}})
    }

    listUserActionRuns = async() => {
        return await this.httpClient.get<models.SoarCollection<models.SoarActionRun>>("action_run", {params: {"pretty": true, "page_size": 100, "sort": "create_time", "order": "desc", "_filter_owner__username": `'${this.username}'`}})
    }

    getLastUserActionRun = async() => {
        return await this.httpClient.get<models.SoarCollection<models.SoarActionRun>>("action_run", {params: {"pretty": true, "page_size": 1, "sort": "create_time", "order": "desc", "_filter_owner__username": `'${this.username}'`}})
    }

    listPlaybookRuns = async() => {
        return await this.httpClient.get<models.SoarCollection<models.SoarPlaybookRun>>("playbook_run", {params: {"pretty": true, "page_size": 100, "sort": "start_time", "order": "desc"}})
    }

    listUserPlaybookRuns = async() => {
        return await this.httpClient.get<models.SoarCollection<models.SoarPlaybookRun>>("playbook_run", {params: {"pretty": true, "page_size": 0, "sort": "start_time", "order": "desc", "_filter_owner__username": `'${this.username}'`}})
    }

    appContent = async (appId: string) => {
        return await this.httpClient.get<models.SoarAppContent>(`app/${appId}?json`)
    }

    installApp = async(appContent: string) => {
        return await this.fileClient.post("app", {"app": appContent})
    }

    downloadApp = async(appId: string) => {
        return await this.httpClient.post(`app_download/${appId}`,null , {'responseType': "stream"})
    }

    getAsset = async (assetId: string) => {
        return await this.httpClient.get<models.SoarAsset>(`asset/${assetId}`, {params: {"pretty": true, "_special_app_info": true}})
    }

    getApp = async (appId: string) => {
        return await this.httpClient.get<models.SoarApp>(`app/${appId}`, {params: {"pretty": true}})
    }

    getAppActions = async (appId: string) => {
        return await this.httpClient.get<models.SoarCollection<models.SoarAction>>(`app/${appId}/actions`, {params: {"pretty": true, "page_size": 0}})
    }

    getAppByAppid = async (appId: string) => {
    return await this.httpClient.get(`app`, {params: {"pretty": true, "_filter_appid": `"${appId}"`}})
    }

    getPlaybook = async (playbookId: string) => {
        return await this.httpClient.get(`playbook/${playbookId}`, {params: {"pretty": true}})
    }

    setPlaybookActiveState = async (playbookId: string, activeState: boolean, cancelRuns?: boolean) => {
        let payload: any = {"active": activeState}

        if (cancelRuns !== undefined) {
            payload["cancel_runs"] = cancelRuns
        }

        return await this.httpClient.post(`playbook/${playbookId}`, payload)
        
    }

    listPlaybooks = async () => {
        return await this.httpClient.get("playbook", {params: {"page_size": 500, "pretty": true, "sort": "name"}})
    }

    downloadPlaybook = async (playbookId:string) => {
        return await this.fileClient.get(`playbook/${playbookId}/export`, {'responseType': "stream"})
    }

    runPlaybook = async (playbookId: number, scope: string, containerId: string) => {
        if (scope.startsWith("[")) {
            scope = JSON.parse(scope)
        }
        return await this.httpClient.post("playbook_run", {"run": true, "container_id": containerId, "scope": scope, "playbook_id": playbookId})
    }

    runInputPlaybook = async (playbookId: number, scope: string, containerId: string, inputs: Object) => {
        if (scope.startsWith("[")) {
            scope = JSON.parse(scope)
        }
        return await this.httpClient.post("playbook_run", {"run": true, "container_id": containerId, "scope": scope, "playbook_id": playbookId, "inputs": inputs})
    }

    getPlaybookRun = async (playbookRunId: string) => {
        return await this.httpClient.get<models.SoarPlaybookRun>(`playbook_run/${playbookRunId}`)
    }

    getPlaybookRunLog = async (playbookRunId: string) => {
        return await this.httpClient.get(`playbook_run/${playbookRunId}/log?page_size=500`) 
    }

    getAppRunLog =async (appRunId: string) => {

        let versionResponse = await this.version()
        let {version} = versionResponse.data
        let minVersionRequired = '6.1.0'

        function getPosition(string: any, subString: any, index: any) {
            return string.split(subString, index).join(subString).length;
        }
        const slicedVersion = version.slice(0, getPosition(version, ".", 3))

        if (!semver.gte(slicedVersion, minVersionRequired)) {
            throw new Error(`Minimum SOAR version required: ${minVersionRequired}`)
        }

        return await this.httpClient.get(`app_run/${appRunId}/log?page_size=500`)  
    }

    listUserPlaybooks = async () => {
        return await this.httpClient.get("playbook", {params: {"pretty": true, "page_size": 0, "sort": "create_time", "order": "desc", "_filter_latest_editor__username": `'${this.username}'`}})
    }

    triggerActionTargets = async (actionName:string, container_id: string,  targets: any) => {
        return await this.httpClient.post(`action_run`, 
        {
            "action": actionName,
            "container_id": parseInt(container_id),
            "name": actionName,
            "targets": targets
        })
    }

    triggerAction = async (actionName:string, container_id: string, assetName: string, appId: string, parameters: any) => {

        let targets = [{
                "assets": [
                    assetName
                ],
                "parameters": parameters,
                "app_id": appId
        }]

       return await this.triggerActionTargets(actionName, container_id, targets)    
    }

    cancelActionRun = async (actionRunId: string) => {
        return await this.httpClient.post(`action_run/${actionRunId}`, {"cancel": true})
    }

    cancelPlaybookRun = async (playbookRunId: string) => {
        return await this.httpClient.post(`playbook_run/${playbookRunId}`, {"cancel": true})
    }

    getActionRun = async (actionRunId: string) => {
        return await this.httpClient.get(`action_run/${actionRunId}?pretty=true`)
    }

    getActionRunAppRuns = async (actionRunId: string) => {
        return await this.httpClient.get<models.SoarCollection<models.SoarAppRun>>(`action_run/${actionRunId}/app_runs?pretty=true&page_size=0`)
    }

    getAppRun = async (appRunId: string) => {
        return await this.httpClient.get(`app_run/${appRunId}?pretty=true`)
    }

    getContainer = async (containerId: string) => {
        return await this.httpClient.get(`container/${containerId}?pretty=true`)
    }

    deleteContainer = async (containerId: string) => {
        return await this.httpClient.delete(`container/${containerId}`)
    }

    getArtifact = async (artifactId: string) => {
        return await this.httpClient.get(`artifact/${artifactId}?pretty=true`)
    }

    deleteArtifact = async (artifactId: string) => {
        return await this.httpClient.delete(`artifact/${artifactId}`)
    }

    getSystemSettings = async () => {
        return await this.httpClient.get(`system_settings`)
    }

    getContainerArtifacts = async (containerId: string) => {
        return await this.httpClient.get(`container/${containerId}/artifacts?page_size=100`)
    }

    getContainerAttachments = async (containerId: string) => {
        return await this.httpClient.get(`container/${containerId}/attachments?pretty=true&page_size=100`)
    }

    getContainerNotes = async (containerId: string) => {
        return await this.httpClient.get(`container/${containerId}/notes?pretty=true&page_size=100`)
    }

    getNote = async (noteId: string) => {
        return await this.httpClient.get(`note/${noteId}?pretty=true`)
    }

    getVaultDocument = async (docId: string) => {
        return await this.httpClient.get(`vault_document/${docId}?pretty=true`)
    }

    listScm = async () => {
        return await this.httpClient.get(`scm?pretty=true&page_size=0`)
    }

    syncScm = async (scmId: string, force: boolean = false) => {
        return await this.httpClient.post(`scm/${scmId}`, {"pull": true, "force": force})
    }

    createContainer = async (label: string, name: string) => {
        return await this.httpClient.post(`container`, {label, name})
    }

    getContainerOptions = async () => {
        return await this.httpClient.get(`container_options`)
    }

    listPlaybookRunActions = async(playbookRunId: string) => {
        return await this.httpClient.get<models.SoarCollection<any>>(`playbook_run/${playbookRunId}/actions`, {params: {"pretty": true, "page_size": 0}})
    }
}

export async function getClientForActiveEnvironment(context: vscode.ExtensionContext): Promise<SoarClient> {

    let {url, username, sslVerify, password} = await getActiveEnvironment(context)

    return new SoarClient(url, username, password, sslVerify)
}

export async function getClientForEnvironment(context: vscode.ExtensionContext, envKey: string): Promise<SoarClient> {

    let {url, username, sslVerify, password} = await getEnvironment(context, envKey)

    return new SoarClient(url, username, password, sslVerify)
}