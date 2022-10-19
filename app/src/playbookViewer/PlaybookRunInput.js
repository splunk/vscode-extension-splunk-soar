import { VSCodeButton, VSCodeProgressRing, VSCodeTextField } from "@vscode/webview-ui-toolkit/react";
import React, { useContext, useState } from "react";
import { VscCheck } from "react-icons/vsc";
import { ExtensionContext } from "./context";

export default function PlaybookRunInput({playbookRunInfo}) {

    const vscode = useContext(ExtensionContext)
    const [playbookRunId, setPlaybookRunId] = useState('')
    const [playbookRunLoading, setPlaybookRunLoading] = useState(false)
    const [playbookRunLoaded, setPlaybookRunLoaded] = useState(false)

    if (Object.keys(playbookRunInfo).length > 0 && playbookRunLoading) {
        setPlaybookRunLoading(false)
        setPlaybookRunLoaded(true)

    }

    const handleChange = function (ev) {
        setPlaybookRunId(ev.target.value)
    }

    const handleClick = function (ev) {
        vscode.postMessage({ "command": "request_playbook_run", "data": { "playbook_run_id": playbookRunId } })
        setPlaybookRunLoading(true) 
    }
    return (
        <div style={{ "backgroundColor": "#282c34", "paddingLeft": "10px", "paddingRight": "10px", "zIndex": 10, "left": 0, "top": 0, "border": "5px solid #353b45", "position": "absolute" }}>
            <h3>Inspect Playbook Run</h3>
            <VSCodeTextField value={playbookRunId} onChange={handleChange}>Playbook Run ID</VSCodeTextField>
            <p>
                <VSCodeButton onClick={handleClick}>Search</VSCodeButton>
                {playbookRunLoading ? <VSCodeProgressRing style={{"float": "right"}}></VSCodeProgressRing>: <></>}
                {playbookRunLoaded ? <VscCheck style={{float: "right"}}></VscCheck>: <></>}
            </p>
        </div>
    )
}