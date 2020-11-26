import React from "react";
import WelcomeText from "./components/WelcomeText/";
import Menu from "./components/Menu/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WelcomeText/>
        <Menu/>
      </div>
    </div>
  );
}

export default App;
