import React from "react";

const ProgressProfile = () => {
  return(
    <div className="progress-profile-card">
      <div className="progress-profile-ds-top"></div>
      <div className="progress-profile-avatar-holder">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein" />
      </div>
      <div className="progress-profile-name">
        <a href="https://codepen.io/AlbertFeynman/" target="_blank">Albert Feynman</a>
        <h6 title="Followers"><i className="progress-profile-fas progress-profile-fa-users"></i> <span className="progress-profile-followers">90</span></h6>
      </div>
      <div className="progress-profile-button">
        <a href="#" className="progress-profile-btn" onmousedown="follow();">Follow <i className="progress-profile-fas progress-profile-fa-user-plus"></i></a>
      </div>
      <div className="progress-profile-ds-info">
        <div className="progress-profile-ds progress-profile-pens">
          <h6 title="Number of pens created by the user">Pens <i className="progress-profile-fas progress-profile-fa-edit"></i></h6>
          <p>29</p>
        </div>
        <div className="progress-profile-ds progress-profile-projects">
          <h6 title="Number of projects created by the user">Projects <i className="fas fa-project-diagram"></i></h6>
          <p>0</p>
        </div>
        <div className="progress-profile-ds progress-profile-posts">
          <h6 title="Number of posts">Posts <i className="progress-profile-fas progress-profile-fa-comments"></i></h6>
          <p>0</p>
        </div>
      </div>
      <div className="progress-profile-ds-skill">
        <h6>Skill <i className="progress-profile-fa progress-profile-fa-code" aria-hidden="true"></i></h6>
        <div className="progress-profile-skill progress-profile-html">
          <h6><i className="progress-profile-fab progress-profile-fa-html5"></i> HTML5 </h6>
          <div className="progress-profile-bar progress-profile-bar-html">
            <p>95%</p>
          </div>
        </div>
        <div className="progress-profile-skill progress-profile-css">
          <h6><i className="progress-profile-fab progress-profile-fa-css3-alt"></i> CSS3 </h6>
          <div className="progress-profile-bar progress-profile-bar-css">
            <p>90%</p>
          </div>
        </div>
        <div className="progress-profile-skill progress-profile-javascript">
          <h6><i className="progress-profile-fab progress-profile-fa-js"></i> JavaScript </h6>
          <div className="progress-profile-bar progress-profile-bar-js">
            <p>75%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressProfile