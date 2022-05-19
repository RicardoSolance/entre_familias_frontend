import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const loginUser = async(log)=>{
    const res = await axios.post("http://localhost:5000/api/users/login",log);
    const data = res.data;
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <input {...register("email")} name="email" type="text" placeholder="email"/>
      <input {...register("pass1")} name="pass1" type="text" placeholder="password"/>
      <input type="submit" value="Enviar" />
    </form>
  )
};

export default Login;
