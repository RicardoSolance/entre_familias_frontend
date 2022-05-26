import React, {  useState,  } from "react";




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
       
       <p>Time:{commentdata.time}</p>
        <p>nombreComentario:{commentdata.commentBy?.name}</p>
          <p>Comentarios:{commentdata.answer}</p>
    
        
   



  




    </div>

  );
}

export default Comment;
