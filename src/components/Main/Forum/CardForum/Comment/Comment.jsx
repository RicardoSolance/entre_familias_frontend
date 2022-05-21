import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Comment(props) {


const commentdata= props.commentdata
const [inputname, setSearchName] = useState([]);


// const onSubmit = (e) => {
//   e.preventDefault();
//   if(e.target.nombre.value){
//     setSearchName(e.target.nombre.value)
//     console.log("llega masa",e.target.nombre.value); 
//     const res = await axios.put(`http://localhost:5000/api/users/foro/${id}`,e.target.nombre.value);
//   }}



  return (
    <div className="card">
       
      
   
        <p>Comentarios:{commentdata.answer}</p>
        <form className="row" >
          <input placeholder="Agregar comentario" name="nombre" />
          <button  type="submit" ></button>
        </form>
   


      </div>
   
  );
}

export default Comment;
