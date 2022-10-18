import { VSCodeBadge, VSCodeTag, VSCodeTextField } from '@vscode/webview-ui-toolkit/react';
import React from 'react';
import { Handle, Position } from 'reactflow';

export default function CustomFunctionNode({ data }) {

    return (
        <div className='soarNode'>
            <Handle type="target" position={Position.Top} />
            <div>
                <div>
                <VSCodeBadge>Custom Function</VSCodeBadge>
                <p>{data.customFunction.name}</p>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    )
}
