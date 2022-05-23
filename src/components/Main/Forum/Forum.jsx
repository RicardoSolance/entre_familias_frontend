import React, { useEffect, useState, useContext } from "react";
import Ukraine from "../../../assets/ukraine.png";
import axios from "axios";
import CardForum from "../Forum/CardForum";
import CircularProgress from '@mui/material/CircularProgress';

const Forum = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [datasforo, setSearch] = useState([]);
  const [questionpost, setquestion] = useState(null);

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
        "http://localhost:5000/api/users/foro/create",
        questionform,
        config
      );
      // const data=res.data
      // console.log(data);
      //  setquestion(res);
    }
    catch(error){
  console.log(error);
    }}

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const resp = await axios.get(`http://localhost:5000/api/users/foro`);
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
    <section>
      <div id="forumIntro">
        <h2>Comunidad entre familias</h2>
        <p>Tus problemas no son únicos, y la mejor ayuda te la brindan familias como la tuya.. En este foro podrás preguntar, encontrar, y apoyar cualquier duda. Te recomendamos no compartir información personal de tu hijo/a de acogida por seguridad.</p>
      </div>
      <div id="divForum">
        <div className="listaForum">
          {datasforo.length !== 0
            ? datasforo.map((dataforo, i) => (
                <CardForum key={i} listadodata={dataforo} />
              ))
            : ""}
          <div className="busqueda">
            <form onSubmit={createquestion} className="form">
              <input placeholder="Realice pregunta" name="description" />
              <label for="quantity">Seleccione el Topico</label>
              <select id="quantity" name="Topic">
                <option value="Nutricion">Nutricion </option>
                <option value="Legales">Legales </option>
                <option value="Acogida">Acogida</option>
                <option value="Otros">Otros</option>
              </select>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
        <div>
          <img src={Ukraine} alt="ukraine" />
        </div>
      </div>
    </section>
  ) : (
    <CircularProgress />
  );
};

export default Forum;
