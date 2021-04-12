import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../App.css";

function Navigation() {
  return (
    <Navbar collapseOnSelect fixed="top" expand = "sm" >
      <Navbar.Brand href = "/">Mengyue Zhang</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id = "responsive-navbar-nav">
          <Nav>
            <Nav.Link href = "/">About</Nav.Link>
            <Nav.Link href = "/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
