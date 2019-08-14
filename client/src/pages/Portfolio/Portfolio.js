import React from "react";
import Card from "react-bootstrap/Card";
import "./Portfolio.css";
import Dog from "../../images/what_colors_are_shiba_inu_dogs_187_600.jpg";

const Portfolio = _ => {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <hr />
          <Card className='portfolioApps' style={{ width: "18rem"  }}>
              <Card.Img variant='top' src={Dog} />
            <Card.Body>
              <Card.Title>POSME</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                React, React Hooks, MongoDB, Material UI, Passport
              </Card.Subtitle>
              <Card.Text>
                POSME (Point of Sale Made Easy) is a point-of-sale system for small businesses to use in their daily operations. It makes transactions efficient and simple while also tracking data such as sales and inventory.
              </Card.Text>
              <Card.Link href="#">Deployed Site</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
