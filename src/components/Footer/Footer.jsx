import React from "react";
import colaboradores from "../../assets/colaboradores.png";

const Footer = () => {
  return (
    <footer>
      <div id="footer1">
        <a>Aviso Legal</a>
        <a>Política de Privacidad</a>
        <a>Política de cookies</a>
      </div>
      <div id="footer2">
        <img src={colaboradores} alt="colaboradores" />
        <p>@2022 ENTREFAMILIAS</p>
      </div>
    </footer>

  )
};

export default Footer;
