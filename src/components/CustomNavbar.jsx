import React from "react";
import { Link as ReactNavLink } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

const CustomNavbar = () => {
  return (
    <Navbar color="black" dark expand="md" fixed="" className="px-5">
      <NavbarBrand tag={ReactNavLink} to="/">
        Demo Project
      </NavbarBrand>

      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink tag={ReactNavLink} to="/create-user">
            Create User
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
