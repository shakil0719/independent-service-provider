import React from "react";
import profile from "../image/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="d-flex flex-column my-5 align-items-center minheight">
      <img className="profile" src={profile} alt="" />
      <h3 className="fw-bold">SHAKIL</h3>
      <h6>Student(PH Batch-5) </h6>
      <div className="border-top border-4 mt-3 border-dark ">
        <h4 className="mt-3 text-center">About MySelf</h4>
        <div className="border border-1"></div>
        <p className="text-center my-3">
          Assalamualikum, I'm shakil .I completed my graduation form
          LUCT University last year. Now I am currently walking
          toward achieving a goal to become a world wide known web developer.
          For that I'm trying my best to achieve that goal. In my way of
          achieving that goal for my initial development Jhankar Mahbub is now
          my idol and mentor and also will try my best that one day he could say
          proudly that i was his student.
        </p>
      </div>
    </div>
  );
};

export default About;
