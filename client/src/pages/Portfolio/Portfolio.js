import React from "react";
import Card from "react-bootstrap/Card";
import "./Portfolio.css";
import Posme from "../../images/posme.png";

const Portfolio = _ => {
  return (
    <>
      <section id="portfolio" className='bg-primary'>
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
            Portfolio
          </h2>
        <div className='card_area'>          
          <Card className="portfolioApps" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Posme} />
            <Card.Body>
              <Card.Title>POSME</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                React, React Hooks, MongoDB, Material UI, Passport, AWS S3
              </Card.Subtitle>
              <Card.Text>
                POSME (Point of Sale Made Easy) is a point-of-sale system for
                small businesses to use in their daily operations. It makes
                transactions efficient and simple while also tracking data such
                as sales and inventory.
              </Card.Text>
              <Card.Link
                target="_blank"
                href="https://morning-hamlet-37219.herokuapp.com/"
              >
                Deployed Site
              </Card.Link>
              <Card.Link
                target="_blank"
                href="https://github.com/kumikonomura/posme.git"
              >
                GitHub Repo
              </Card.Link>
            </Card.Body>
          </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
