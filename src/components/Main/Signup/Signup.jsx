import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  
  const signUpUser = async (create) =>{
    try {
      const res = await axios.post("http://localhost:5000/api/users/create", create);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <form onSubmit={handleSubmit(signUpUser)}>
      <input {...register("name")} name="name" type="text" placeholder="Nombre"/>
      <input {...register("surnames")} name="surnames" type="text" placeholder="Apellidos"/>
      <select {...register("gender")} name="gender" placeholder="Género">
        <option value="male">Hombre</option>
        <option value="female">Mujer</option>
      </select>
      <input {...register("birthday")} name="birthday" type="date" placeholder="Cumpleaños"/>
      <input {...register("telephone")} name="telephone" type="text" placeholder="Teléfono"/>
      <input {...register("email")} name="email" type="text" placeholder="email"/>
      <input {...register("pass1")} name="pass1" type="password" placeholder="password"/>
      <input {...register("pass2")} name="pass2" type="password" placeholder="repeat password"/>
      <input type="submit" value="Enviar" />
    </form>
  )
};

export default Signup;
