import React, {useState} from "react";
import Nav from "./Nav";
import {Link}from "react-router-dom";
import loginLogo from "../../assets/acc-circle.png";
import voluntariadoLogo from "../../assets/voluntariado-logo.png";
import logoGrande from "../../assets/logoGrande.png"
import axios from "axios";
import { useForm } from "react-hook-form";
import Dialog from '@mui/material/Dialog';




const Header = () => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [changeToSignUp, setchangeToSignUp] = useState(false);

  const loginUser = async(log)=>{
    const res = await axios.post("http://localhost:5000/api/users/login",log);
    const data = res.data;
    console.log(data);
    localStorage.setItem("token",data.token);
    if(data.message==='Correct credentials'){
    }
  }

  const signUpUser = async (entry) =>{
    console.log(entry);
    try {
      const res = await axios.post("http://localhost:5000/api/users/create", entry);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setchangeToSignUp(false)
  };

  const goToSignUp = () =>{
    setchangeToSignUp(true);
  }

  return (
    <header>
      <div id="divLogos">
      <Link to="/maintenance"><img src={voluntariadoLogo} alt="voluntariado logo"/></Link>
      <img onClick={handleOpen}src={loginLogo} alt="login logo" />
          
      </div>
      <Dialog onClose={handleClose} open={open}>
        {changeToSignUp?
         <form className="formPopup" onSubmit={handleSubmit(signUpUser)}>
          <img src={logoGrande} alt="logoGrande" />
          <h2>Crea tu cuenta</h2>
          <p>Unete a nuestra comunidad y conecta con familias, profesionales y voluntarios.</p>
          <label htmlFor="email">Correo electronico*</label>
          <input {...register("email")} name="email" type="text"  required/>
          <label htmlFor="pass1">Contraseña*</label>
          <input {...register("pass1")} name="pass1" type="password"  required/>
          <label htmlFor="pass2">Repite la contraseña*</label>
          <input {...register("pass2")} name="pass2" type="password"  required/>
          <label htmlFor="birthday">Fecha de nacimiento*</label>
          <input {...register("birthday")} type="date" name="birthday" />
          <button type="submit" className="mainBtn">Registrarme</button>
        </form>
        :          
        <form className="formPopup" onSubmit={handleSubmit(loginUser)}>
            <img src={logoGrande} alt="logoGrande" />
            <h2>Empezar</h2>
            <p>Unete a nuestra comunidad y conecta con familias, profesionales y voluntarios.</p>
            <label htmlFor="email">Correo electrónico</label>
            <input {...register("email")} name="email" type="text" />
            <label htmlFor="pass1">Contraseña</label>
            <input {...register("pass1")} name="pass1" type="password"/>
            <button className="mainBtn" type="submit">Iniciar Sesión</button>
            <button onClick={goToSignUp} className="secondBtn">Hazte miembro</button>
          </form>}
      </Dialog>
      <Nav/>
    </header>
  )
};

export default Header;
