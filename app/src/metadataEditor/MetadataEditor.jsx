import React, { useContext, useReducer, useEffect, useState } from 'react'
import { VSCodeBadge, VSCodeButton, VSCodeCheckbox, VSCodeDropdown, VSCodeOption, VSCodePanels, VSCodePanelTab, VSCodePanelView, VSCodeTextArea, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'
import { ExtensionContext } from './context'

export default function MetadataEditor() {
    const vscode = useContext(ExtensionContext)
    
    const [sendUpdate, setSendUpdate] = useState(false)

    useEffect(() => {
        window.addEventListener("message", (event) => {
            handleUpdateFromExtension(event)
        });    
    }, [])


    const initialValues = {
        configuration: {}
    }

    const [appValues, setAppValues] = useReducer(
        (currentValues, newValues) => ({...currentValues, ...newValues}), initialValues
    )


    const handleUpdateFromExtension = function(messageEvent) {
        let textContents = JSON.parse(messageEvent.data.text)
        setAppValues(textContents)
    }

    const {name, appid, description, product_name, product_vendor, product_version_regex, logo, logo_dark, python_version, app_version, publisher, type, license, package_name, main_module} = appValues

    const handleChange = function(event) {
        const {name, value} = event.target
        setAppValues({ [name]: value})
        setSendUpdate(true)
    }

    if (sendUpdate) {
        vscode.postMessage({"type": "update", "data": appValues}) 
        setSendUpdate(false)
    }

    return (
        <header>
            <h1>Metadata Editor<VSCodeBadge>experimental</VSCodeBadge></h1>

            <VSCodePanels>

                <VSCodePanelTab id='view-1'>Basic Information</VSCodePanelTab>
                <VSCodePanelTab id='view-2'>Asset Configuration</VSCodePanelTab>

                <VSCodePanelView id='view-1'>
                    <section style={{"display": "flex", "flexDirection": "column", "width": "80%", "gap": "10px"}}>
                        <VSCodeTextField onChange={handleChange} name='appid' value={appid} readOnly={true}>App ID</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='name' value={name}>App Name</VSCodeTextField>
                        <VSCodeTextArea onChange={handleChange} name='description' value={description}>App Description</VSCodeTextArea>
                        <VSCodeTextField onChange={handleChange} name='product_name' value={product_name}>Product Name</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='product_vendor' value={product_vendor}>Product Vendor</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='publisher' value={publisher}>Publisher Vendor</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='product_version_regex' value={product_version_regex}>Product Version Regex</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='type' value={type}>Type</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='license' value={license}>License</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='app_version' value={app_version}>App Version</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='package_name' value={package_name}>Package Name</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='main_module' value={main_module}>Main Module</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='python_version' value={python_version}>Python Version</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='logo' value={logo}>Logo</VSCodeTextField>
                        <VSCodeTextField onChange={handleChange} name='logo_dark' value={logo_dark}>Logo Dark</VSCodeTextField>

                    </section>

                </VSCodePanelView>

                <VSCodePanelView id='view-2'>

                <section style={{"display": "flex", "flexDirection": "column", "width": "80%", "gap": "10px"}}>
                    
                    <h3>Asset Parameters</h3>
                    <div>
                        {
                            "configuration" in appValues && Object.entries(appValues.configuration).map(([key, value]) => {
                            return <div style={{"display": "flex", "flexDirection": "row"}}>
                            <div style={{display: "flex", flexDirection: "column", "paddingRight": "10px"}}>
                            <VSCodeTextField style={{"marginBottom": "5px"}} value={key}>Name</VSCodeTextField>
                            </div>

                            <VSCodeTextField value={value.description} size="40">Description</VSCodeTextField>

                            <div style={{display: "flex", flexDirection: "column", "paddingLeft": "10px"}}>
                            <div style={{"paddingRight": "5px"}}>Data Type</div>
                            <VSCodeDropdown value={value.data_type}>
                                <VSCodeOption>
                                    string
                                </VSCodeOption>
                                <VSCodeOption>
                                    boolean
                                </VSCodeOption>
                                <VSCodeOption>
                                    numeric
                                </VSCodeOption>
                                <VSCodeOption>
                                    password
                                </VSCodeOption>
                                <VSCodeOption>
                                    placeholder
                                </VSCodeOption>
                            </VSCodeDropdown>
                            </div>
                            <VSCodeTextField style={{"paddingLeft": "10px"}} value={value.default}>Default</VSCodeTextField>

                            <div style={{display: "flex", flexDirection: "column", "paddingLeft": "10px"}}>
                            <div>Required</div>
                            <VSCodeCheckbox checked={value.required} value={value.required}></VSCodeCheckbox>
                            </div>


                            </div>
                        })
                        }
                    </div>
                    <h3>Add Asset Parameter</h3>
                    <VSCodeDropdown>
                        <VSCodeOption>boolean</VSCodeOption>
                        <VSCodeOption>string</VSCodeOption>
                        <VSCodeOption>password</VSCodeOption>
                    </VSCodeDropdown>
                    <VSCodeButton>Add Parameter</VSCodeButton>
                </section>

                </VSCodePanelView>

            </VSCodePanels>
        </header>
    )
}