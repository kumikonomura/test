import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";

const NavBar = _ => {
  return (
    <>
      <Navbar className='bg-dark' expand="lg">
        <Navbar.Brand className='text-white' href="#home">KUMIKO NOMURA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link className='text-white' href="#about">ABOUT ME</Nav.Link>
            <Nav.Link className='text-white' href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link className='text-white' href="#education">EDUCATION</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
