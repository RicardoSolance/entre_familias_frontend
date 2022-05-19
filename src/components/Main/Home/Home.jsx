import React from "react";
import logoGrande from "../../../assets/logoGrande.png";

const Home = () => {
  return (
    <div>
      <img src={logoGrande} alt="logo grande"/>
      <article>
        <h1>Entre Familias</h1>
        <p>Ayudamos a familias de acogida en el proceso de adaptación del niño en el hogar. Todos nos hemos sentido solos, es el momento de unirse.</p>
        <button>¡Te estamos esperando!</button>
      </article>
    </div>
  )
};

export default Home;
