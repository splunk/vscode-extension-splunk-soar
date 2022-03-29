import * as vscode from 'vscode';
import * as https from 'https'; 
const axios = require('axios').default;
import { AxiosInstance, AxiosResponse } from 'axios';

export function getSoarInfo() {
	const config = vscode.workspace.getConfiguration();
	const server = config.get("authentication.server")
	const username = config.get("authentication.username")
	const password = config.get("authentication.password")
	const sslVerify = config.get("authentication.sslVerify")

	if (username === undefined || password === undefined) {
		return
	}
	
	if (sslVerify === false) {
		https.globalAgent.options.rejectUnauthorized = false
	}

	let instance: AxiosInstance = axios.create({
		baseURL: `${server}/rest/`,
		auth: {username: username, password: password}
	})

	console.log(server)
	instance.get("version").then((res: AxiosResponse) => {
		let {version} = res.data
		vscode.window.showInformationMessage(`Connected with SOAR Version: ${version}`)
	}).catch((err: any) => {
		console.error(err)
	})
}
