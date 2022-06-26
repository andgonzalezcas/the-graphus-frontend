import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import ProgressCard from "../elements/progressElements/ProgressCard"; 

const ProgressSlide = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  historyData,
  ...props
}) => {
  const [filter, setFilter] = useState(1)
  const [filtersArray, setFiltersArray] = useState([])
  const [data, setData] = useState()

  const getSemesters = (semesters) => {
    let returnArray = []

    semesters.map(semester => {
      const object = {
        semester_label: semester.semester_label,
        semester_id: semester.semester - 1
      }
      returnArray.push(object)
    })
    return returnArray
  }
  
  useEffect (() => {
    setFiltersArray(getSemesters(historyData.semesters))
    setFilter(0)
  }, [])
  
  useEffect (() => {
    setData(historyData.semesters[filter])
  }, [filter])

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  if (data) {
    return (
      <section
        {...props}
        className={outerClasses}
      >
        <h1 className="mt-0 mb-16">
          <span className="text-color-primary">{filtersArray[filter].semester_label}</span>
          <br/>
        </h1>
        <div className="pagination-container">
          {
            filtersArray.map((semester, index) =>{
              return (
                <div className="pagination-number" key={index} onClick={() => {setFilter(filtersArray[index].semester_id)}}>
                  {semester.semester_label}
                </div>
              )
            })
          } 
        </div>
        <main className="page-progress-content">
          {
            data.courses ? 
            data.courses.map((course, index) => <ProgressCard key={index} course={course}/>) :
            <p>Este semestre no viste ningun curso</p>
          }
        </main>
      </section>
    );
  } return <></>

}

export default ProgressSlide;