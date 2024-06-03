import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const HomeNav = () => {
  return (
    <div>
        <Container>
        <Navbar bg="light" data-bs-theme="light">
            <Nav className="me-auto">
            <Nav.Link className="textAlign" href="home">Home</Nav.Link>
            <Nav.Link className="textAlign" href="#aboutus">About</Nav.Link>
            <Nav.Link className="textAlign" href="#contactus">Contact us</Nav.Link>
            <Nav.Link className="textAlign" href="#ourDoctors">Our Doctors</Nav.Link>
            <Button href="/makeappointment/">Make Appointment</Button>
          </Nav>
          </Navbar>
        </Container>
    </div>
  )
}

export default HomeNav
