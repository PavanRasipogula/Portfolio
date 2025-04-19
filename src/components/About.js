import React from 'react';
import './About.css';
import aboutImg from '../assets/Profile1.jpeg'; // Replace with actual image name

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="Pavan" className="about-image" />
        </div>
      </div>

      <div className="about-right">
        <h2 className="section-heading">
           About <span className="me">Me</span>
        </h2>

        <p className="about-text">
          Hello! My name is <span className="section-number">Pavan Rasipogula</span>and I enjoy creating things that live on the internet. I'm passionate about solving diverse technical problems and improving myself further.
        </p>

        <p className="about-text">
          To work in an esteemed company offering creative and challenging career opportunities where I can apply and enhance my knowledge and skills is my primary goal.
        </p>

        <p className="about-subheading">Here are a few of the other activities that I love to do!</p>

        <ul className="about-list">
          <li>▹ Coding</li>
          <li>▹ Reading</li>
          <li>▹ Painting</li>
          <li>▹ Crafting</li>
          <li>▹ Problem Solving</li>
          <li>▹ Team Management</li>
          <li>▹ Mentoring</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
