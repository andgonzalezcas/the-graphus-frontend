import React from "react";
import { Handle, Position } from 'react-flow-renderer';

const handleStyle = { left: 10 };

function CourseNode({data}) {

    return (
        <div className={`course-node color-${data.color}`}>
            <Handle type="target" position={Position.Left} />
            <div>
                <div className='course-title'>{data.name}</div>
                <div className='course-code'>{data.code}</div>
                <div className='course-expertise'>{data.expertise}</div>
                <div className='course-credits'>
                    <span>{data.credits}</span><br/>
                    <label>Creditos</label>
                </div>
                <div className={`course-identifier color-${data.color}`}>{data.identifier}</div>
            </div>
            <Handle type="source" position={Position.Right} id="b" />
        </div>
    );
}

export default CourseNode;
