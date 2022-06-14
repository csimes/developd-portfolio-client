import React from "react";
import "./App.css";
import ProjectIndex from "./components/projects/ProjectIndex";

const github = require("./assets/github-circle.svg") as string;
const linkedin = require("./assets/linkedin-circle.svg") as string;
// import logo from "./assets/transparent.png";

const App = () => {
  return (
    <div className="hero">
      <div className="intro">
        <img className="logo" src="" alt="" />
        <h1>Hey, I'm </h1>
        <h1 className="name">Cherron!</h1>
        <h1>Web Developer and owner of</h1> <h1 className="name">developd.</h1>
      </div>
      <div className="socials-group">
        <a href="https://github.com/csimes" target="_blank" rel="noreferrer">
          <img className="social" src={github} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/cherron-simes-1b016614b"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={linkedin} alt="" />
        </a>
      </div>
      <ProjectIndex />
    </div>
  );
};

export default App;
