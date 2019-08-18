import React from "react";
import Card from "react-bootstrap/Card";
import "./Portfolio.css";
import Posme from "../../images/posme.png";
import Popup from "reactjs-popup";
import MediaQuery from 'react-responsive'

const Portfolio = _ => {
  return (
    <>
    <MediaQuery query='(max-width: 1455px)'>
      <section id="portfolio" className="bg-primary">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
            Portfolio
          </h2>
        </div>
        {/* </section> */}
        <div id='projects' className="container">
          <div className="row">
            <div className="col-sm">
              {/* POSME */}
              <Card className="posme" style={{ width: "18rem" }}>
                <Card.Img id="image" variant="top" src={Posme} />
                <Card.Body>
                  <Card.Title id="title">POSME</Card.Title>
                  <Card.Subtitle id="subtitles" className="mb-2 text-muted">
                    React, React Hooks, MongoDB, Material UI, Passport, AWS S3
                  </Card.Subtitle>
                  <Card.Text>
                    POSME (Point of Sale Made Easy) is a point-of-sale system
                    for small businesses to use in their daily operations. It
                    makes transactions efficient and simple while also tracking
                    data such as sales and inventory.
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
            <div className="col-sm">
              {/* WHERE'S THE OFFICE */}
            <Card className="posme" style={{ width: "18rem" }}>
                <Card.Img id="image" variant="top" src={Posme} />
                <Card.Body>
                  <Card.Title id="title">POSME</Card.Title>
                  <Card.Subtitle id="subtitles" className="mb-2 text-muted">
                    React, React Hooks, MongoDB, Material UI, Passport, AWS S3
                  </Card.Subtitle>
                  <Card.Text>
                    POSME (Point of Sale Made Easy) is a point-of-sale system
                    for small businesses to use in their daily operations. It
                    makes transactions efficient and simple while also tracking
                    data such as sales and inventory.
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
            <div className="col-sm">
              {/* PROJECT 3 */}
            <Card className="posme" style={{ width: "18rem" }}>
                <Card.Img id="image" variant="top" src={Posme} />
                <Card.Body>
                  <Card.Title id="title">POSME</Card.Title>
                  <Card.Subtitle id="subtitles" className="mb-2 text-muted">
                    React, React Hooks, MongoDB, Material UI, Passport, AWS S3
                  </Card.Subtitle>
                  <Card.Text>
                    POSME (Point of Sale Made Easy) is a point-of-sale system
                    for small businesses to use in their daily operations. It
                    makes transactions efficient and simple while also tracking
                    data such as sales and inventory.
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
        </div>
      </section>
      </MediaQuery>
      {/* <section id="portfolio" className="bg-primary">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
            Portfolio
          </h2>
        </div>
        <div id="projects" >
          <div>
            <div className="card_area">
              <Card className="posme" style={{ width: "18rem" }}>
                <Card.Img id="image" variant="top" src={Posme} />
                <Card.Body>
                  <Card.Title id="title">POSME</Card.Title>
                  <Card.Subtitle id="subtitles" className="mb-2 text-muted">
                    React, React Hooks, MongoDB, Material UI, Passport, AWS S3
                  </Card.Subtitle>
                  <Card.Text> */}
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. */}
      {/* POSME (Point of Sale Made Easy) is a point-of-sale system
                    for small businesses to use in their daily operations. It
                    makes transactions efficient and simple while also tracking
                    data such as sales and inventory.
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
                  > */}
      {/* GitHub Repo
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Portfolio;
