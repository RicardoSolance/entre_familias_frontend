import React from "react";
import Nav from "./Nav";
import {Link}from "react-router-dom";
import loginLogo from "../../assets/acc-circle.png";
import voluntariadoLogo from "../../assets/voluntariado-logo.png";
import logoGrande from "../../assets/logoGrande.png"
import axios from "axios";
import { useForm } from "react-hook-form";
import Popup from 'reactjs-popup';



const Header = () => {
  const { register, handleSubmit } = useForm();

  const loginUser = async(log)=>{
    const res = await axios.post("http://localhost:5000/api/users/login",log);
    const data = res.data;
    console.log(data);
    if(data.message==='Correct credentials'){
    }
  }

  return (
    <header>
      <div id="divLogos">
        <img src={voluntariadoLogo} alt="voluntariado logo"/>
        <Popup trigger={<img src={loginLogo} alt="login logo"/>} position="left top">
          <form onSubmit={handleSubmit(loginUser)}>
            <img src={logoGrande} alt="logoGrande" />
            <h2>Empezar</h2>
            <p>Unete a nuestra comunidad y conecta con familias, profesionales y voluntarios.</p>
            <label htmlFor="email">Correo electrónico</label>
            <input {...register("email")} name="email" type="text" />
            <label htmlFor="pass1">Contraseña</label>
            <input {...register("pass1")} name="pass1" type="password"/>
            <button className="mainBtn" type="submit">Iniciar Sesión</button>
            <button className="secondBtn"><Link to="/signup">Hazte miembro</Link></button>
          </form>
        </Popup>
      </div>
      <Nav/>
    </header>
  )
};

export default Header;
