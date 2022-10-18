import { VSCodeBadge, VSCodeTag, VSCodeTextField } from '@vscode/webview-ui-toolkit/react';
import React from 'react';
import { Handle, Position } from 'reactflow';

export default function StartEndNode({ data }) {

    return (
        <div className='soarNode'>
            {data.type == "end" ?
                        <Handle type="target" position={Position.Top} /> :
                        <div></div>
            }
            <div>
                <div>
                <VSCodeBadge>{data.type}</VSCodeBadge>
                </div>
            </div>
            {data.type == "start" ?
                        <Handle type="source" position={Position.Bottom} id="a" /> :
                        <div></div>
            }
        </div>
    )
}