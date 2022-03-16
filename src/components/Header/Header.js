import Link from 'next/link';
import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';

const Header = () =>  (

  <Navbar className="navBar" collapseOnSelect style={{backgroundColor: "#0F1624"}} expand="lg" variant="dark" fixed="top">
    <Container>
        
        <Navbar.Brand href="#home">Personal Showcase</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />    
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{width: "100%"}} defaultActiveKey="#home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#timeline">Timeline</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#accomplishments">Accomplishments</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

    </Container>
  </Navbar>

);

export default Header;
