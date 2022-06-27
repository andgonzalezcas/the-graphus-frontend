import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import Loading from "../components/elements/Loading";

import ProgressProfile from "../components/elements/progressElements/ProgressProfile";
import ProgressSlide from "../components/sections/ProgressSlide";

// TEST DATA
// const historyData = require('../service/data.json');

const Progress = () => {
  const user = useSelector((state) => state.user.value)
  const token = useSelector((state) => state.token.value)
  const [historyData, setHistoryData] = useState('')

  const URL = process.env.REACT_APP_BACKEND_HOST + '/users/academic-histories/1900'

  useEffect(() => { 
    fetch(URL, {
      headers: new Headers({
        'Authorization': token, 
    })
    }).then(response => response.json())
    .then(response => { setHistoryData(response.success) })
    .catch(error => console.error('Error:', error))
  }, [])

  if (historyData) {
    return (
      <>
        <ProgressProfile user={user} historyData={historyData}/>
        <ProgressSlide className="illustration-section-02" historyData={historyData}/>
      </>
    )
  }
  return <Loading />

}

export default Progress;