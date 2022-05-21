import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CardForum from "../Forum/CardForum"
const Forum = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [datasforo, setSearch] = useState([]);
  const [questionpost, setquestion] = useState(null);


  const createquestion = async (e) => {
    e.preventDefault();
  const questionform = {
    Topic: e.target.Topic.value,
    description: e.target.description.value,
 
   
  }
console.log(questionform);


// const config = {
//   headers: { Authorization: `Bearer ${token}` }
// };



// Axios.post( 
// "http://localhost:5000/api/users/foro/create",
// questionform,
// config
// ).then(console.log).catch(console.log);
// setquestion(question)
// }
}

useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    
    try {
      const resp = await axios.get(
        `http://localhost:5000/api/users/foro`
      );
      const data = await resp.data;
      console.log(data);
    
      setSearch(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  fetchData();
}, []);


return !isLoading ? (
    


    
  <div className="listaneas">
 
    

    <>
    
    {datasforo.length !== 0
          ? datasforo.map((dataforo, i) => <CardForum key={i} listadodata={dataforo} />)
          : ""}
    </>
    <div className="busqueda">
    <form onSubmit={createquestion} className='form'>
   
    <input placeholder="Realize pregunta" name="description" />
    <label for="quantity">Seleccione el Topico</label>
    <select id="quantity" name="Topic">
              <option value="Nutricion">Nutricion </option>
              <option value="Legales">Legales </option>
              <option value="Acogida">Acogida</option>
              <option value="Otros">Otros</option>
              
    </select>
    <button type="submit" >Enviar</button>
    </form>
  </div>
  </div>
) : (
  <div> Loading...</div>
);




}

export default Forum;
