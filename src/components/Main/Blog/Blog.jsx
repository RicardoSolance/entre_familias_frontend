import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BlogCard from '../Blog/BlogCard'


const Blog = () => {
  // const { register, handleSubmit } = useForm();
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    async function getAllentries() {
      try {
        const res = await axios.get("http://localhost:5000/api/users/blog");
        const data = res.data;
        setEntries(data)
      } catch (error) {
        console.log(error);
      }

    }
    getAllentries();
  }, [])

  return (
    <section>
      <div className="entries_container">
        {entries.map((entry, i) => <BlogCard value={entry} key={i} />)}
      </div>
      <div  className="form_container">
        {/* <form onSubmit={handleSubmit()} className='form' >
          <input  {...register("title")} type="text" name="title" id="title" placeholder="Titulo del Blog"/>
          <textarea  {...register("content")} name="content" id="content" cols="30" rows="10" placeholder="Blog content"/>
          <input type="submit" value="Enviar" />
        </form> */}
      </div>
  </section>
  )
  
};

export default Blog;
