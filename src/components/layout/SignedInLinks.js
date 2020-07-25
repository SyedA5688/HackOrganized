import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function SignedInLinks() {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/teambuilder">TeamBuilder</Nav.Link>
          <Nav.Link href="/brainstorm">BrainStorm</Nav.Link>
          <Nav.Link href="/projectdetails">Project Details</Nav.Link>
          <Nav.Link href="/assignments">Assignments</Nav.Link>
          <Nav.Link href="/currentwork">Current Work</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
        </Nav>
        <Nav className="mr-sm-2">
          <Nav.Link href="/account">Account</Nav.Link>
          {/* Signout Button */}
          <Button variant="secondary" className="ml-2" onClick={() => {}} >Logout</Button>{' '}
        </Nav>
      </Navbar.Collapse>
  )
}