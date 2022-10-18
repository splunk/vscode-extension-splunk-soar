import React from 'react';
import { Handle, Position } from 'reactflow';
import { VSCodeBadge } from '@vscode/webview-ui-toolkit/react';

export default function PromptNode({ data }) {

    return (
        <div className='soarNode'>
            <Handle type="target" position={Position.Top} />
            <div>
                <div>
                <VSCodeBadge>Prompt</VSCodeBadge>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    )
}