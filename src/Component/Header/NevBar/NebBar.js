import React from "react";
import './NabBar.css';
import myLogo from'../../../image/my logo.png'

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NebBar = () => {
  return (
    <header className="header">
      <div className="container">
        
      <Navbar className="pt-0 pb-0"expand="lg">
      
        <Navbar.Brand as={Link} to="/" className="titel-logo">
          <img src={myLogo} style={{width:'60px', height:"55px"}} alt=""/>
          Shoman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggl-icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nab-items">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/project">Project</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      </div>
      
    </header>
  );
};

export default NebBar;
