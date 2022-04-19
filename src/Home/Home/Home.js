import React from "react";
import Album from "../Album/Album";

import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg">
      <Banner></Banner>
      <Services></Services>
      <Album></Album>
    </div>
  );
};

export default Home;
