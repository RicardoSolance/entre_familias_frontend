import React from "react";
import mantenimiento from "../../../assets/mantenimiento.png";
import social from "../../../assets/social.png";

const Maintenance = () => {
  return (
    <div id="divMantenimiento">
      <div>
        <h2>Estamos construyendo la página para tí</h2>
        <p>Lamentablemente, la página que estas buscando se encuentra en construcción. 

Suscribete a nuesto email y te notificaremos cuando este disponible. ¡Gracias por ser parte de nuestra comunidad!</p>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <button className="mainBtn">Suscribirse</button>
        </form>
        <p>También puedes buscarnos en nuestras redes sociales:</p>
        <img src={social} alt="social" />
      </div>
      <img src={mantenimiento} alt="mantenimiento" />
    </div>
  )
};

export default Maintenance;
