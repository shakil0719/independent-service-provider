import React from "react";
import "./SingleImage.css";

const SingleImage = ({ image }) => {
  return (
    <div className="col-md-6 col-12 col-lg-4 hover">
      <img style={{ width: "320px" }} src={image.img} alt="" />
    </div>
  );
};

export default SingleImage;
