import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import Scrollspy from "react-scrollspy";

const NavBar = _ => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">KUMIKO NOMURA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Scrollspy
              items={["portfolio", "about", "contact"]}
              currentClassName="is-current"
            >
              <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
