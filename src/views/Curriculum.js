import React from "react";
import { useSelector } from 'react-redux'

// Sections
import CurriculumGraph from "../components/sections/CurriculumGraph";
import CurriculumProgram from "../components/sections/CurriculumProgram";

const Curriculum = () => {
  const token = useSelector((state) => state.token.value)
  
  return (
    <>
      {/* <CurriculumGraph className="illustration-section-01"/> */}
      <CurriculumProgram className="illustration-section-02"/>
    </>
  )
  
  const outerClasses = 'hero section center-content has-top-divide has-bottom-divider'

  if (token) {
    return (
      <>
        <CurriculumGraph className="illustration-section-01"/>
      </>
    )
  }
  return (
    <section
      className={outerClasses}
    >
      <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
        U are not logged, <span className="text-color-primary">please go back to home</span>
      </h1>
    </section>
  )
}

export default Curriculum;