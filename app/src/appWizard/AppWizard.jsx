import React, { useContext, useReducer } from 'react'
import { VscodeBadge, VscodeButton, VscodeOption, VscodeSingleSelect, VscodeTabHeader, VscodeTabPanel, VscodeTabs, VscodeTextarea, VscodeTextfield } from '@vscode-elements/react-elements'
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

    const submitApp = function() {
        console.log(appValues)
        vscode.postMessage({"command": "createApp", "app": appValues})
    }

    return (
        <header>
            <h1>SOAR App Wizard <VscodeBadge>experimental</VscodeBadge></h1>
            <p>Bootstrap a new SOAR App and save it to a local directory.</p>

            <VscodeTabs>

                <VscodeTabHeader slot='header'>Basic Information</VscodeTabHeader>

                <VscodeTabPanel>
                    <section style={{"display": "flex", "flexDirection": "column", "width": "80%", "gap": "10px"}}>
                        <label htmlFor='appName'>App Name (Display Name)</label>
                        <VscodeTextfield id='appName' onChange={handleChange} name='appName' value={appName}></VscodeTextfield>
                        <label htmlFor='appShortName'>App Shortname (File Prefix)</label>
                        <VscodeTextfield id='appShortName' onChange={handleChange} name='appShortName' value={appShortName}></VscodeTextfield>

                        <label htmlFor='appDescription'>App Description</label>
                        <VscodeTextarea id='appDescription' onChange={handleChange} name='appDescription' value={appDescription}></VscodeTextarea>
                        <label htmlFor='appPublisher'>App Publisher</label>
                        <VscodeTextfield id='appPublisher' onChange={handleChange} name='appPublisher' value={appPublisher} placeholder='Splunk Community'></VscodeTextfield>

                        <label htmlFor='productName'>Product Name</label>
                        <VscodeTextfield id='productName' onChange={handleChange} name='productName' value={productName}></VscodeTextfield>
                        <label htmlFor='productVendor'>Product Vendor</label>
                        <VscodeTextfield id='productVendor' onChange={handleChange} name='productVendor' value={productVendor}></VscodeTextfield>
                        <label htmlFor='appType'>App Type</label>
                        <VscodeSingleSelect id='appType' value={appType} onChange={handleChange} name='appType'>
                            <VscodeOption value='information'>
                                information
                            </VscodeOption>
                            <VscodeOption value='ticketing'>
                                ticketing
                            </VscodeOption>
                        </VscodeSingleSelect>
                    </section>

                </VscodeTabPanel>

            </VscodeTabs>
            <VscodeButton onClick={submitApp}>Create</VscodeButton>
        </header>
    )
}
