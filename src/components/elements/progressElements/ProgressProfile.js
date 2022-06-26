import React, { useState } from "react";


const ProgressProfile = () => {
  const [userData, setUserData] = useState({
    Nombre: 'Ferney Segura',
    Papa: 3.9,
    Papi: 4.2,
    CredTotal: 165,
    CredCurs: 70,
    DisOpt: 80,
    DisObl: 60,
    FunOpt: 60,
    FunObl: 30,
    LibEle: 75,
  });
  return (
    <div className="progress-profile-card">
      <div className="progress-profile-ds-top"></div>
      <div className="progress-profile-avatar-holder">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein" />
      </div>
      <div className="progress-profile-info">
        <div className="progress-profile-name">
          <span>{userData.Nombre}</span>
        </div>
        <div className="progress-profile-ds-info">
          <div className="progress-profile-ds">
            <h6>P.A.P.A</h6>
            <p>{userData.Papa}</p>
          </div>
          <div className="progress-profile-ds">
            <h6>P.A.P.I</h6>
            <p>{userData.Papi}</p>
          </div>
          <div className="progress-profile-ds">
            <h6>Creditos</h6>
            <p>{userData.CredCurs}/{userData.CredTotal}</p>
          </div>
        </div>
        <div className="progress-profile-ds-credits">
          <h5>Avance de creditos</h5>
          <div className="progress-profile-type">
            <span className="title">Disciplinar Optativa</span>
            <div className="progress-profile-bar" style={{ width: `${userData.DisOpt}%` }}></div>
            <div className="progress-bar-percentage" style={{ width: `${userData.DisOpt}%` }}><div>{userData.DisOpt}%</div></div>
          </div>
          <div className="progress-profile-type">
            <span className="title">Disciplinar Obligatoria</span>
            <div className="progress-profile-bar" style={{ width: `${userData.DisObl}%` }}></div>
            <div className="progress-bar-percentage" style={{ width: `${userData.DisObl}%` }}><div>{userData.DisObl}%</div></div>
          </div>
          <div className="progress-profile-type">
            <span className="title">Fundamental Optativa</span>
            <div className="progress-profile-bar" style={{ width: `${userData.FunOpt}%` }}></div>
            <div className="progress-bar-percentage" style={{ width: `${userData.FunOpt}%` }}><div>{userData.FunOpt}%</div></div>
          </div>
          <div className="progress-profile-type">
            <span className="title">Fundamental Obligatoria</span>
            <div className="progress-profile-bar" style={{ width: `${userData.FunObl}%` }}></div>
            <div className="progress-bar-percentage" style={{ width: `${userData.FunObl}%` }}><div>{userData.FunObl}%</div></div>
          </div>
          <div className="progress-profile-type">
            <span className="title">Libre Eleccion</span>
            <div className="progress-profile-bar" style={{ width: `${userData.LibEle}%` }}></div>
            <div className="progress-bar-percentage" style={{ width: `${userData.LibEle}%` }}><div>{userData.LibEle}%</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressProfile