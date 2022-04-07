import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Emin's>"}</i>
        <span>recipes</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu osman={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
