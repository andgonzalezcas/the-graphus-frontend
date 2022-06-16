import React from "react";
import ProgressProfile from "../components/elements/progressElements/ProgressProfile";

import ProgressSlide from "../components/sections/ProgressSlide";

const Progress = () => {

  return (
    <>
      <h1>
        Progress
      </h1>
      <ProgressProfile />
      <ProgressSlide className="illustration-section-02"/>
    </>
  );
}

export default Progress;