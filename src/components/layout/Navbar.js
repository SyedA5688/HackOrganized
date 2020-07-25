import React from 'react';
import { Navbar } from 'react-bootstrap';
//import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="ml-2" >HackOrganized</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <SignedOutLinks />
    </Navbar>
  )
}