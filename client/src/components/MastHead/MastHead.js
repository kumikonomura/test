import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Dog from "../../images/what_colors_are_shiba_inu_dogs_187_600.jpg";
import "./MastHead.css";

const MastHead = _ => {
  return (
    <>
      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          <div className="profileImage">
            <img className="avatar" src={Dog} />
          </div>

          <h1 class="masthead-heading text-uppercase mb-0">KUMIKO NOMURA</h1>

          <div class="divider-custom divider-light">
            <div class="divider-custom-line" />
            <div class="divider-custom-icon">
              <i class="fas fa-star" />
            </div>
            <div class="divider-custom-line" />
          </div>

          <p class="masthead-subheading font-weight-light mb-0">
            Full-Stack Developer
          </p>
        </div>
      </header>
    </>
  );
};

export default MastHead;
