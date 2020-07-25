import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function SignedOutLinks() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="ml-3 mr-4" >HackOrganized</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/resources">Resources</Nav.Link>
      </Nav>
      <Nav className="mr-sm-2">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">SignUp</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}