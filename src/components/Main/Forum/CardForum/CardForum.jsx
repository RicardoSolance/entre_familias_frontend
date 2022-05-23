import React from "react";
import Comment from "./Comment";
import fotosForo from "../../../../assets/fotosForo.png";

function CardForum(props) {

const listadodata = props.listadodata

  return (
    <div className="card">
      <img src={fotosForo} alt="fotos foro" />
      <div>
        <h4>{listadodata.Topic}</h4>
        <p>{listadodata.postedBy.name}</p>
        <p>Descripcion:{listadodata.description}</p>
        {listadodata.commentslength !== 0
          ? listadodata.comments.map((comment, i) => (
              <Comment key={i} commentdata={comment} />
            ))
          : ""}

        <form className="row">
          <input placeholder="Agregar comentario" name="nombre" />
          <button type="submit"></button>
        </form>
      </div>

    </div>
  );
}

export default CardForum;
