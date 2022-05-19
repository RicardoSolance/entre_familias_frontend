import React from "react";
import colaboradores from "../../assets/colaboradores.png";

const Footer = () => {
  return (
    <footer>
      <div id="footer1">
        <a href="">Aviso Legal</a>
        <a href="">Política de Privacidad</a>
        <a href="">Política de cookies</a>
      </div>
      <div id="footer2">
        <img src={colaboradores} alt="colaboradores" />
        <p>@2022 ENTREFAMILIAS</p>
      </div>
    </footer>

  )
};

export default Footer;
