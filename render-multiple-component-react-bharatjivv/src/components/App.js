import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
 const projects = [
    {
      name: "AI Music Composer",
      description: "An app that composes music using artificial intelligence algorithms."
    },
    {
      name: "Smart Home Assistant",
      description: "A voice-controlled assistant that automates home devices."
    },
    {
      name: "Virtual Travel Experience",
      description: "A VR-based app that lets users explore global destinations virtually."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}


export default App;
