import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  
  const createEntry = async (create) =>{
    try {
      const res = await axios.post("http://localhost:5000/api/users/create", create);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <h1>Admin Dasboard</h1>
      <div  className="form_container">
        <form onSubmit={handleSubmit()} className='form' >
        <input  {...register("image")} type="text" name="image" id="image" placeholder="Url imagen de portada"/>
          <input  {...register("title")} type="text" name="title" id="title" placeholder="Titulo del Blog"/>
          <textarea  {...register("content")} name="content" id="content" cols="30" rows="10" placeholder="Blog content" />
          <p>Categoria : </p><select {...register("category")} name="category" placeholder="categoria">
            <option value="acogida">acogida</option>
            <option value="adopcion">adopción</option>
            <option value="eventos">eventos</option>
         </select>
          <input type="submit" value="Enviar" />
        </form>
      </div>
  </section>
  ) 
};

export default Dashboard;