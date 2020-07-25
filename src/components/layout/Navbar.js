import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">HackOrganized</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/teambuilder">TeamBuilder</Nav.Link>
          <Nav.Link href="/brainstorm">BrainStorm</Nav.Link>
          <Nav.Link href="/projectdetails">Project Details</Nav.Link>
          <Nav.Link href="/teamassignments">Assignments</Nav.Link>
          <Nav.Link href="/currentlyworking">Currently Working</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
        </Nav>
        <Nav className="mr-sm-2">
          <Nav.Link href="/account">Account</Nav.Link>
          <Nav.Link href="/signin">SignOut</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}