import React from 'react'
import { VSCodeBadge, VSCodeButton, VSCodeDropdown, VSCodePanels, VSCodePanelTab, VSCodePanelView, VSCodeTextArea, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'

export default function AppWizard() {

    return (
        <header>
            <h1>SOAR App Wizard <VSCodeBadge>experimental</VSCodeBadge></h1>
            <p>Bootstrap a new SOAR App and save it to a local directory.</p>

            <VSCodePanels>

                <VSCodePanelTab id='view-1'>Basic Information</VSCodePanelTab>

                <VSCodePanelView id='view-1'>
                    <section style={{"display": "flex", "flexDirection": "column", "width": "100%"}}>
                        <VSCodeTextField>App Name (Display Name)</VSCodeTextField>
                        <VSCodeTextField>App Shortname (File Prefix)</VSCodeTextField>

                        <VSCodeTextArea>App Description</VSCodeTextArea>
                        <VSCodeTextField placeholder='Splunk Community'>App Publisher</VSCodeTextField>
                        <VSCodeTextField placeholder='Copyright (c) Splunk Community, 2022'>App License</VSCodeTextField> 

                        <VSCodeTextField>Product Name</VSCodeTextField>
                        <VSCodeTextField>Product Vendor</VSCodeTextField>
                        <VSCodeTextField placeholder='.*'>Product Version Regex</VSCodeTextField>
                        <VSCodeTextField placeholder='5.3.0'>Minimum SOAR Version</VSCodeTextField>

                    </section>

                </VSCodePanelView>

            </VSCodePanels>
            <VSCodeButton>Create</VSCodeButton>
        </header>
    )
}