import React from "react";
import Card from "react-bootstrap/Card";
import "./Skills.css";

const Skills = _ => {
  return (
    <>
      <section id="skills" className="bg-white">
        <div id="skills_title" className="container">
          <h2 className="page-section-heading text-center text-uppercase text-primary mb-0">
            dev tools
          </h2>
        </div>
        <div id="tools" className="container">
          <div className="card">
            <div id="javascript" className="card-content">
              Javascript
            </div>
            <div id="html" className="card-content">
              HTML
            </div>
            <div id="css" className="card-content">
              CSS
            </div>
            <div id="reactjs" className="card-content">
              React JS
            </div>
            <div id="nodejs" className="card-content">
              Node JS
            </div>
            <div id="materialui" className="card-content">
              Material UI
            </div>
            <div id="bootstrap" className="card-content">
              Bootstrap
            </div>
            <div id="visualstudio" className="card-content">
              Visual Studio Code
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
