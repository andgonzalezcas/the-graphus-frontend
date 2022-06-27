import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

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
  } return <div>Loading ...</div>

  const outerClasses = 'hero section center-content has-top-divide has-bottom-divider'

  if (token) {
    if (historyData) {
      return (
        <>
          <ProgressProfile user={user} historyData={historyData}/>
          <ProgressSlide className="illustration-section-02" historyData={historyData}/>
        </>
      )
    } return <div>Loading ...</div>
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