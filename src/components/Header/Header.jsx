import React from "react";
import Nav from "./Nav";
import {Link}from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Nav/>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </header>
  )
};

export default Header;
