import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ControlButton,
} from 'reactflow';
// 👇 you need to import the reactflow styles
import 'reactflow/dist/style.css';
import dagre from 'dagre'
import FilterNode from './nodes/FilterNode';
import ActionNode from './nodes/ActionNode';
import CustomFunctionNode from './nodes/CustomFunctionNode';
import StartEndNode from './nodes/StartEndNode';
import DecisionNode from './nodes/DecisionNode';
import CodeNode from './nodes/CodeNode';
import FormatNode from './nodes/FormatNode';
import PlaybookNode from './nodes/PlaybookNode';
import PromptNode from './nodes/PromptNode';
import DataPanel from './DataPanel';

import { VscJson, VscTypeHierarchy } from "react-icons/vsc";

const initialNodes = [];
const initialEdges = [];

function generateNodes(playbook) {
  let playbookNodes = Object.values(playbook.coa_data.nodes).map(node => {

    let type = "default"

    switch (node.data.type) {
      case "filter":
        type = "filter"
        break;
      case "action":
        type = "action"
        break;
      case "utility":
        if (node.data.utilityType == "custom_function") {
          type = "customFunction"
        }
        break;
      case "start":
        type = "startEnd"
        break;
      case "end":
        type = "startEnd"
        break;
      case "decision":
        type = "decision"
        break;
      case "code":
        type = "code"
        break;
      case "format":
        type = "format"
        break;
      case "playbook":
        type = "playbook"
      case "prompt":
        type = "prompt"
    }

    return {
      id: node.id,
      type: type,
      data: { label: node.data.type, ...node.data },
      position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }
    }
  })

  return playbookNodes
}

function generateEdges(playbook) {
  let playbookEdges = playbook.coa_data.edges.map(edge => {
    return {
      id: edge.id,
      source: edge.sourceNode,
      target: edge.targetNode,
      type: "smoothstep"
    }

  })

  return playbookEdges
}


const getLayoutedElements = (nodes, edges) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'TB' })

  const nodeWidth = 172;
  const nodeHeight = 150;

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = 'top';
    node.sourcePosition = 'bottom';

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
}

export function Flow({ playbook }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


  useEffect(() => {
    let playbookNodes = generateNodes(playbook)
    let playbookEdges = generateEdges(playbook)

    const layoutedElements = getLayoutedElements(playbookNodes, playbookEdges)


    console.log(playbookNodes)

    console.log(playbookEdges)

    setNodes(layoutedElements.nodes)
    setEdges(layoutedElements.edges)
  }, [playbook])

  let nodeMapping = {
    filter: FilterNode,
    action: ActionNode,
    customFunction: CustomFunctionNode,
    startEnd: StartEndNode,
    decision: DecisionNode,
    code: CodeNode,
    format: FormatNode,
    playbook: PlaybookNode,
    prompt: PromptNode
  }

  const nodeTypes = useMemo(() => (nodeMapping), []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const [selectedNode, setSelectedNode] = useState({})

  const onNodeClick = (ev, node) => {
    setSelectedNode(node)
  }

  const [showDataView, setShowDataView] = useState(true)
  const toggleDataView = () => {
    setShowDataView(!showDataView)
  }

  const resetLayout = useCallback(() => {
    const layoutedElements = getLayoutedElements(nodes, edges)

    setNodes([... layoutedElements.nodes])
    setEdges([...layoutedElements.edges])
  })

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
    >
      <Controls>
        <ControlButton onClick={toggleDataView}><VscJson></VscJson></ControlButton>
        <ControlButton onClick={resetLayout}><VscTypeHierarchy></VscTypeHierarchy></ControlButton>
      </Controls>
      {showDataView ? <DataPanel node={selectedNode}></DataPanel>: <></>}
      <Background />
    </ReactFlow>
  );
}
