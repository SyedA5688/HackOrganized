import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function SignedInLinks() {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/teambuilder">TeamBuilder</Nav.Link>
          <Nav.Link href="/brainstorm">BrainStorm</Nav.Link>
          <Nav.Link href="/projectdetails">Project Details</Nav.Link>
          <Nav.Link href="/teamassignments">Assignments</Nav.Link>
          <Nav.Link href="/currentlyworking">Currently Working</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
        </Nav>
        <Nav className="mr-sm-2">
          <Nav.Link href="/account">Account</Nav.Link>
          <Nav.Link href="/signout">Sign Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  )
}