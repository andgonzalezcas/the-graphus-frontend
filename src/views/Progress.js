import React, { useEffect } from "react";
import ProgressProfile from "../components/elements/progressElements/ProgressProfile";

import ProgressSlide from "../components/sections/ProgressSlide";

import axios from 'axios';

const Progress = () => {
  useEffect(() => {
    axios.get('https://7cd7e624-672a-4821-805e-2d2c41e16ab7.mock.pstmn.io/users/academic-histories/4')
  })
  return (
    <>
      {/* <h1>
        Progress
      </h1>
      <ProgressProfile />
    <ProgressSlide className="illustration-section-02"/> */}
      <div className="progress-container">
        <h1>Como va tu <span className="text-color-primary">Carrera?</span></h1>
        <div className="upper-progress-panel">
          <ProgressProfile />
          <div>Aqui va un grafico</div>
        </div>
      </div>
    </>
  );
}

export default Progress;