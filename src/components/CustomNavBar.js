import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


export default class CustomNavBar extends Component {
  render() {
    return (
        <Navbar default collapseOnSelect id="top">
            <Navbar.Header>
                <Navbar.Brand>

                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
                <Nav pullRight>

                    <NavItem eventKey={2} >Projects</NavItem>

                    <NavItem eventKey={3} >About</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
  }
}
