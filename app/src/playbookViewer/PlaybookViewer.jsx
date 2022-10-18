import React, { useEffect, useState } from 'react'
import { VSCodeBadge } from '@vscode/webview-ui-toolkit/react'
import './PlaybookViewer.css'
import { Flow } from './Flow';

export default function PlaybookViewer() {

    const [playbook, setPlaybook] = useState({})

    useEffect(() => {
        window.addEventListener("message", (event) => {
            console.log(event)
            setPlaybook(event.data)
        });    
    })



    let content = JSON.stringify(playbook)

    if (content != "{}") {
        content = <Flow playbook={playbook}></Flow>
    }

    return (
        <>
        <header className='playbookViewer'>
            <h1>SOAR Playbook Viewer <VSCodeBadge>experimental</VSCodeBadge></h1>
        </header>
        <section style={{height: "95vh"}}>
            {content}
        </section>
        </>
    )
}