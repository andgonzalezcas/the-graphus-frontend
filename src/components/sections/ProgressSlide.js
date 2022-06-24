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
  const [filter, setFilter] = useState("")
  const [filtersArray, setFiltersArray] = useState([])
  const [data, setData] = useState()
  
  useEffect (() => {
    setFiltersArray(Object.keys(historyData.semesters))
    setFilter(filtersArray[0])
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

  return (
    <>
      <section
        {...props}
        className={outerClasses}
      >
        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
          <span className="text-color-primary">{filter}</span>
          <br/>
        </h1>
        <div className="pagination-container reveal-from-bottom" data-reveal-delay="200">
          {
            filtersArray.map((semester, index) =>{
              return (
                <div className="pagination-number" key={index} onClick={() => {setFilter(filtersArray[index])}}>
                  {semester}
                </div>
              )
            })
          } 
        </div>
        <main className="page-progress-content reveal-from-bottom" data-reveal-delay="200">
        {
          data ?  
          <>
            {
              data.courses ? 
              data.courses.map((course, index) => <ProgressCard key={index} course={course}/>) :
              <p>Este semestre no viste ningun curso</p>
            }
          </>:
          <p>Selecciona un semestre</p>
        }
        </main> 
      </section>
    </>
  );
}

export default ProgressSlide;