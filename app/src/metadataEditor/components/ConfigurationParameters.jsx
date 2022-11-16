import React from 'react'
import { VSCodeButton, VSCodeCheckbox, VSCodeDropdown, VSCodeOption, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'

export default function ConfigurationParameters({appValues, onParameterRemove, onParameterPropertyChange}) {


    return (
        <div>
        {
                "configuration" in appValues && Object.entries(appValues.configuration).map(([key, value]) => {
                return <div style={{"display": "flex", "flexDirection": "row"}}>
                <div style={{display: "flex", flexDirection: "column", "paddingRight": "10px"}}>
                <VSCodeTextField style={{"marginBottom": "5px"}} value={key} readOnly={true}>Name</VSCodeTextField>
                </div>

                <VSCodeTextField name='description' value={value.description} size="40" onInput={(e) => onParameterPropertyChange(key, e)} >Description</VSCodeTextField>

                <div style={{display: "flex", flexDirection: "column", "paddingLeft": "10px"}}>
                <div style={{"paddingRight": "5px"}}>Data Type</div>
                <VSCodeDropdown name='data_type' value={value.data_type} onInput={(e) => onParameterPropertyChange(key, e)}>
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
                <VSCodeTextField style={{"paddingLeft": "10px"}} value={value.default} name='default' onInput={(e) => onParameterPropertyChange(key, e)}>Default</VSCodeTextField>

                <div style={{display: "flex", flexDirection: "column", "paddingLeft": "10px"}}>
                <div>Required</div>
                <VSCodeCheckbox checked={value.required} value={value.required} onChange={(e) => onParameterPropertyChange(key, e)} name='required'></VSCodeCheckbox>
                </div>
                <div style={{display: "flex", flexDirection: "column", "paddingLeft": "10px", "paddingBottom": "10px", "paddingTop": "15px"}}>

                <VSCodeButton style={{"alignSelf": "flex-end"}} appearance='secondary' onClick={()=> {onParameterRemove(key)}}>Remove</VSCodeButton>
                </div>

                </div>
            })
            }
        </div>
    )
}