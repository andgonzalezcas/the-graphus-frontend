import React from "react";
import classNames from 'classnames';
import CurriculumCard from "../elements/CurriculumCard";

const CurriculumSlide = ({
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
        <CurriculumCard />
      </section>
    </>
  );
}

export default CurriculumSlide;