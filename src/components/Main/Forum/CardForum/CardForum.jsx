import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment";

function CardNeas(props) {

const listadodata = props.listadodata
// const refreshcomment=props.refreshcomment
const createcomment = async (e) => {
    e.preventDefault()
    const questionform = {
      answer: e.target.nombre.value,
  
    };
    const token=localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try{
      const res = await axios.put(
        `http://localhost:5000/api/users/foro/${listadodata._id}`,
        questionform, 
        config
      );
  
      
     props.refresh(res)
    
    }
    catch(error){
  console.log(error);
    }
  
  
  
  }
    
 




  return (
    <div className="card">
       
      
   
        <p>Topico:{listadodata.Topic}</p>
        <p>Descripcion:{listadodata.description}</p>
        <p>Time:{listadodata.time}</p>
        
  
        
        <p>Name:{listadodata.postedBy.name}</p>
        <>
    
    {listadodata.commentslength !== 0
          ? listadodata.comments.map((comment, i) => <Comment key={i} commentdata={comment} />)
          : ""}
    </>
    <form onSubmit={createcomment} className="form">
          <input placeholder="Agregar comentario" name="nombre" />
          <button type="submit" ></button>
        </form>
      </div>
      
   
  );
}

export default CardNeas;
