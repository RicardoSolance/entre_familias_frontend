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
 
  </section>
  )
  
};

export default Blog;
