import React from "react";

const BlogCard = (props) => {
  const {title, author,category,content}=props.value

  return (
    <div className="blogCard">
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{content}</p>
      <h5>{category }</h5>
    </div>
  )
 
};

export default BlogCard;
