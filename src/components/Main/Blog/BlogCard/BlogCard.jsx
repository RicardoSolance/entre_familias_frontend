import React from "react";

const BlogCard = (props) => {
  const {title, author,category,content,image}=props.value

  return (
    <article className="blogCard">
      <img src={ image} alt="" />
      <h1>{title}</h1>
      <div className="cont">
      <p>{content}</p>
      </div>
      <a href="" className='more'>LEER MAS</a>
    </article>
  )
 
};

export default BlogCard;
