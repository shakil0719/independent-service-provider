import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../image/banner/img1.jpg";
import img2 from "../../image/banner/img2.jpg";
import img3 from "../../image/banner/img3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption className="">
            <p className="font-style-heading">
              The most beautiful thing in the world is, of course, the world
              itself
            </p>
            <p>
              <span className="font-style">
                Let's become the witness of this beauty
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption className="">
            <p className="font-style-heading">
              The most beautiful thing in the world is, of course, the world
              itself
            </p>
            <p>
              <span className="font-style">
                Let's become the witness of this beauty
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption className="">
            <p className="font-style-heading">
              The most beautiful thing in the world is, of course, the world
              itself
            </p>
            <p>
              <span className="font-style">
                Let's become the witness of this beauty
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
