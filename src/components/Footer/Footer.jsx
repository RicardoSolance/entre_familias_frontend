import React from "react";
import colaboradores from "../../assets/colaboradores.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div id="footer1">
        <a>Aviso Legal</a>
        <Link to="/privacy">Política de Privacidad</Link>
        <Link to="/cookies">Política de cookies</Link>
      </div>
      <div id="footer2">
        <img src={colaboradores} alt="colaboradores" />
        <p>@2022 ENTREFAMILIAS</p>
      </div>
    </footer>

  )
};

export default Footer;
