import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import susi from '../component/logo/logo.png'

const NavbarCompo = () => {
  return (
   
     
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container >
      <Navbar.Brand href="#home">
            <img
              src={susi}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="logo"
            />
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Navbar.Brand href="#home">Kasir App</Navbar.Brand>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Promotion</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
}

export default NavbarCompo
