import React from 'react'

const CurriculumCard = ({ course, getRequeriments }) => {

  const printResponse = (response) => {
    let stringResponse = ''
    response.map(element => {
      stringResponse = stringResponse + `${element.name} - ${element.code} - ${element.available ? 'La puedes ver' : element.passed ? 'Ya la viste' : 'Aun no la puedes ver'} \n`
    })
    if (!stringResponse)
      stringResponse = 'Esta materia no tiene prerrequisitos'
    alert(stringResponse)
  }

  return(
    <div className={`progress-card progress-card-background-${course.color}`}>
      <div className="progress-content">
        <h2 className="progress-title">
          {`${course.name} - ${course.code} ${course.passed !== 0 ? 'Completado!' : ''}`}
        </h2>
        <p className="progress-copy">{`Creditos: ${course.credits}`}</p>
        <p className="progress-copy">{`Habilidad: ${course.expertise}`}</p>
        <button className="curriculum-btn" onClick={() => {
          const response = getRequeriments(course.requirements)
          printResponse(response)
        }}>Prerrequisitos</button>
      </div>
    </div>
  )
}

export default CurriculumCard