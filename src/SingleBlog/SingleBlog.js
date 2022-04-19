import React from "react";

const SingleBlog = ({ single }) => {
  return (
    <div className="text-center container my-5 ">
      <h1 className="text-warning">{single.question}</h1>
      <p className="my-5 fs-5">{single.answer}</p>
    </div>
  );
};

export default SingleBlog;
