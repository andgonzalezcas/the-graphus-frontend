import React from 'react'

const ProgressCard = ({ course }) => {

  return(
    <div className={`progress-card progress-card-background-${course.color}`}>
      <div className="progress-content">
        <h2 className="progress-title">{`${course.name} ${course.code}`}</h2>
        <p className="progress-copy">{`Creditos: ${course.credits}`}</p>
        <p className="progress-copy">{`Id del curso: ${course.course_id}`}</p>
        <p className="progress-copy">{`Semestre: ${course.grade}`}</p>
        {/* <button className="curriculum-btn">View Trips</button> */}
      </div>
    </div>
  )
}

export default ProgressCard