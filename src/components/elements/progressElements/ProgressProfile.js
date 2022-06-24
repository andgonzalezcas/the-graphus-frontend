import React from "react";

import walking from '../../../assets/images/walking.gif'
import winning from '../../../assets/images/winning.gif'

const ProgressProfile = ({user, historyData}) => {
  return(
    <div className="progress-profile-card">
      <div className="progress-profile-ds-top"></div>
      <div className="progress-profile-avatar-holder">
        <img src={user.image} alt="User image" />
      </div>
      <div className="progress-profile-name">
        <p>{user.name}</p>
      </div>
      <div className="progress-profile-ds-info">
        <div className="progress-profile-ds progress-profile-papa">
          <h6 title="Number of pens created by the user">PAPA</h6>
          <p>{historyData.PAPA.toFixed(2)}</p>
        </div>
        <div className="progress-profile-ds progress-profile-pappi">
          <h6 title="Number of projects created by the user">CREDITOS VISTOS</h6>
          <p>{historyData.credits_seen} / {historyData.total_credits}</p>
        </div>
      </div>
      <div className="progress-profile-ds-skill" style={{marginBottom: '70px'}}>
        <h6>AVANCE TOTAL<i className="progress-profile-fa progress-profile-fa-code" aria-hidden="true"></i></h6>
        <div className="progress-profile-skill progress-profile-html">
          <h6><i className="progress-profile-fab progress-profile-fa-html5"></i>
            <div className="progress-profile-avatar-holder">
              {
                historyData.percentage >= 100 ?
                <img src={winning} /> :
                <img src={walking} />
              }
            </div>
          </h6>
          <div className="progress-profile-bar" style={{width: historyData.percentage+'%'}}>
            <p>{historyData.percentage.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="progress-profile-ds-skill">
        <h6>Tipologías <i className="progress-profile-fa progress-profile-fa-code" aria-hidden="true"></i></h6>
        <div className="progress-profile-skill progress-profile-html">
          <h6><i className="progress-profile-fab progress-profile-fa-html5"></i>DISCIPLINAR OPTATIVA</h6>
          <div className="progress-profile-bar" style={{width: "95%"}}>
            <p>95%</p>
          </div>
        </div>
        <div className="progress-profile-skill progress-profile-css">
          <h6><i className="progress-profile-fab progress-profile-fa-css3-alt"></i>FUND. OBLIGATORIA</h6>
          <div className="progress-profile-bar" style={{width: "90%"}}>
            <p>90%</p>
          </div>
        </div>
        <div className="progress-profile-skill progress-profile-javascript">
          <h6><i className="progress-profile-fab progress-profile-fa-js"></i>FUND. OPTATIVA</h6>
          <div className="progress-profile-bar" style={{width: "75%"}}>
            <p>75%</p>
          </div>
        </div>
        <div className="progress-profile-skill progress-profile-javascript">
          <h6><i className="progress-profile-fab progress-profile-fa-js"></i>DISCIPLINAR OBLIGATORIA</h6>
          <div className="progress-profile-bar" style={{width: "75%"}}>
            <p>75%</p>
          </div>
        </div>
        <div className="progress-profile-skill progress-profile-javascript">
          <h6><i className="progress-profile-fab progress-profile-fa-js"></i>LIBRE ELECCIÓN</h6>
          <div className="progress-profile-bar" style={{width: "85%"}}>
            <p>85%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressProfile