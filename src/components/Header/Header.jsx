import React, {useState, useContext} from "react";
import Nav from "./Nav";
import {Link}from "react-router-dom";
import loginLogo from "../../assets/acc-circle.png";
import voluntariadoLogo from "../../assets/voluntariado-logo.png";
import logoGrande from "../../assets/logoGrande.png"
import axios from "axios";
import { useForm } from "react-hook-form";
import Dialog from '@mui/material/Dialog';
import { userContext } from "../../context/userContext";
import Alert from '@mui/material/Alert';





const Header = () => {
  const {login, user , logout} = useContext(userContext);
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [changeToSignUp, setchangeToSignUp] = useState(false);
  const [error, seterror] = useState(false);
  const [passWeak, setpassWeak] = useState(false);

  const loginUser = async(log)=>{
    console.log(log);
    const res = await axios.post("http://localhost:5000/api/users/login",log);
    const data = res.data;
    console.log(data);
    localStorage.setItem("token",data.token);
    if(data.message==='Correct credentials'){
      login(data.user.name);
      setOpen(false);
    } else{
      seterror(true);
    }
  }

  const signUpUser = async (entry) =>{
    console.log(entry);
    try {
      const res = await axios.post("http://localhost:5000/api/users/create", entry);
      const data = res.data;
      if (data==="User created succesfully") {
        setOpen(false);
        login(entry.email);
      } else if(data.response.data==="Password too weak"){
        setpassWeak(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    seterror(false);
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
        {user?
        <div>
          <p>{user}</p>
          <button className="secondBtn" onClick={logout}>Cerrar sesión</button>
        </div>
        :
        <img onClick={handleOpen}src={loginLogo} id="loginLogo" alt="login logo" />}
      </div>
      <Dialog className="popup" onClose={handleClose} open={open}>
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
          <div>
            <input type="checkbox" name="privacity" />
            <p>Confirmo que he leído la política de privacidad de Entre Familias y doy mi consentimiento para el tratamiento de mis datos personales</p>
          </div>
          {passWeak?<Alert severity="error">La contraseña debe contener mayúsculas, minúsculas, un número y un símbolo.</Alert>:""}
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
            {error?<Alert severity="error">hubo un error al autenticar, comprueba si los campos son correctos.</Alert>:""}
            <button onClick={goToSignUp} className="secondBtn">Hazte miembro</button>
          </form>}
      </Dialog>
      <Nav/>
    </header>
  )
};

export default Header;
