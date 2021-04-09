import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Naver(props) {
  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/about">Pupster</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/discoveries">Discoveris</Nav.Link>
      <Nav.Link href="/search">Search</Nav.Link>
    </Nav>
  </Navbar>
  )
}
export default Naver;