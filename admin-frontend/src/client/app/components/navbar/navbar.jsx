import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

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
              <Nav>
                <NavItem eventKey={1} href="#">文章列表</NavItem>
                <NavItem eventKey={2} href="#">数据统计</NavItem>
                </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
}
export default NavbarComponent;
