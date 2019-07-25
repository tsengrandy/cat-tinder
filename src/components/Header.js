import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Sophosciety</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/friends">Profiles</Nav.Link>
                <Nav.Link href='/'>Add a Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
  }
}
