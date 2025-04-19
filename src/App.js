import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from './components/Projects';
import Education from "./components/Education";
import SkillsCertifications from "./components/SkillsCertifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Projects id="projects" />
      <Education id="education" />
      <SkillsCertifications id="skills" />
      <Contact id="contact" />
      <Footer/>
    </>
  );
}

export default App;
