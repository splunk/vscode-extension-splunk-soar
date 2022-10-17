import React from 'react'
import { VSCodeBadge, VSCodePanels, VSCodePanelTab, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'

export default function AppWizard() {


    return (
        <header>
            <h1>SOAR App Wizard <VSCodeBadge>experimental</VSCodeBadge></h1>
            <p>Bootstrap a new SOAR App and save it to a local directory.</p>
            <VSCodeTextField>Name</VSCodeTextField>

            <VSCodePanels>
                <VSCodePanelTab>Basic Information</VSCodePanelTab>
                <VSCodePanelTab>Configuration</VSCodePanelTab>

                <VSCodePanelTab>Actions</VSCodePanelTab>

            </VSCodePanels>
        </header>
    )
}