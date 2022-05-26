import React, {useState, useRef} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import JoditEditor from "jodit-react";




const Dashboard = () => {
  const { register, handleSubmit, reset } = useForm();
  const editor = useRef(null)
	const [content, setContent] = useState('')

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    height: 500,
    width:820
  };


  const createEntry = async (create) => {
    // console.log('funcion front createEntry', create);
    const entry = {
      title: create.title,
      image: create.image,
      category: create.category,
      content
    }

    // console.log('this is my object', entry);
    try {
      await axios.post("http://localhost:5000/api/dashboard/blog/create", entry);
      reset()
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleSave = () => {
    console.log(content);
    setContent('');
  }

  const getContent = () => {
    setContent(content)
    console.log('this is the content', content);
  }

 

  return (
    <section className="sectionDashboard">
      <div className="admin-bars">
      <h1 className="title">Crea nuevo Post</h1>
      </div>
      
      <div className="form_container">
        
        <form onSubmit={handleSubmit(createEntry,handleSave)} className='form' >
        <input  {...register("image")} type="text" name="image" id="image" placeholder="Url imagen de portada"/>
          <input  {...register("title")} type="text" name="title" id="title" placeholder="Titulo del Blog" />
          <div className="categor">
          <p>Categoría : </p><select {...register("category")} name="category" placeholder="categoria">
            <option value="acogida">acogida</option>
            <option value="adopcion">adopción</option>
            <option value="eventos">eventos</option>
         </select>
          </div>
          
          {/* <textarea  {...register("content")} name="content" id="content" cols="30" rows="10" placeholder="Blog content" /> */}
     
         
          <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                // tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />

          <div className="cat">
          <input type="submit" value="Enviar"  className="btn"/>
          
          </div>
          
        </form>
       
        
     
      </div>
      


  </section>
  ) 
};

export default Dashboard;
