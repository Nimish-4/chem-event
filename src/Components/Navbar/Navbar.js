import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home" className='nav-logo'>
          <img src="https://i.ibb.co/PTBCt3X/image.png" alt="" />
          {/* <img src="https://media-exp1.licdn.com/dms/image/C560BAQG2cySl5XOSeQ/company-logo_200_200/0/1619434038370?e=2147483647&v=beta&t=qIJfz8uubOhse3tqpCvxWB9bPtE7xuMnEe4JrqGbipY" alt="" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Link className="nav-link" to="/chem-event">Home</Link>
            <Link className="nav-link" to="/events">Events</Link>
            <Link className="nav-link" to="/sponsors">Our Sponsors</Link>
            <Link className="nav-link" to="/team">Core Team</Link>
            {/* <Link className="nav-link" to="/contactus">Contact Us</Link> */}
          </Nav>
          <Nav>
            <Link className="nav-link" to="/registration">Registration</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
            <Navbar.Brand id='college-logo'  className='nav-logo'>
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQG2cySl5XOSeQ/company-logo_200_200/0/1619434038370?e=2147483647&v=beta&t=qIJfz8uubOhse3tqpCvxWB9bPtE7xuMnEe4JrqGbipY" alt="" />
        </Navbar.Brand>
        <Navbar.Brand id='college-logo'  className='nav-logo'>
            <img src="https://www.indianchamber.org/wp-content/uploads/2019/03/IIChE-LOGO-PNG-300x300.png" alt="" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;