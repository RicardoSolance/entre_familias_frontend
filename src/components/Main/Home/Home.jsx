import React from "react";
import logoGrande from "../../../assets/logoGrande.png";
import imagenes from "../../../assets/imagenes.png";
import imgEj from "../../../assets/imagen-ej.png"

const Home = () => {
  return (
    <div>
      <article id="art1">
        <img src={logoGrande} alt="logo grande"/>
        <div>
          <h1>Entre Familias</h1>
          <p>Ayudamos a familias de acogida en el proceso de adaptación del niño en el hogar. Todos nos hemos sentido solos, es el momento de unirse.</p>
          <button className="mainBtn">¡Te estamos esperando!</button>
        </div>
      </article>
      <article id="art2">
        <h1>Únete a nuestra comunidad:</h1>
        <img src={imagenes} alt="imagenes" />
      </article>
      <article id="art3">
        <h1>¿Que nos diferencia?</h1>
        <div>
          <img src={imgEj} alt="Imagen de ejemplo" />
          <div>
            <h2>Foro para familias de acogida</h2>
            <p>Tus problemas no son únicos, y la mejor ayuda te la brindan familias como la tuya.</p>
            <button className="secondBtn">Ver Listado</button>
          </div>
        </div>
      </article>
    </div>
  )
};

export default Home;
