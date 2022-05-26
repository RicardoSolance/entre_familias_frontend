import React, { useEffect, useState } from "react";
import Ukraine from "../../../assets/ukraine.png";
import axios from "axios";
import CardForum from "../Forum/CardForum";
import CircularProgress from '@mui/material/CircularProgress';
import usePagination from "../../../hooks/paginate";
import Pagination from '@mui/material/Pagination';
import categorias from "../../../assets/categoria.png";

const Forum = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [datasforo, setSearch] = useState([]);
  const [questionpost, setquestion] = useState(null);
  const [comment, setcomment] = useState(null);
  let [page, setPage] = useState(1);
  const PER_PAGE = 24;
  const count = Math.ceil(datasforo.length / PER_PAGE);
  const _DATA = usePagination(datasforo, PER_PAGE);
  const refreshcomment= (value) =>{
    setcomment(value);
  }
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    
  };

  


  const createquestion = async (e) => {
    e.preventDefault();
    const questionform = {
      Topic: e.target.Topic.value,
      description: e.target.description.value,
    };
    console.log(questionform);
    const token=localStorage.getItem("token");
    console.log(token);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

  
  
  try{
      const res = await axios.post(
        "https://entre-familias-backend.herokuapp.com/api/users/foro/create",
        questionform,
        config
      );
      // const data=res.data
      // console.log(data);
      setquestion(res);
    }
    catch(error){
  console.log(error);
    }}

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const resp = await axios.get(`https://entre-familias-backend.herokuapp.com/api/users/foro`);
        const data = await resp.data;
        console.log(data);

        setSearch(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [questionpost, comment]);

  return !isLoading ? (
    
    <section className="sectionForum">
      <div id="forumIntro">
        <h2>Comunidad entre familias</h2>
        <p>Tus problemas no son únicos, y la mejor ayuda te la brindan familias como la tuya.. En este foro podrás preguntar, encontrar, y apoyar cualquier duda. Te recomendamos no compartir información personal de tu hijo/a de acogida por seguridad.</p>
      </div>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        style={{background:"none"}}        
        onChange={handleChange}
      />
      <div id="divForum">
        <div className="listaForum">
          {datasforo.length !== 0
            ? _DATA.currentData().map((dataforo, i) => (
                <CardForum key={i} listadodata={dataforo}  refresh={()=>refreshcomment(i)}/>
              ))
            : ""}
          <div className="busqueda">
            <form onSubmit={createquestion} className="form" >
              <input className="inputForum" type="text" placeholder="Realice pregunta" name="description" />
              <label htmlFor="quantity">Seleccione el Topico</label>
              <br />
              <select id="quantity" name="Topic">
                <option value="Nutricion">Nutricion </option>
                <option value="Legales">Legales </option>
                <option value="Acogida">Acogida</option>
                <option value="Otros">Otros</option>
              </select>
              <br />
              <button className="mainBtn" type="submit">Enviar</button>
            </form>
          </div>
        </div>
        <div>
          <img src={Ukraine} alt="ukraine" />
          <img style={{cursor:"pointer"}} src={categorias} alt="categorias" />
        </div>
      </div>
    </section>
  ) : (
    <CircularProgress />
  );
};

export default Forum;
