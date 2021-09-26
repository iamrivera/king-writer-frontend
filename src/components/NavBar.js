import React, { Component } from "react";
import "../bootstrap.min (1).css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand href="#home">Monarch Writer 👑</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/posts/new">
                Let's Write
              </Nav.Link>
              <Nav.Link as={Link} to="/posts">
                My Writing
              </Nav.Link>
              <Nav.Link as={Link} to="/quotes">
                Inspirational Quotes
              </Nav.Link>
              <Nav.Link as={Link} to="/photos">
                Inspirational Photos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
