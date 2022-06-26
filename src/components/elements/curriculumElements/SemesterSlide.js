import React from "react";
import classNames from 'classnames';

import CurriculumCard from "./CurriculumCard";

const SemesterSlide = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  semester,
  getRequeriments,
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
    <section
      {...props}
      className={outerClasses}
    >
      <main className="page-progress-content">
        { semester.courses.map((course, index) => <CurriculumCard key={index} course={course} getRequeriments={getRequeriments}/> ) }
      </main>
    </section>
  );
}

export default SemesterSlide;