import React from 'react'
import ConfigurationParameters from './ConfigurationParameters'
import AddParameter from './AddParameter'

export default function AssetConfigurationView({appValues, onParameterRemove, onParameterAdd, onParameterPropertyChange}) {

    return (
        <section style={{"display": "flex", "flexDirection": "column", "width": "80%", "gap": "10px"}}>
                        
        <h3>Configuration Parameters</h3>
        <ConfigurationParameters appValues={appValues} onParameterRemove={onParameterRemove} onParameterPropertyChange={onParameterPropertyChange}></ConfigurationParameters>

        <h3>Add Parameter</h3>

        <AddParameter onParameterAdd={onParameterAdd}></AddParameter>

        </section>

    )
}