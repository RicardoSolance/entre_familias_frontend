import React, {useState, useEffect} from "react";
import axios from "axios";
import BlogCard from '../Blog/BlogCard'


const Blog = () => {
 
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    async function getAllentries() {
      try {
        const res = await axios.get("http://localhost:5000/api/blog");
        const data = res.data;
        console.log('datos que nos trae', data)
        setEntries(data)
      } catch (error) {
        console.log(error);
      }

    }
    getAllentries();
  }, [])

  return (
    <section className='main-container' >
      <div className="parent-container">
      <div className="blog-head">
        <h1 className='title' >Nuestro Blog</h1>
        <h2 className='sub-title'>informate con nosotros</h2>
          <p>Bienvenido! Aquí podras acceder a información para prepararte y acompañarte
            durante el proceso de acogida y adaptación. Tambien encontraras articulos que te ayudaran
            a entender a tu nuevo hijo y como hacer para poder entenderte con el
            o ella de la mejor manera posible.</p>
      </div>
      <div className="blog-head-btn">
          <a href="#" className='rss'>Twiter</a>
          <a href="#"  className='rss'>Linkedin</a>
          <a href="#" className='rss'>Medium</a>
          
        </div>
        <div className="order-entries">
          <a href="">Todas</a>
          <a href="">Nuevas</a>
          <a href="">Antiguas</a>
          <a href="">Sobre niños</a>
          <a href="">Sobre familias</a>
      </div>
      <div className="entries_container">
      {entries.map((entry, i) => <BlogCard value={entry} key={i} />)}
      </div>

      </div>
      
 
  </section>
  )
  
};

export default Blog;
