import React from "react";
import Nav from "./Nav";
import Login from "../Main/Login";
import {Link}from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Nav/>
      <Link to="/login">Login</Link>
    </header>
  )
};

export default Header;
