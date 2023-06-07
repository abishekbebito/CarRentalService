import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export function Navbarcom() {
  return (
    <div>
      <Navbar className="nav-bar" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Car Rentals</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/SignUp">
                <Nav.Link>SignUp</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/LogIn">
                <Nav.Link>LogIn</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
