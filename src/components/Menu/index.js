import React, { useState, useEffect } from "react";
import Resume from "../../assets/Elliot_Fouts_Resume.pdf"
import "./index.css";

export default function Menu(props) {
  const [isVisible, setIsVisible] = useState(false)

  // animate words in 
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  });

  // href was not working
  function handleResumeClick() {
    window.open(Resume);
  }

  return (
    <div className={`menu-container ${isVisible && "visible"}`}>
      <a onClick={handleResumeClick} className="menu-link resume">Resume</a>
      
      <a href="https://www.linkedin.com/in/elliotfouts/" rel="noreferrer" target="_blank" className="menu-link">Linkedin</a>
      <a href="https://github.com/elliotfouts" rel="noreferrer" target="_blank" className="menu-link">Github</a>
      <a href="mailto:elliotfouts@gmail.com" rel="noreferrer" className="menu-link">elliotfouts@gmail.com</a>
    </div>
  )
}