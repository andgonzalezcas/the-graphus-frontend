import React from "react";

// Sections
import CurriculumSlide from "../components/sections/CurriculumSlide";
import CurriculumGraph from "../components/sections/CurriculumGraph";

const Curriculum = () => {

  return (
    <>
      <CurriculumSlide className="illustration-section-01"/>
      <CurriculumGraph className="illustration-section-02"/>
    </>
  );
}

export default Curriculum;