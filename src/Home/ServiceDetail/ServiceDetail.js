import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/serviceDetail.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const { serviceId } = useParams();

  const match = data.filter((service) => {
    if (Number(serviceId) === service.id) {
      return service;
    }
  });

  console.log(match);
  return (
    <div className="d-flex justify-content-center my-5 container">
      <div className=" text-center">
        <img style={{ width: "300px" }} src={match[0]?.img} alt="" />
        <h1>
          <span className="text-warning">Package:</span> {match[0]?.name}
        </h1>
        <p className="my-5">
          <span className="text-warning">Description: </span>
          {match[0]?.description}
        </p>
        <p className="fw-bold fs-3">
          Cost : <span className="text-warning">${match[0]?.price}</span>
        </p>

        <h1>Traveling is good for your soul</h1>
      </div>
    </div>
  );
};

export default ServiceDetail;
