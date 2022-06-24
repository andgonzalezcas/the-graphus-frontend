import React from "react";
import { useSelector } from 'react-redux'

import ProgressProfile from "../components/elements/progressElements/ProgressProfile";
import ProgressSlide from "../components/sections/ProgressSlide";

//test data
const historyData= require('../service/data.json');

const Progress = () => {
  const user = useSelector((state) => state.user.value)

  return (
    <>
      <ProgressProfile user={user} historyData={historyData.success[0]}/>
      <ProgressSlide className="illustration-section-02" historyData={historyData.success[0]}/>
    </>
  );
}

export default Progress;