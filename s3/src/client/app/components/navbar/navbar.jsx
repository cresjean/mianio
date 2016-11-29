import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import  SearchForm  from '../search/search.jsx';

require ('./navbar.scss');
const NavbarComponent = (props) => {
    return (
      <Navbar collapseOnSelect className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">面流科技</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">注册</NavItem>
            <NavItem eventKey={2} href="#">登陆</NavItem>
          </Nav>
          <Navbar.Form pullRight>
            <SearchForm />
          </Navbar.Form>


        </Navbar.Collapse>

      </Navbar>
    )
}
export default NavbarComponent;
