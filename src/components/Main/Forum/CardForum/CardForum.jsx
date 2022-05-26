import React from "react";

import axios from "axios";

import Comment from "./Comment";
import fotosForo from "../../../../assets/fotosForo.png";

function CardForum(props) {

const listadodata = props.listadodata

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
        `https://entre-familias-backend.herokuapp.com/api/users/foro/${listadodata._id}`,
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
        <h2>{listadodata.Topic}</h2>
        <p style={{fontWeight:"200"}}>{listadodata.postedBy.name}</p>
        <p>Hora: {listadodata.time.slice(11, 16)}</p>
        <p>Descripción: {listadodata.description}</p>

        {listadodata.commentslength !== 0
          ? listadodata.comments.map((comment, i) => (
              <Comment key={i} commentdata={comment} />
            ))
          : ""}
        <form onSubmit={createcomment} className="form">
          <input className="inputForum" type="text" placeholder="Agregar comentario" name="nombre" />
          <button className="mainBtn" type="submit">Enviar Comentario</button>
        </form>
      </div>
    </div>
  );
}

export default CardForum;
