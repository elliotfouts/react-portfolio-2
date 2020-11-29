import React, { useEffect, useState } from "react";
import "./index.css";

export default function WelcomeText(props) {
  const [isVisible, setIsVisible] = useState(false)
  // animate words in 
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  });
  return (
    <div className={`welcome-text-container ${isVisible && "visible"}`}>
      <h2 className="welcome-text-subtext">Hello, my name is</h2>
      <h1 className="welcome-text-main-text">Elliot Fouts.</h1>
      <h2 className="welcome-text-subtext">I am a full-stack engineer.</h2>
    </div>
  )
}