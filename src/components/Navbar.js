import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        PAVAN <span className="highlight">RASIPOGULA</span>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active animate-menu" : ""}`}>
        <li onClick={() => { closeMenu(); scrollToSection("hero"); }}>HOME</li>
        <li onClick={() => { closeMenu(); scrollToSection("about"); }}>ABOUT ME</li>
        <li onClick={() => { closeMenu(); scrollToSection("projects"); }}>PROJECTS</li>
        <li onClick={() => { closeMenu(); scrollToSection("education"); }}>EDUCATION</li>
        <li onClick={() => { closeMenu(); scrollToSection("skills"); }}>SKILLS</li>
        <li onClick={() => { closeMenu(); scrollToSection("contact"); }}>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
