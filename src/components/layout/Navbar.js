import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className="mr-sm-2">
          <Nav.Link href="#account">Account</Nav.Link>
          <Nav.Link href="#signin">SignIn</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  )
}