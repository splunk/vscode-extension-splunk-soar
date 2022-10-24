import { VSCodeBadge, VSCodePanels, VSCodePanelTab, VSCodePanelView, VSCodeTextArea, VSCodeTextField } from "@vscode/webview-ui-toolkit/react"
import React from "react"

export default function DataPanel({ node, playbookRunInfo }) {

    console.log(node)
    if (Object.keys(node).length === 0) {
        return (
            <div></div>
        )
    }
    let action = ""
    let appRuns = []
    let functionName = node.data.functionName

    if (Object.keys(playbookRunInfo).length > 0) {
        action = playbookRunInfo["playbookRunActions"].find(el => el.name === functionName)
        
        if (action) {

        const nodeGuid = action.node_guid


        playbookRunInfo["playbookRunResults"].forEach((appRun) => {
            if (appRun.node_guid === nodeGuid) {
                appRuns.push(appRun)
            }
        })

        }


    }


    return (
        <div style={{ "padding": "10px", "maxHeight": "400px", "height": "400px", "minWidth": "300px", "overflow": "hidden", width: "25%", "backgroundColor": "#282c34", "zIndex": 4, "right": 0, "top": 0, "border": "5px solid #353b45", "position": "absolute" }}>
            
            <h3><VSCodeBadge style={{"paddingRight": "10px"}}>{node.type}</VSCodeBadge>{node.data.action || ''}</h3>
            <VSCodePanels activeindicator={false} style={{ "height": "100%", "overflow": "hidden" }}>
                <VSCodePanelTab style={{ "height": "30px" }} id={`properties${node.id}`}>Properties</VSCodePanelTab>

                {action !== "" && action != undefined ? <VSCodePanelTab style={{ "height": "30px" }} id={`playbook_run${node.id}`}>Playbook Run</VSCodePanelTab>: <></>}
                {action !== "" && action != undefined ? <VSCodePanelTab style={{ "height": "30px" }} id={`playbook_app_runs${node.id}`}>App Runs</VSCodePanelTab>: <></>}

                <VSCodePanelView id={`properties${node.id}`} style={{ "height": "370px", "overflow": "scroll" }}>
                    <div style={{ "display": "flex", "width": "100%", "flexDirection": "column" }}>
                        <pre><code>{JSON.stringify(node, null, 2)}</code></pre>
                    </div>
                </VSCodePanelView>
                <VSCodePanelView id={`playbook_run${node.id}`} style={{ "height": "370px", "overflow": "scroll" }}>
                    <div style={{ "display": "flex", "width": "100%", "flexDirection": "column" }}>
                        <h4>Action Run: {action.id}</h4>

                        <table>
                            <tbody>
                            <tr>
                                <td>Status</td><td>{action.status}</td>
                            </tr>
                            <tr>
                                <td>Create Time</td><td>{action._pretty_create_time}</td>
                            </tr>
                            <tr>
                                <td>Close Time</td><td>{action._pretty_close_time}</td>
                            </tr>
                            </tbody>
                        </table>
                        <pre><code>{JSON.stringify(action, null, 2)}</code></pre>
                        <h4>App Runs</h4>
                        <pre><code>{JSON.stringify(appRuns, null, 2)}</code></pre>
                    </div>
                </VSCodePanelView>
                <VSCodePanelView id={`playbook_app_runs${node.id}`} style={{ "height": "370px", "overflow": "scroll" }}>
                    <div style={{ "display": "flex", "width": "100%", "flexDirection": "column" }}>
                        <h4>App Runs <VSCodeBadge>{appRuns.length}</VSCodeBadge></h4>
                        <pre><code>{JSON.stringify(appRuns, null, 2)}</code></pre>
                    </div>
                </VSCodePanelView>

            </VSCodePanels>
        </div>
    )
}