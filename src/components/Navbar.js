import React from "react";
import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="#About">About</a>
      <a href="#Education">Educación</a>
      <a href="#Skills">Habilidades</a>
      <a href="#Contact">Contacto</a>
    </NavbarWrapper>
  );
}

export default Navbar;
