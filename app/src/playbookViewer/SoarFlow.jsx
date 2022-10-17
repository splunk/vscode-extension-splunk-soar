import React, { useCallback, useMemo } from 'react';
import ReactFlow, { addEdge, ConnectionLineType, useNodesState, useEdgesState } from 'reactflow';
import dagre from 'dagre';

import { ActionNode, FilterNode, CustomFunctionNode, PlaybookNode, CodeNode } from './nodes';
import './SoarFlow.css'

export default function SoarFlow({ playbook }) {
    console.log(playbook)

    let playbookEdges = playbook.coa_data.edges.map(edge => {
        return {
            id: edge.id,
            source: edge.sourceNode,
            target: edge.targetNode,
            type: "smoothstep",
            animated: true
        }

    })


    let playbookNodes = Object.values(playbook.coa_data.nodes).map(node => {

        if (node.type == "start") {
            return {
                id: node.id,
                type: "default",
                data: { label: node.data.type },
                position: {
                    x: node.x,
                    y: node.y
                }
            }
        } else if (node.type == "action") {
            return {
                id: node.id,
                type: "action",
                data: { label: node.data.functionName, ...node.data },
                position: {
                    x: node.x,
                    y: node.y
                }
            }
        }
        else if (node.type == "filter") {
            return {
                id: node.id,
                type: "filter",
                data: { label: node.data.functionName, ...node.data },
                position: {
                    x: node.x,
                    y: node.y
                }
            }
        }
        else if (node.type == "playbook") {
            return {
                id: node.id,
                type: "playbook",
                data: { label: node.data.functionName, ...node.data },
                position: {
                    x: node.x,
                    y: node.y
                }
            }
        }
        else if (node.type == "code") {
            return {
                id: node.id,
                type: "code",
                data: { label: node.data.functionName, ...node.data },
                position: {
                    x: node.x,
                    y: node.y
                }
            }
        }
        else if (node.type == "utility" && node.data.utilityType == "custom_function") {
            return {
                id: node.id,
                type: "customFunction",
                data: { label: node.data.functionName, ...node.data },
                position: {
                    x: node.x,
                    y: node.y
                }
            }
        }

        else {
            return {
                id: node.id,
                type: "default",
                data: { label: node.data.type }
            }
        }
    })
    
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    const nodeWidth = 172;
    const nodeHeight = 100;


    const getLayoutedElements = (nodes, edges, direction = 'TB') => {
        const isHorizontal = direction === 'LR';
        dagreGraph.setGraph({ rankdir: direction });
      
        nodes.forEach((node) => {
          dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
        });
      
        edges.forEach((edge) => {
          dagreGraph.setEdge(edge.source, edge.target);
        });
      
        dagre.layout(dagreGraph);
      
        nodes.forEach((node) => {
          const nodeWithPosition = dagreGraph.node(node.id);
          node.targetPosition = isHorizontal ? 'left' : 'top';
          node.sourcePosition = isHorizontal ? 'right' : 'bottom';
      
          // We are shifting the dagre node position (anchor=center center) to the top left
          // so it matches the React Flow node anchor point (top left).
          node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
          };
      
          return node;
        });
      
        return { nodes, edges };
      };

      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        playbookNodes,
        playbookEdges
      );


      const nodeTypes = useMemo(() => ({ action: ActionNode, filter: FilterNode, customFunction: CustomFunctionNode, playbook: PlaybookNode, code: CodeNode}), []);

      const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
      const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
    
      const onConnect = useCallback(
        (params) =>
          setEdges((eds) =>
            addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)
          ),
        []
      );
      const onLayout = useCallback(
        (direction) => {
          const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
            nodes,
            edges,
            direction
          );
    
          setNodes([...layoutedNodes]);
          setEdges([...layoutedEdges]);
        },
        [nodes, edges]
      );

      return (
        <>
        <div className="layoutflow">
          <ReactFlow
            snapToGrid
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
          />
          <div className="controls">
            <button onClick={() => onLayout('TB')}>vertical layout</button>
            <button onClick={() => onLayout('LR')}>horizontal layout</button>
          </div>
        </div>
        </>
      );

}