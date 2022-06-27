import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CurriculumGraph from "./CurriculumGraph.js"
import Loading from '../elements/Loading'

const SearcherSection = ({ }) => {

  const token = useSelector((state) => state.token.value);
  const [data, setData] = useState();
  const [graph, setGraph] = useState();
  const [showGraph, setShowGraph] = useState(false);
  const [curricula, setCurricula] = useState();
  const [showCurricula, setShowCurricula] = useState(false);
  const [programCode, setProgramCode] = useState();
  const [curriculaCode, setCurriculaCode] = useState();

  useEffect(() => {
    const URLPrograms = process.env.REACT_APP_BACKEND_HOST + '/programs'
    fetch(URLPrograms, {
      headers: new Headers({ 'Authorization': token })
    }).then(response => response.json())
      .then(response => {
        console.log(response.success);
        setData(response.success)
      })
      .catch(error => console.error('Error:', error))
  }, []);

  const searchCourses = (code) => {
    console.log(code);
    setProgramCode(code);
    const URLCourses = process.env.REACT_APP_BACKEND_HOST + '/programs/curriculas/?program_code=2879';
    // const URLCourses = process.env.REACT_APP_BACKEND_HOST + `/programs/curriculas/?program_code=${code}`;
    fetch(URLCourses, {
      headers: new Headers({ 'Authorization': token })
    }).then(response => response.json())
      .then(response => {
        setCurricula(response.success.curriculas);
        setShowCurricula(true);
      }).catch(error => console.error('Error:', error))
  }

  const searchCurriculaInfo = (code) => {
    console.log(code);
    setCurriculaCode(code);
    const URLCourses = process.env.REACT_APP_BACKEND_HOST + '/programs/curriculas/?program_code=2879&curricula_code=287901';
    // const URLCourses = process.env.REACT_APP_BACKEND_HOST + `/programs/curriculas/?program_code=${programCode}&curricula_code=${code}`;
    fetch(URLCourses, {
      headers: new Headers({ 'Authorization': token })
    }).then(response => response.json())
      .then(response => {
        setGraph(response.success);
        console.log(response.success);
        setShowGraph(true);
      }).catch(error => console.error('Error:', error))
  }

  const card = (info, mode) => {
    const cards = info.map((program, index) => {
      return <div key={index} className={`program-card ${mode == 1 ? 'border-red' : 'border-blue'}`} onClick={() => mode == 1 ? searchCourses(program.code) : searchCurriculaInfo(program.code)}>
        <div className="program-card-title">{program.name}</div>
        <div className="program-card-code">{program.code}</div>
      </div>
    })
    return cards;
  }

  if (data) {
    return (
      <section
        className="hero section center-content"
      >
        <h1 className="mt-0 mb-16">
          <span className="text-color-primary">Buscador</span> de cursos
          <br />
        </h1>
        <div className="program-list">
          {card(data, 1)}
        </div>
        {showCurricula ? <div className="program-list">
          {card(curricula, 2)}
        </div> : null}
        {showGraph ? <div>
          <h2>La malla curricular seleccionada</h2>
          <CurriculumGraph className="illustration-section-01" GraphInfo={graph.semesters} />
        </div> : null}
      </section>
    );
  } else {
    return <Loading />
  }

}

export default SearcherSection;