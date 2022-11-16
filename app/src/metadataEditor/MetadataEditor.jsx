import React, { useContext, useReducer, useEffect, useState } from 'react'
import { VSCodeBadge, VSCodeButton, VSCodeCheckbox, VSCodeDropdown, VSCodeOption, VSCodePanels, VSCodePanelTab, VSCodePanelView, VSCodeTextArea, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'
import { ExtensionContext } from './context'
import BaseDataView from './components/BaseDataView'
import AssetConfigurationView from './components/AssetConfigurationView'

export default function MetadataEditor() {
    const vscode = useContext(ExtensionContext)

    // Whether to send the data back to the extension host
    const [sendUpdate, setSendUpdate] = useState(false)
    
    // Client-side app document model, empty by default
    const [appValues, setAppValues] = useReducer(
        (currentValues, newValues) => ({...currentValues, ...newValues}), {}
    ) 

    useEffect(() => {
        window.addEventListener("message", (event) => {
            handleUpdateFromExtension(event)
        });    
    }, [])

    const handleUpdateFromExtension = function(messageEvent) {
        let textContents = JSON.parse(messageEvent.data.text)
        setAppValues(textContents)
    }    

    const handleChange = function(event) {
        const {name, value} = event.target
        setAppValues({ [name]: value})
        setSendUpdate(true)
    }

    const handleRemoveAssetParameter = function(key) {
        const configuration = appValues["configuration"]
        delete configuration[key]
        
        setAppValues({...appValues, "configuration": configuration})
        setSendUpdate(true)
    }

    const handleAddAssetParameter = function(newParamValues) {
        const configuration = appValues["configuration"]

        configuration[newParamValues.name] = {
            "data_type": newParamValues.data_type,
            "description": newParamValues.description,
            "required": newParamValues.required,
            "default": newParamValues.defaultValue
        }

        setAppValues({...appValues, "configuration": configuration})
        setSendUpdate(true)
    }

    const onParameterPropertyChange = function(parameter, e) {
        const configuration = appValues["configuration"]

        console.log(parameter, e)
        const property = e.target.name
        const newValue = e.target.value
        
        configuration[parameter][property] = newValue
        setAppValues({...appValues, "configuration": configuration})
        setSendUpdate(true)
    }


    if (sendUpdate) {
        vscode.postMessage({"type": "update", "data": JSON.stringify(appValues)}) 
        setSendUpdate(false)
    }

    return (
        <header>
            <h1>Metadata Editor<VSCodeBadge>experimental</VSCodeBadge></h1>

            <VSCodePanels>

                <VSCodePanelTab id='view-1'>Basic Information</VSCodePanelTab>
                <VSCodePanelTab id='view-2'>Asset Configuration</VSCodePanelTab>

                <VSCodePanelView id='view-1'>
                    <BaseDataView handleChange={handleChange} appValues={appValues}></BaseDataView>
                </VSCodePanelView>

                <VSCodePanelView id='view-2'>
                    <AssetConfigurationView appValues={appValues} onParameterRemove={handleRemoveAssetParameter} onParameterAdd={handleAddAssetParameter} onParameterPropertyChange={onParameterPropertyChange}></AssetConfigurationView>
                </VSCodePanelView>

            </VSCodePanels>
        </header>
    )
}