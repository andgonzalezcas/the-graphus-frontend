import React from "react";
import classNames from 'classnames';

const Error = () => {

  const outerClasses = classNames(
    'hero section center-content',
    'has-top-divider',
    'has-bottom-divider',
    'invert-color'
  );

  return (
    <section
      className={outerClasses}
    >
      <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
        <span className="text-color-primary">Error 404 page not found</span>
      </h1>
    </section>
  );
}

export default Error;