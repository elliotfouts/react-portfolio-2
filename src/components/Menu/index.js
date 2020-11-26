import React from "react";
import Resume from "../../assets/Elliot_Fouts_Resume.pdf"
import "./index.css";

export default function Menu(props) {

  return (
    <div className="menu-container">
      {/* <h2 className="menu-title">About</h2> */}
      <a href={Resume} rel="noreferrer" target="_blank" className="menu-link resume">Resume</a>
      {/* <a className="menu-link">Who is this guy?</a> */}

      {/* <h2 className="menu-title">Connect</h2> */}
      <a href="https://www.linkedin.com/in/elliotfouts/" rel="noreferrer" target="_blank" className="menu-link">Linkedin</a>
      <a href="https://github.com/elliotfouts" rel="noreferrer" target="_blank" className="menu-link">Github</a>
      <a href="mailto:elliotfouts@gmail.com" rel="noreferrer" className="menu-link">elliotfouts@gmail.com</a>
    </div>
  )
}