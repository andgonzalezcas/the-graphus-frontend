import React from 'react'

const ProgressCard = ({ course }) => {

  return(
    <div className={`curriculum-card curriculum-card-background-${course.color}`}>
      <div className="curriculum-content">
        <h2 className="curriculum-title">{`${course.name} ${course.code}`}</h2>
        <p className="curriculum-copy">{`Creditos: ${course.credits}`}</p>
        <p className="curriculum-copy">{`Id del curso: ${course.course_id}`}</p>
        <p className="curriculum-copy">{`Semestre: ${course.grade}`}</p>
        {/* <button className="curriculum-btn">View Trips</button> */}
      </div>
    </div>
  )
}

export default ProgressCard