import React from "react";
import { useSelector } from 'react-redux'

import ProgressProfile from "../components/elements/progressElements/ProgressProfile";
import ProgressSlide from "../components/sections/ProgressSlide";

//test data
const historyData= require('../service/data.json');

const Progress = () => {
  const user = useSelector((state) => state.user.value)
  const token = useSelector((state) => state.token.value)

  return (
    <>
      <ProgressProfile user={user} historyData={historyData.success[0]}/>
      <ProgressSlide className="illustration-section-02" historyData={historyData.success[0]}/>
    </>
  )

  const outerClasses = 'hero section center-content has-top-divide has-bottom-divider'

  if (token) {
    return (
      <>
        <ProgressProfile user={user} historyData={historyData.success[0]}/>
        <ProgressSlide className="illustration-section-02" historyData={historyData.success[0]}/>
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

export default Progress;