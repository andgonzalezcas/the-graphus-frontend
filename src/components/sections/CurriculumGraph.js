import React from "react";
import classNames from 'classnames';

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
      </section>
    </>
  );
}

export default CurriculumGraph;