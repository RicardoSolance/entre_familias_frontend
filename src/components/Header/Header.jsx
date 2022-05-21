import React, {useState} from "react";
import Nav from "./Nav";
import {Link}from "react-router-dom";
import loginLogo from "../../assets/acc-circle.png";
import voluntariadoLogo from "../../assets/voluntariado-logo.png";
import logoGrande from "../../assets/logoGrande.png"
import axios from "axios";
import { useForm } from "react-hook-form";
import 'reactjs-popup/dist/index.css';
import Dialog from '@mui/material/Dialog';




const Header = () => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false)

  const loginUser = async(log)=>{
    const res = await axios.post("http://localhost:5000/api/users/login",log);
    const data = res.data;
    console.log(data);
    localStorage.setItem("token",data.token);
    if(data.message==='Correct credentials'){
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <div id="divLogos">
      <Link to="/maintenance"><img src={voluntariadoLogo} alt="voluntariado logo"/></Link>
      <img onClick={handleOpen}src={loginLogo} alt="login logo" />
          
      </div>
      <Dialog onClose={handleClose} open={open}>
          <form className="formPopup" onSubmit={handleSubmit(loginUser)}>
            <img src={logoGrande} alt="logoGrande" />
            <h2>Empezar</h2>
            <p>Unete a nuestra comunidad y conecta con familias, profesionales y voluntarios.</p>
            <label htmlFor="email">Correo electrónico</label>
            <input {...register("email")} name="email" type="text" />
            <label htmlFor="pass1">Contraseña</label>
            <input {...register("pass1")} name="pass1" type="password"/>
            <button className="mainBtn" type="submit">Iniciar Sesión</button>
            <button onClose={handleClose} className="secondBtn"><Link to="/signup">Hazte miembro</Link></button>
          </form>
      </Dialog>
      <Nav/>
    </header>
  )
};

export default Header;
