import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment";

function CardNeas(props) {

const listadodata = props.listadodata
// const listadodataa=props.listadodataa
// console.log(listadodataa);

  //otra forma es poner props entre parentesis en cards y luego poner copiar ruta del name
  //props.poke[0].name
  return (
    <div className="card">
       
      
   
        <p>Topico:{listadodata.Topic}</p>
        <p>Descripcion:{listadodata.description}</p>
        <p>Name:{listadodata.postedBy.name}</p>
        {/* <p>Mail:{listadodata.postedBy.email}</p> */}
        <>
    
    {listadodata.commentslength !== 0
          ? listadodata.comments.map((comment, i) => <Comment key={i} commentdata={comment} />)
          : ""}
    </>

      </div>
      
   
  );
}

export default CardNeas;
