import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import classNames from 'classnames';

import SemesterSlide from "../elements/curriculumElements/SemesterSlide";
import CurriculumCard from "../elements/curriculumElements/CurriculumCard";

const CurriculumProgram = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const token = useSelector((state) => state.token.value)
  const academicHistory = useSelector((state) => state.academicHistory.value)
  const [data, setData] = useState()
  const [criticalPath, setCriticalPath] = useState()
  const [filter, setFilter] = useState(1)
  const [filtersArray, setFiltersArray] = useState([])
  const criticalPathFilter = ["critica", "importante", "disponible"]
  const [actualCriticalPath, setActualCriticalPath] =useState("critica")

  const getCriticalPath = (data) => {
    const returnArray = {
      critica: [],
      importante: [],
      disponible: []
    }

    data.semesters.map((semester) => {
      semester.courses.map((course) => {
        if(course.priority === 'critical')
          returnArray.critica.push(course)
        else if (course.priority === 'important')
          returnArray.importante.push(course)
        else if (course.priority === 'available')
          returnArray.disponible.push(course)
        })
    })

    return returnArray
  }

  const getRequeriments = (requeriments) => {
    const returnData = []
    data.semesters.map((semester) => {
      semester.courses.map((course) => {
        if (requeriments.includes(course.identifier))
          returnData.push(course)
      })
    })
    return returnData
  }

  const getSemesters = (semesters) => {
    let returnArray = []
    semesters.map(semester => { returnArray.push(semester.semester) })
    return returnArray
  }

  useEffect(() => {
    const URL = process.env.REACT_APP_BACKEND_HOST + '/users/curriculas/?academic_history=' + academicHistory.code
    fetch(URL, {
      headers: new Headers({ 'Authorization': token })
    }).then(response => response.json())
      .then(response => { setData(response.success) })
      .catch(error => console.error('Error:', error))
  }, [])

  useEffect(() => {
    if (data) {
      setFiltersArray(getSemesters(data.semesters))
      setFilter(0)
      setCriticalPath(getCriticalPath(data))
    }
  }, [data])

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  if (data && criticalPath) {
    return (
      <>
        <section
          {...props}
          className={outerClasses}
        >
          <div>
            <h1 className="mt-10 mb-16">
              <span className="text-color-primary">{data.program_info.name} - {data.program_info.code}</span>
            </h1>
            <h2 className="mt-0 mb-10">
              <span>Semestre {filtersArray[filter]}</span>
              <br />
            </h2>
            <div className="pagination-container">
              {
                filtersArray.map((semester, index) => {
                  return (
                    <div className="pagination-number" key={index} onClick={() => { setFilter(index) }}>
                      {semester}
                    </div>
                  )
                })
              }
            </div>
            <SemesterSlide semester={data.semesters[filter]} getRequeriments={getRequeriments} />
          </div>
        </section>
        <section
          {...props}
          className={outerClasses}
        >
          <h1 className="mt-10 mb-16">
            <span className="text-color-primary">Ruta {actualCriticalPath}</span>
          </h1>
          <div className="pagination-container">
            {
              criticalPathFilter.map((filter, index) => {
                return (
                  <div className="pagination-number" key={index} onClick={() => { setActualCriticalPath(filter) }}>
                    {filter}
                  </div>
                )
              })
            }
          </div>
          <main className="page-progress-content">
            { criticalPath[actualCriticalPath].map((course, index) => <CurriculumCard key={index} course={course} getRequeriments={getRequeriments}/> ) }
          </main>
        </section>
      </>
    );
  } return <></>
}

export default CurriculumProgram;