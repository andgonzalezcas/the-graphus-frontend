import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import Loading from "../components/elements/Loading";

// Sections
import CurriculumGraph from "../components/sections/CurriculumGraph";
import CurriculumProgram from "../components/sections/CurriculumProgram";

const Curriculum = () => {
  const token = useSelector((state) => state.token.value);
  const academicHistory = useSelector((state) => state.academicHistory.value)
  const [data, setData] = useState();

  useEffect(() => {
    const URL = process.env.REACT_APP_BACKEND_HOST + '/users/curriculas/?academic_history=' + academicHistory.code
    fetch(URL, {
      headers: new Headers({ 'Authorization': token })
    }).then(response => response.json())
      .then(response => {
        setData(response.success);
        console.log(response.success);
      })
      .catch(error => console.error('Error:', error))
  }, []);

  if (data) {
    return (
      <>
        <CurriculumGraph className="illustration-section-01" GraphInfo={data.semesters} />
        {/* <CurriculumGraph className="illustration-section-01"/> */}
        <CurriculumProgram className="illustration-section-02" />
      </>
    )
  } else {
    return <Loading/>
  }
}

export default Curriculum;