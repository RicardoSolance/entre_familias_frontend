import React from "react";




function Comment(props) {


const commentdata= props.commentdata





  return (
    <div className="cardComment">
       <p>{commentdata.time.slice(11,16)}</p>
        <p>{commentdata.commentBy.name}</p>
          <p>{commentdata.answer}</p>
    </div>

  );
}

export default Comment;
