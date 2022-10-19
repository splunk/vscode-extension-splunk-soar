import { VSCodePanels, VSCodePanelTab, VSCodePanelView, VSCodeTextArea, VSCodeTextField } from "@vscode/webview-ui-toolkit/react"
import React from "react"

export default function DataPanel({ node, playbookRunInfo }) {

    console.log(node)
    if (Object.keys(node).length === 0) {
        return (
            <div></div>
        )
    }
    let action = ""
    let result = []
    let functionName = node.data.functionName

    if (Object.keys(playbookRunInfo).length > 0) {
        action = playbookRunInfo["playbookRunActions"].find(el => el.name === functionName)
        
        if (action) {

        const nodeGuid = action.node_guid


        playbookRunInfo["playbookRunResults"].forEach((appRun) => {
            if (appRun.node_guid === nodeGuid) {
                result.push(appRun)
            }
        })

        }


    }


    return (
        <div style={{ "padding": "10px", "maxHeight": "400px", "height": "400px", "minWidth": "300px", "overflow": "hidden", width: "25%", "backgroundColor": "#282c34", "zIndex": 4, "right": 0, "top": 0, "border": "5px solid #353b45", "position": "absolute" }}>

            <VSCodePanels activeindicator={false} style={{ "height": "100%", "overflow": "hidden" }}>
                <VSCodePanelTab style={{ "height": "30px" }} id={`properties${node.id}`}>Properties</VSCodePanelTab>

                {action !== "" && action != undefined ? <VSCodePanelTab style={{ "height": "30px" }} id={`playbook_run${node.id}`}>Playbook Run</VSCodePanelTab>: <></>}

                <VSCodePanelView id={`properties${node.id}`} style={{ "height": "370px", "overflow": "scroll" }}>
                    <div style={{ "display": "flex", "width": "100%", "flexDirection": "column" }}>
                        <pre><code>{JSON.stringify(node, null, 2)}</code></pre>
                    </div>
                </VSCodePanelView>
                <VSCodePanelView id={`playbook_run${node.id}`} style={{ "height": "370px", "overflow": "scroll" }}>
                    <div style={{ "display": "flex", "width": "100%", "flexDirection": "column" }}>
                        <h3>Action Run</h3>
                        <pre><code>{JSON.stringify(action, null, 2)}</code></pre>
                        <h3>App Runs</h3>
                        <pre><code>{JSON.stringify(result, null, 2)}</code></pre>
                    </div>
                </VSCodePanelView>
            </VSCodePanels>
        </div>
    )
}