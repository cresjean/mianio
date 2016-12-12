import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = (props) => {
    return (
      <Navbar collapseOnSelect className="navbar">
        <Navbar.Header>
          <Navbar.Brand>

            <Link to="/">面流科技</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
              <Nav>
                <LinkContainer to="new">
                    <NavItem eventKey={1} >New</NavItem>
                </LinkContainer>
              </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
}
export default NavbarComponent;
