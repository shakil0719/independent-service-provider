import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price, id } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service mt-5">
      <img src={img} className="w-100" alt="" />
      <h2>{name}</h2>
      <h5 className="text-warning">$ {price}</h5>
      <p>
        <small>{description.slice(0, 100)}...</small>
      </p>
      <button
        className="btn btn-effect"
        onClick={() => navigateToServiceDetail(id)}
      >
        HIRE ME
      </button>
    </div>
  );
};

export default Service;
