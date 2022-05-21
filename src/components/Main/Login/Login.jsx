import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [isLogged, setisLogged] = useState(false);

  const loginUser = async(log)=>{
    setisLogged(false)
    const res = await axios.post("http://localhost:5000/api/users/login",log);
    const data = res.data;
    console.log(data);
    localStorage.setItem("token",data.token);

    if(data.message==='Correct credentials'){
      setisLogged(true);
    }
  }


  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <input {...register("email")} name="email" type="text" placeholder="email"/>
      <input {...register("pass1")} name="pass1" type="password" placeholder="password"/>
      <input type="submit" value="Enviar" />
      {isLogged?<p>Logueado correctamente</p>:""}
    </form>
  )
};

export default Login;
