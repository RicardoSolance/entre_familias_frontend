import React from "react";

function Comment(props) {

  const commentdata = props.commentdata


  return (
    <div className="card">



      <p>Comentarios:{commentdata.answer}</p>




    </div>

  );
}

export default Comment;
