import React from "react";
import classNames from 'classnames';
import { Graphviz } from 'graphviz-react';

const CurriculumGraph = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  return (
    <>
      <section
        {...props}
        className={outerClasses}
      >
        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
          Great things <span className="text-color-primary">comming soon</span>
        </h1>
        <Graphviz dot={`digraph {
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
        }`} />
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