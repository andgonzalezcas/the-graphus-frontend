import React from "react";
import classNames from 'classnames';

const SearcherSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  historyData,
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
      <h1 className="mt-0 mb-16">
        <span className="text-color-primary">Buscador</span>
        <br/>
      </h1>
    </section>
  );

}

export default SearcherSection;