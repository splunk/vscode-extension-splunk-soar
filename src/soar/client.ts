import { AxiosInstance, AxiosResponse } from "axios";
import * as https from 'https'; 
import { getHeapStatistics } from "v8";
import * as vscode from 'vscode';
const axios = require('axios').default;

export class SoarClient {
    server: string
    username: string
    password: string
    sslVerify: boolean
    httpClient: AxiosInstance

    constructor(server: string, username: string, password: string, sslVerify: boolean) {
        this.server = server
        this.username = username
        this.password = password
        this.sslVerify = sslVerify

        this.httpClient = axios.create({
            baseURL: `${server}/rest/`,
            auth: {username: username, password: password}
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
        return await this.httpClient.get("version")
    }

    listApps = async () => {
        return await this.httpClient.get("app", {params: {"page_size": 500, "pretty": true, "sort": "name"}})
    }

    listAppAssets = async (appId: string) => {
        return await this.httpClient.get("asset", {params: {"pretty": true, "page_size": 0, "_filter_app": `"${appId}"`}})
    }

    appContent = async (appId: string) => {
        return await this.httpClient.get(`app/${appId}?json`)
    }

    installApp = async(appContent: string) => {
        return await this.httpClient.post("app", {"app": appContent})
    }

    getAsset = async (assetId: string) => {
        return await this.httpClient.get(`asset/${assetId}`)
    }

    getApp = async (appId: string) => {
        return await this.httpClient.get(`app/${appId}`, {params: {"pretty": true}})
    }

    triggerAction = async (actionName:string, container_id: string, assetName: string, appId: string, parameters) => {
        return await this.httpClient.post(`action_run`, 
        {
            "action": actionName,
            "container_id": parseInt(container_id),
            "name": actionName,
            "targets": [{
                "assets": [
                    assetName
                ],
                "parameters": parameters,
                "app_id": appId
            }]
        })
    }

    getActionRun = async (actionRunId: string) => {
        return await this.httpClient.get(`action_run/${actionRunId}`)
    }

    getActionRunAppRuns = async (actionRunId: string) => {
        return await this.httpClient.get(`action_run/${actionRunId}/app_runs`)
    }

    getAppRun = async (appRunId: string) => {
        return await this.httpClient.get(`app_run/${appRunId}`)
    }

    getContainer = async (containerId: string) => {
        return await this.httpClient.get(`container/${containerId}`)
    }
}

export function getConfiguredClient(): SoarClient  {
    const config = vscode.workspace.getConfiguration()
	const server: string = config.get<string>("authentication.server", '')
	const username: string = config.get<string>("authentication.username", '')
	const password: string = config.get<string>("authentication.password", '')
	const sslVerify: boolean = config.get<boolean>("authentication.sslVerify", true)

    return new SoarClient(server, username, password, sslVerify);
}