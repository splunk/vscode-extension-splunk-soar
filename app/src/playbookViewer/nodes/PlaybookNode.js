import { VSCodeBadge, VSCodeButton } from '@vscode/webview-ui-toolkit/react';
import React, { useContext } from 'react';
import { Handle, Position } from 'reactflow';
import { ExtensionContext } from '../context';


export default function PlaybookNode({ data }) {
    const vscode = useContext(ExtensionContext)

    return (
        <div className='soarNode'>
            <Handle type="target" position={Position.Top} />
            <div>
                <div>
                <VSCodeBadge>Playbook</VSCodeBadge>
                <p>{data.playbookName}</p>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    )
}