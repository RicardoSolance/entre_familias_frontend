import React from "react";
import {Link}from "react-router-dom";
import Logo from "../../../assets/logoPrincipal.png";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="logo principal" />
      <div>
        <Link to="/" onClick={()=>window.scrollTo(0,170)}>¿Quiénes somos?</Link>
        <Link to="/forum">Foro</Link>
        <Link to="/" onClick={()=>window.scrollTo(0,2300)}>Ayuda profesional</Link>
        <Link to="/maintenance">Eventos</Link>
        <Link to="/" onClick={()=>window.scrollTo(0,4900)}>Información</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/" onClick={()=>window.scrollTo(0,2900)}>Contacto</Link>
      </div>
    </nav>
  )
};

export default Nav;
