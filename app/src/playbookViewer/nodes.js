import React, { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { VSCodeButton, VSCodeOption, VSCodeTag, VSCodeTextField } from '@vscode/webview-ui-toolkit/react';


export function ActionNode({data}) {


    const nodeStyle = {
        padding: '10px',
        borderRadius: '3px',
        width: '150px',
        height: '30px',
        fontSize: '12px',
        color: 'white',
        textAlign: 'center',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#1a192b',
        backgroundColor: 'rgb(30,30,30)',
        fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\',\'Segoe UI Symbol\''
    }



    return (
        <>
        <div style={nodeStyle}>
        <Handle type="target" position={Position.Top} />
        <div>
           <VSCodeTag style={{float: "left"}}>ACTION</VSCodeTag> <span>{data.advanced.customName}</span>
 
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" />
        </div>
      </>
  
    )
}

export function CustomFunctionNode({data}) {
   

    const nodeStyle = {
        padding: '10px',
        borderRadius: '3px',
        width: '150px',
        height: '30px',
        fontSize: '12px',
        color: 'white',
        textAlign: 'center',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#1a192b',
        backgroundColor: 'rgb(30,30,30)',
        fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\',\'Segoe UI Symbol\''
    }



    return (
        <>
        <div style={nodeStyle}>
        <Handle type="target" position={Position.Top} />
        <div>
           <VSCodeTag style={{float: "left"}}>Custom Function</VSCodeTag> <span>{data.advanced.customName}</span>
 
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" />
        </div>
      </>
  
    ) 
}
export function FilterNode({data}) {


    const nodeStyle = {
        padding: '10px',
        borderRadius: '3px',
        width: '150px',
        height: '30px',
        fontSize: '12px',
        color: 'white',
        textAlign: 'center',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#1a192b',
        backgroundColor: 'rgb(30,30,30)',
        fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\',\'Segoe UI Symbol\''
    }



    return (
        <>
        <div style={nodeStyle}>
        <Handle type="target" position={Position.Top} />
        <div>
           <VSCodeTag style={{float: "left"}}>FILTER</VSCodeTag> <span>{data.advanced.customName}</span>
 
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" />
        </div>
      </>
  
    )
}

export function PlaybookNode({data}) {


    const nodeStyle = {
        padding: '10px',
        borderRadius: '3px',
        width: '150px',
        height: '30px',
        fontSize: '12px',
        color: 'white',
        textAlign: 'center',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#1a192b',
        backgroundColor: 'rgb(30,30,30)',
        fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\',\'Segoe UI Symbol\''
    }



    return (
        <>
        <div style={nodeStyle}>
        <Handle type="target" position={Position.Top} />
        <div>
           <VSCodeTag style={{float: "left"}}>Playbook</VSCodeTag> <span>{data.advanced.customName}</span>
 
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" />
        </div>
      </>
  
    )
}

export function CodeNode({data}) {


    const nodeStyle = {
        padding: '10px',
        borderRadius: '3px',
        width: '150px',
        height: '30px',
        fontSize: '12px',
        color: 'white',
        textAlign: 'center',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#1a192b',
        backgroundColor: 'rgb(30,30,30)',
        fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\',\'Segoe UI Symbol\''
    }



    return (
        <>
        <div style={nodeStyle}>
        <Handle type="target" position={Position.Top} />
        <div>
           <VSCodeTag style={{float: "left"}}>Code</VSCodeTag> <span>{data.advanced.customName}</span>
 
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" />
        </div>
      </>
  
    )
}