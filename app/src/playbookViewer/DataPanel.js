import React from "react"

export default function DataPanel({node}) {
    return (
        <div style={{"padding": "10px", "maxHeight": "90%", "height": "auto", "minWidth": "300px", width: "25%", "overflow": "scroll", "backgroundColor": "#282c34", "zIndex": 4, "right": 0, "top": 0, "border": "5px solid #353b45", "position": "absolute"}}>

            <pre><code>{JSON.stringify(node, null, 2)}</code></pre>
        </div>
    )
}