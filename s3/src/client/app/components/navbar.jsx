import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import  Form  from './search.jsx';

require ('../sass/navbar.scss');
const NavbarComponent = (props) => {

    return (
      <Navbar collapseOnSelect className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">面流IO</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>


        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Form />
          </Navbar.Form>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Login</NavItem>
            <NavItem eventKey={2} href="#">SignUp</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}


export default NavbarComponent;
