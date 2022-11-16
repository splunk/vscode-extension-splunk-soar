import React, {useReducer} from 'react'
import { VSCodeButton, VSCodeCheckbox, VSCodeDropdown, VSCodeOption, VSCodeTextArea, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'

export default function AddParameter({onParameterAdd}) {

    const initialNewParamValues = {
        "name": "",
        "description": "",
        "data_type": "string",
        "required": false,
        "defaultValue": ""
    }

    const [newParamValues, setNewParamValues] = useReducer(
        (currentValues, newValues) => ({...currentValues, ...newValues}), initialNewParamValues
    )

    const handleNewParamChange = function(event) {
        const {name, value} = event.target
        setNewParamValues({[name]: value})
    }

    const {name, description, data_type, required, defaultValue } = newParamValues

    return (
        <div style={{display: "flex", "flexDirection": "column", "gap": "10px"}}>
        <VSCodeTextField name="name" onChange={handleNewParamChange} value={name}>Name</VSCodeTextField>
            <VSCodeTextArea name="description" onChange={handleNewParamChange} value={description}>Description</VSCodeTextArea>
            <VSCodeDropdown name="data_type" onChange={handleNewParamChange} value={data_type}>
                <VSCodeOption>boolean</VSCodeOption>
                <VSCodeOption>string</VSCodeOption>
                <VSCodeOption>password</VSCodeOption>
            </VSCodeDropdown>
            <VSCodeTextField name="default" onChange={handleNewParamChange} value={defaultValue}>Default</VSCodeTextField>
            <div>
                <div>Required</div>
                <VSCodeCheckbox name="required" onChange={handleNewParamChange} value={required}></VSCodeCheckbox>
            </div>
            <VSCodeButton onClick={() => {onParameterAdd(newParamValues)}}>Add Parameter</VSCodeButton>
        </div>
    )
}