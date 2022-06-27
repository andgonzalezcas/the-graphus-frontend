import { data } from "autoprefixer";
import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';

import CourseNode from './partials/CourseNode.js'

const initialNodes = [
  { id: 'node-1', type: 'courseNode', position: { x: 0, y: 0 }, data: { name: 'Prueba', code: '1000004', expertise: 'Matematicas', credits: 4, identifier: 1, color: 'orange' } },
  { id: 'node-2', type: 'courseNode', position: { x: 250, y: 0 }, data: { name: 'Prueba', code: '1000004', expertise: 'Matematicas', credits: 4, identifier: 1, color: 'blue' } },
  { id: 'node-3', type: 'courseNode', position: { x: 0, y: 220 }, data: { name: 'Prueba', code: '1000004', expertise: 'Matematicas', credits: 4, identifier: 1, color: 'yellow' } },
];

const nodeTypes = { courseNode: CourseNode };

const CurriculumGraph = (props) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [render, setRender] = useState(false);

  console.log(props);

  useEffect(() => {
    let InitialNodes = [];
    for (let semester of props.GraphInfo) {
      let subIndex = 0;
      for (let course of semester.courses) {
        let obj = {
          id: course.identifier.toString(),
          type: 'courseNode',
          position: {
            x: (semester.semester - 1) * 500,
            y: subIndex * 500,
          },
          data: course,
          draggable: false
        }
        setNodes(nodes => [...nodes, obj]);
        subIndex++;

        for (let requirement of course.requirements) {
          let edgeObj = {
            id: `e${requirement}-${course.identifier}`,
            type: 'normal',
            source: requirement.toString(),
            target: course.identifier.toString(),
            style: { stroke: course.color },
            animated: true
          };
          setEdges(edges => [...edges, edgeObj]);
        }
      }
    }
    console.log(InitialNodes);
    setRender(true);
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  if (render) {
    console.log("Nodos iniciales ", nodes);
    return (
      <>
        <section
          className='hero section center-content'
        >
          <h1 className="mt-50 mb-16">
            Grafo <span className="text-color-primary">Curricular</span>
          </h1>
          <div className="graph-container">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              nodeTypes={nodeTypes}
              fitView
            />
          </div>
        </section>
      </>
    );
  } else {
    return <></>
  }
}

export default CurriculumGraph;