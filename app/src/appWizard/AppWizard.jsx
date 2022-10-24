import React, { useContext, useReducer, useState } from 'react'
import { VSCodeBadge, VSCodeButton, VSCodeDropdown, VSCodeOption, VSCodePanels, VSCodePanelTab, VSCodePanelView, VSCodeTextArea, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'
import { ExtensionContext } from './context'

export default function AppWizard() {

    const vscode = useContext(ExtensionContext)

    const initialValues = {
        appName: '',
        appShortName: '',
        appDescription: '',
        productVendor: '',
        productName: '',
        appPublisher: '',
        appType: ''
    }

    const [appValues, setAppValues] = useReducer(
        (currentValues, newValues) => ({...currentValues, ...newValues}), initialValues
    )

    const {appName, appShortName, appDescription, appType, appPublisher, productName, productVendor} = appValues

    const handleChange = function(event) {
        const {name, value} = event.target
        setAppValues({ [name]: value})
    }

    const submitApp = function(event) {
        console.log(appValues)
        vscode.postMessage({"command": "createApp", "app": appValues})
    }

    return (
        <header>
            <h1>SOAR App Wizard <VSCodeBadge>experimental</VSCodeBadge></h1>
            <p>Bootstrap a new SOAR App and save it to a local directory.</p>

            <VSCodePanels>

                <VSCodePanelTab id='view-1'>Basic Information</VSCodePanelTab>

                <VSCodePanelView id='view-1'>
                    <section style={{"display": "flex", "flexDirection": "column", "width": "80%", "gap": "10px"}}>
                        <VSCodeTextField onChange={handleChange} name='appName' value={appName}>App Name (Display Name)</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='appShortName' value={appShortName}>App Shortname (File Prefix)</VSCodeTextField>

                        <VSCodeTextArea onChange={handleChange} name='appDescription' value={appDescription}>App Description</VSCodeTextArea>
                        <VSCodeTextField onChange={handleChange} name='appPublisher' value={appPublisher} placeholder='Splunk Community'>App Publisher</VSCodeTextField>

                        <VSCodeTextField onChange={handleChange} name='productName' value={productName}>Product Name</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='productVendor' value={productVendor}>Product Vendor</VSCodeTextField>
                        <label for='appType'>App Type</label>
                        <VSCodeDropdown position='below' value={appType} onChange={handleChange} name='appType'>
                            <VSCodeOption>
                                information
                            </VSCodeOption>
                            <VSCodeOption>
                                ticketing
                            </VSCodeOption>
                        </VSCodeDropdown>
                    </section>

                </VSCodePanelView>

            </VSCodePanels>
            <VSCodeButton onClick={submitApp}>Create</VSCodeButton>
        </header>
    )
}