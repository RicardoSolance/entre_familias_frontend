import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Comment from "./Comment";
import fotosForo from "../../../../assets/fotosForo.png";

function CardForum(props) {

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
      <img src={fotosForo} alt="fotos foro" />
      <div>
        <h4>{listadodata.Topic}</h4>
        <p>{listadodata.postedBy.name}</p>
        <p>Time:{listadodata.time}</p>
        <p>Descripcion:{listadodata.description}</p>
      
        
  
        
      
        <>
    
    {listadodata.commentslength !== 0
          ? listadodata.comments.map((comment, i) => <Comment key={i} commentdata={comment} />)
          : ""}
    </>
    <form onSubmit={createcomment} className="form">
          <input placeholder="Agregar comentario" name="nombre" />
          <button type="submit" >Enviar Comentario</button>
        </form>
      </div>

    </div>
  );
}

export default CardForum;
