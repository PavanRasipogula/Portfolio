import React from "react";
import "./Hero.css";
import myImage from "../assets/Profile.jpg"; // update with your actual image file

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-hello">Hello, I am</p>
        <h1 className="hero-name">
          PAVAN <span className="highlight">RASIPOGULA</span>
        </h1>
        <p className="hero-tagline">
          A PASSIONATE DATA ANALYST || PYTHON DEVELOPER ||
          <span className="highlight">WEB DEVELOPER || SOFTWARE DEVELOPER</span>
        </p>
      </div>
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img src={myImage} alt="Pavan Kumar" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
