import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
// import { GiHamburgerMenu } from "react-icons/gi";
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

        {/* <GiHamburgerMenu />  react iconstan hamburger almak istersek*/}
      </Hamburger>

      <Menu osman={isOpen}>
        <MenuLink onClick={() => setOpen(!isOpen)} to="/about">
          About
        </MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink onClick={() => setOpen(!isOpen)} to="/">
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
