import React from "react";




function Comment(props) {


const commentdata= props.commentdata





  return (
    <div className="card">
       
       <p>Time:{commentdata.time}</p>
        <p>nombreComentario:{commentdata.commentBy?.name}</p>
          <p>Comentarios:{commentdata.answer}</p>
    
        
   



  




    </div>

  );
}

export default Comment;
