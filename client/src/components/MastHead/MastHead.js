import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Dog from "../../images/what_colors_are_shiba_inu_dogs_187_600.jpg";
import GitHub from "../../images/GitHub-Mark-32px.png";
import "./MastHead.css";
import MediaQuery from "react-responsive";

const MastHead = _ => {
  return (
    <>
      <MediaQuery query="(max-width: 1455px)">
        <header id="profile" className="masthead text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            <div className="profileImage">
              <img className="avatar" src={Dog} />
            </div>

            {/* <h1 className="masthead-heading text-uppercase mb-0">
              KUMIKO NOMURA
            </h1> */}

            <p className="masthead-subheading font-weight-light mb-0">
              Full-Stack Developer
            </p>
            <br />
            <div className="social-icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kumikonomura"
              >
                <i class="fa fa-linkedin" />
              </a>
              <a target="_blank" href="https://github.com/kumikonomura">
                <i class="fa fa-github" />
              </a>
              <a href="mailto:knomurap@gmail.com">
                <i className="fa fa-envelope" />
              </a>
              <a href="resume">
                <i className="fa fa-file" />
              </a>
            </div>
          </div>
        </header>
      </MediaQuery>
    </>
  );
};

export default MastHead;
