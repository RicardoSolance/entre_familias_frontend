import React, {useState, useContext, useEffect} from "react";
import Nav from "./Nav";
import {Link}from "react-router-dom";
import loginLogo from "../../assets/acc-circle.png";
import voluntariadoLogo from "../../assets/voluntariado-logo.png";
import logoGrande from "../../assets/logoGrande.png";
import users_group from "../../assets/Users_Group.png";
import logoPrincipal from "../../assets/logoPrincipal.png"
import axios from "axios";
import { useForm } from "react-hook-form";
import Dialog from '@mui/material/Dialog';
import { userContext } from "../../context/userContext";
import Alert from '@mui/material/Alert';
import {
  // parseCookies,
  setCookie
  // ,getCookie
} from "../../utils/cookies"
import Hamburger from 'hamburger-react';




const Header = () => {
  const {login, user , logout} = useContext(userContext);
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [changeToSignUp, setchangeToSignUp] = useState(false);
  const [error, seterror] = useState(false);
  const [passWeak, setpassWeak] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const detectSize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, []);

  const loginUser = async(log)=>{
    console.log(log);
    const res = await axios.post("https://entre-familias-backend.herokuapp.com/api/users/login",log);
    const data = res.data;
    console.log(data);
    localStorage.setItem("token",data.token);
    setCookie("token",data.token)
    if(data.message==='Correct credentials'){
      login(data.user.email);
      setOpen(false);
    } else{
      seterror(true);
    }
  }


  const signUpUser = async (entry) =>{
    console.log(entry);
    try {
      const res = await axios.post("https://entre-familias-backend.herokuapp.com/api/users/create", entry);
      const data = res.data;
      if (data==="User created succesfully") {
        setOpen(false);
        login(entry.email);
        setOpen3(true);
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

  const handleOpen2 = () =>{
    setOpen2(true);
  }

  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
    setOpen3(false);
    setchangeToSignUp(false)
  };

  const goToSignUp = () =>{
    setchangeToSignUp(true);
  }

  if (windowWidth>911) {
    return (

    <header id="normalHeader">
     <div id="divLogos">
       <Link to="/maintenance"><img src={voluntariadoLogo} alt="voluntariado logo"/></Link>
       {user?
       <div>

         <a style={{color:"white"}} onClick={handleOpen2}>{user}</a>
         <p style={{cursor:"pointer"}} onClick={logout}>Cerrar sesión</p>


       </div>
       :
       <img onClick={handleOpen}src={loginLogo} id="loginLogo" alt="login logo" />}
       
     </div>
     <Dialog className="popup" onClose={handleClose} open={open2}>
       <div id="newPopup">
         <img src={logoGrande} alt="logo" />
         <h4>¡Ya estas dentro!</h4>
         <p>Ya formas parte de esta bonita comunidad, ahora solo te faltaría completar tu perfil para que otras familias te identifiquen y puedas también contactar a voluntairos y profesionales.</p>
         <button className="mainBtn" onClick={()=>setOpen2(false)}><Link to ="/profile">Completar perfil</Link></button>
       </div>
     </Dialog>
     <Dialog open={open3} onClose={handleClose}>
       <div id="newPopup">
         <img src={logoGrande} alt="logo" />
         <h4>¡Ya estas dentro!</h4>
         <p>Ya formas parte de esta bonita comunidad, ahora solo te faltaría completar tu perfil para que otras familias te identifiquen y puedas también contactar a voluntairos y profesionales.</p>
         <button className="mainBtn" onClick={()=>setOpen3(false)}><Link to ="/profile">Completar perfil</Link></button>
       </div>
     </Dialog>
     <Dialog className="popup" onClose={handleClose} open={open}>
       {(()=>{
         if (changeToSignUp===true) {
           return(
           <form className="formPopup" onSubmit={handleSubmit(signUpUser)}>
             <img src={logoGrande} alt="logoGrande" />
             <h2>Crea tu cuenta</h2>
             <p>Unete a nuestra comunidad y conecta con familias, profesionales y voluntarios.</p>
             <label htmlFor="email">Correo electronico*</label>
             <input {...register("email")} name="email" type="text" required />
             <label htmlFor="pass1">Contraseña*</label>
             <input {...register("pass1")} name="pass1" type="password" required />
             <label htmlFor="pass2">Repite la contraseña*</label>
             <p style={{fontWeight:"200", fontSize:"14px"}}>8 caracteres 1 minúscula 1 mayúscula 1 número</p>
             <input {...register("pass2")} name="pass2" type="password" required />
             <label htmlFor="birthday">Fecha de nacimiento*</label>
             <input {...register("birthday")} type="date" name="birthday" required/>
             <div>
               <input type="checkbox" name="privacity" required/>
               <p>Confirmo que he leído la política de privacidad de Entre Familias y doy mi consentimiento para el tratamiento de mis datos personales</p>
             </div>
             {passWeak ? <Alert severity="error">La contraseña debe contener mayúsculas, minúsculas, un número y un símbolo.</Alert> : ""}
             <button type="submit" className="mainBtn">Registrarme</button>
           </form>)          
         } else {
           return (
             <form className="formPopup" onSubmit={handleSubmit(loginUser)}>
               <img src={logoGrande} alt="logoGrande" />
               <h2>Empezar</h2>
               <p>
                 Unete a nuestra comunidad y conecta con familias, profesionales
                 y voluntarios.
               </p>
               <label htmlFor="email">Correo electrónico</label>
               <input {...register("email")} name="email" type="text" />
               <label htmlFor="pass1">Contraseña</label>
               <input {...register("pass1")} name="pass1" type="password" />
               <div id="remember">
                 <div>
                  <input type="checkbox" name="remember" id="" />
                  <label style={{fontSize:"14px"}} htmlFor="remember">Recuérdame</label>
                 </div>
                 <a style={{fontSize:"14px"}}>¿Has olvidado la contraseña?</a>
               </div>
               <button className="mainBtn" type="submit">
                 Iniciar Sesión
               </button>
               {error ? (
                 <Alert severity="error">
                   hubo un error al autenticar, comprueba si los campos son
                   correctos.
                 </Alert>
               ) : (
                 ""
               )}
               <button onClick={goToSignUp} className="secondBtn">
                 Hazte miembro
               </button>
             </form>
           );}})()
           }
     </Dialog>
     <Nav/>
   </header>
 )} else{
   return (
     <header id="burgerHeader">
       <Hamburger
         toggled={isOpen}
         toggle={setIsOpen}
         className="hamburger-component"
       />
       {isOpen ? (
         <div id="burger">
           <Link to="/" onClick={() =>{
              window.scrollTo(0, 170);
              setIsOpen(false);
           } }>
             ¿Quiénes somos?
           </Link>
           <Link to="/forum" onClick={()=>setIsOpen(false)}>Foro</Link>
           <Link to="/" onClick={() => {
             window.scrollTo(0, 2300);
             setIsOpen(false);
             }}>
             Ayuda profesional
           </Link>
           <Link to="/maintenance" onClick={()=>setIsOpen(false)}>Eventos</Link>
           <Link to="/" onClick={() =>{
              window.scrollTo(0, 4900);
              setIsOpen(false);
           }}>
             Información
           </Link>
           <Link to="/blog" onClick={()=>setIsOpen(false)}>Blog</Link>
           <Link to="/" onClick={() =>{
              window.scrollTo(0, 2900);
              setIsOpen(false);
           }}>
             Contacto
           </Link>
         </div>
       ) : (
         ""
       )}
       <div id="divBurgerLogos">
         <img id="entreFamiliasLogo" src={logoPrincipal} alt="logo principal" />
         {user ? (
           <div>
             <a style={{fontWeight:"200"}} onClick={handleOpen2}>{user}</a>
           </div>
         ) : (
           <img
             onClick={handleOpen}
             id="users_group"
             src={users_group}
             alt="users group"
           />
         )}
       </div>
       <Dialog className="popup" onClose={handleClose} open={open}>
         <Dialog className="popup" onClose={handleClose} open={open2}>
           <div id="newPopup">
             <img src={logoGrande} alt="logo" />
             <h4>¡Ya estas dentro!</h4>
             <p>
               Ya formas parte de esta bonita comunidad, ahora solo te faltaría
               completar tu perfil para que otras familias te identifiquen y
               puedas también contactar a voluntairos y profesionales.
             </p>
             <button className="mainBtn" onClick={() => setOpen2(false)}>
               <Link to="/profile">Completar perfil</Link>
             </button>
           </div>
         </Dialog>
         {(() => {
           if (changeToSignUp === true) {
             return (
               <form className="formPopup" onSubmit={handleSubmit(signUpUser)}>
                 <img src={logoGrande} alt="logoGrande" />
                 <h2>Crea tu cuenta</h2>
                 <p>
                   Unete a nuestra comunidad y conecta con familias,
                   profesionales y voluntarios.
                 </p>
                 <label htmlFor="email">Correo electronico*</label>
                 <input
                   {...register("email")}
                   name="email"
                   type="text"
                   required
                 />
                 <label htmlFor="pass1">Contraseña*</label>
                 <input
                   {...register("pass1")}
                   name="pass1"
                   type="password"
                   required
                 />
                 <label htmlFor="pass2">Repite la contraseña*</label>
                 <p style={{fontWeight:"200", fontSize:"14px"}}>8 caracteres 1 minúscula 1 mayúscula 1 número</p>
                 <input
                   {...register("pass2")}
                   name="pass2"
                   type="password"
                   required
                 />
                 <label htmlFor="birthday">Fecha de nacimiento*</label>
                 <input
                   {...register("birthday")}
                   type="date"
                   name="birthday"
                   required
                 />
                 <div>
                   <input type="checkbox" name="privacity" required />
                   <p>
                     Confirmo que he leído la política de privacidad de Entre
                     Familias y doy mi consentimiento para el tratamiento de mis
                     datos personales
                   </p>
                 </div>
                 {passWeak ? (
                   <Alert severity="error">
                     La contraseña debe contener mayúsculas, minúsculas, un
                     número y un símbolo.
                   </Alert>
                 ) : (
                   ""
                 )}
                 <button type="submit" className="mainBtn">
                   Registrarme
                 </button>
               </form>
             );
           } else {
             return (
               <form className="formPopup" onSubmit={handleSubmit(loginUser)}>
                 <img src={logoGrande} alt="logoGrande" />
                 <h2>Empezar</h2>
                 <p>
                   Unete a nuestra comunidad y conecta con familias,
                   profesionales y voluntarios.
                 </p>
                 <label htmlFor="email">Correo electrónico</label>
                 <input {...register("email")} name="email" type="text" />
                 <label htmlFor="pass1">Contraseña</label>
                 <input {...register("pass1")} name="pass1" type="password" />
                 <div id="remember">
                    <div>
                      <input type="checkbox" name="remember" id="" />
                      <label style={{fontSize:"14px"}} htmlFor="remember">Recuérdame</label>
                    </div>
                    <a style={{fontSize:"14px"}}>¿Has olvidado la contraseña?</a>
                 </div>
                 <button className="mainBtn" type="submit">
                   Iniciar Sesión
                 </button>
                 {error ? (
                   <Alert severity="error">
                     hubo un error al autenticar, comprueba si los campos son
                     correctos.
                   </Alert>
                 ) : (
                   ""
                 )}
                 <button onClick={goToSignUp} className="secondBtn">
                   Hazte miembro
                 </button>
               </form>
             );
           }
         })()}
       </Dialog>
     </header>
   );
      
};
}
export default Header;
