import React, { useState } from "react";
import classNames from 'classnames';
// import { Graphviz } from 'graphviz-react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';

import CourseNode from './partials/CourseNode.js'

const initialNodes = [
  { id: 'node-1', type: 'courseNode', position: { x: 0, y: 0 }, data: { name: 'Prueba', code: '1000004', expertise:'Matematicas', credits: 4,identifier: 1, color:'orange' } },
  { id: 'node-2', type: 'courseNode', position: { x: 250, y: 0 }, data: { name: 'Prueba', code: '1000004', expertise:'Matematicas', credits: 4,identifier: 1, color: 'blue' } },
  { id: 'node-3', type: 'courseNode', position: { x: 550, y: 0 }, data: { name: 'Prueba', code: '1000004', expertise:'Matematicas', credits: 4,identifier: 1, color: 'yellow' } },
];

const nodeTypes = { courseNode: CourseNode };

const CurriculumGraph = (props) => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  console.log(props)

  return (
    <>
      <section
        className='hero section center-content'
      >
        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
          Great things <span className="text-color-primary">comming soon</span>
        </h1>
        <div className="graph-container">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
          />
        </div>
        {/* <Graphviz dot={`digraph {
          subgraph cluster_0 {
            label="Semestre A";
            a -> b;
            b -> c;
            c -> d;
          }
          subgraph cluster_1 {
            label="Semestre B";
            a -> f;
            x;
            s;
          }
          subgraph cluster_2 {
            label="Semestre C";
            "carenina: 23 \ncositas nn";
            q;
            w;
            e;
          }
        }`} /> */}
      </section>
    </>
  );
}

export default CurriculumGraph;

// digraph {
//   subgraph cluster_0 {
//     label="Semestre A";
//     a -> b;
//     b -> c;
//     c -> d;
//   }
//   subgraph cluster_1 {
//     label="Semestre B";
//     a -> f
//     f -> c
//   }
// }