import React from "react";
import {Link}from "react-router-dom";
import Logo from "../../../assets/logoPrincipal.png";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="logo principal" />
      <Link to="/">Home</Link>
      <Link to="/forum">Foro</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
};

export default Nav;
