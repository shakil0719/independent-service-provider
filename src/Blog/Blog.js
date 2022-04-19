import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blog);
  return (
    <div>
      {blog.map((single) => (
        <SingleBlog single={single} key={single.question}></SingleBlog>
      ))}
    </div>
  );
};

export default Blog;
