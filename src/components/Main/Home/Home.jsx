import React from "react";
import logoGrande from "../../../assets/logoGrande.png";
import imagenes from "../../../assets/imagenes.png";
import imgEj from "../../../assets/imagen-ej.png";
import img10 from "../../../assets/img10.png";
import chatbotImg from "../../../assets/chatbot.png";
import img8 from "../../../assets/img8.png";
import img12 from "../../../assets/img12.png";

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
      <article id="art4">
        <div>
          <h2>Contacta directamente con profesionales y voluntarios</h2>
          <p>Psicólogos, trabajadores y educadores sociales, pedagogos... El mejor equipo está a tu disposición.</p>
          <button className="secondBtn">Conócelos</button>
        </div>
        <img src={img10} alt="img 10" />
      </article>
      <article id="art5">
        <img src={chatbotImg} alt="chatbot img" />
        <div>
          <h2>Chat 24h</h2>
          <p>Ten acceso a un acompañamiento 24h los 365 dias del año.</p>
          <button className="secondBtn">Chatea</button>
        </div>
      </article>
      <article id="art6">
        <div>
          <h2>Más información</h2>
          <p>Resuelve todas tus dudas sobre “Entre Familias” o sobre el acogimiento familiar.</p>
          <button className="secondBtn">Accede</button>
        </div>
        <img src={img8} alt="img8" />
      </article>
      <article id="art7">
        <img src={img12} alt="img12" />
        <div>
          <h2>Perfil</h2>
          <p>Gestiona y visualiza toda la información sobre tu familia y tu actividad en la comunidad</p>
          <button className="secondBtn">Crea tu perfil</button>
        </div>
      </article>
    </div>
  )
};

export default Home;
