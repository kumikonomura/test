import React from "react";
import Card from "react-bootstrap/Card";
import "./Skills.css";

// const Skills = _ => {
//   return (
//     <>
//     <section id='skills'>
//       <div id='skills_title' className='container'>
//         <h2 id='dev_tools' className='page-section-heading text-center text-uppercase mb-0'>
//           dev tools
//         </h2>
//       </div>
//       {/* // Skills */}
//       <div class="card-columns">
//   <div class="card bg-primary">
//     <div class="card-body text-center">
//       <p class="card-text">Some text inside the first card</p>
//     </div>
//   </div>
//   <div class="card bg-warning">
//     <div class="card-body text-center">
//       <p class="card-text">Some text inside the second card</p>
//     </div>
//   </div>
//   <div class="card bg-success">
//     <div class="card-body text-center">
//       <p class="card-text">Some text inside the third card</p>
//     </div>
//   </div>
//   <div class="card bg-danger">
//     <div class="card-body text-center">
//       <p class="card-text">Some text inside the fourth card</p>
//     </div>
//   </div>
//   <div class="card bg-light">
//     <div class="card-body text-center">
//       <p class="card-text">Some text inside the fifth card</p>
//     </div>
//   </div>
//   <div class="card bg-info">
//     <div class="card-body text-center">
//       <p class="card-text">Some text inside the sixth card</p>
//     </div>
//   </div>
// </div>
//     </section>
//     </>
//   )
// }

// export default Skills

const Skills = _ => {
  return (
    <>
      <section id="skills">
        <div id="skills_title" className="container">
          <h2
            id="dev_tools"
            className="page-section-heading text-center text-uppercase mb-0"
          >
            dev tools
          </h2>
        </div>
        <div id="tools" className="container">
          <div className="card">
            <div id="javascript" className="card-content">
              Javascript
            </div>
          </div>
          <div className="card">
            <div id="html" className="card-content">
              HTML
            </div>
          </div>
          <div className="card">
            <div id="css" className="card-content">
              CSS
            </div>
          </div>
          <div className="card">
            <div id="reactjs" className="card-content">
              React JS
            </div>
          </div>
          <div className="card">
            <div id="nodejs" className="card-content">
              Node JS
            </div>
          </div>
          <div className="card">
            <div id="materialui" className="card-content">
              Material UI
            </div>
          </div>
          <div className="card">
            <div id="bootstrap" className="card-content">
              Bootstrap
            </div>
          </div>
          <div className="card">
            <div id="visualstudio" className="card-content">
              Visual Studio Code
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Skills;
