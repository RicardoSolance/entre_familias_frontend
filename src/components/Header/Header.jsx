import React from "react";
import Nav from "./Nav";
import {Link}from "react-router-dom";
import loginLogo from "../../assets/acc-circle.png"
import voluntariadoLogo from "../../assets/voluntariado-logo.png"


const Header = () => {
  return (
    <header>
      <div id="divLogos">
        <img src={voluntariadoLogo} alt="voluntariado logo"/>
        <Link to="/login"><img src={loginLogo} alt="login logo"/></Link>
      </div>
      <Nav/>
    </header>
  )
};

export default Header;
