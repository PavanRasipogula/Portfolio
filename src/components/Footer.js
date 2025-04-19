import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © <span className="year">{year}</span>{" "}
        <span className="highlight">RASIPOGULA PAVAN KUMAR.</span> All Rights
        Reserved. Developed by{" "}
        <span className="end">RASIPOGULA PAVAN KUMAR❤ </span>
      </p>
    </footer>
  );
};

export default Footer;
