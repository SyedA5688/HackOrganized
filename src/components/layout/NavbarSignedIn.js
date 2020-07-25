import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function NavbarSignedIn() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="ml-3 mr-4" >HackOrganized</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Hommme</Nav.Link>
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
    </Navbar>
  )
}