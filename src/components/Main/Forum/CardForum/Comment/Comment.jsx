import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Comment(props) {


const commentdata= props.commentdata
const [inputname, setSearchName] = useState([]);

console.log(commentdata);
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
          <p>Time:{commentdata.time}</p>
        <p>nombreComentario:{commentdata.commentBy?.name}</p>
        
   


      </div>
   
  );
}

export default Comment;
