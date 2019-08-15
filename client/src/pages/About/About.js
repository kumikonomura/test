import React from "react";
import "./About.css";

const About = _ => {
  return (
    <>
      <section class="page-section bg-white text-secondary mb-0" id="about">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-secondary">
            About
          </h2>

          <hr />
          <div class="row">
            <div class="col-lg-4 ml-auto">
              <p class="lead">
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </p>
            </div>
            <div class="col-lg-4 mr-auto">
              <p class="lead">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
