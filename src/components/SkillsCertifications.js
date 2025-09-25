import React from "react";
import "./SkillsCertifications.css";

const SkillsCertifications = () => {
  return (
    <section className="skills-cert-section">
      <h2 className="section-title">
        Skills & <span className="highlight">Certifications</span>
      </h2>

      <div className="skills-cert-grid">
        {/* Technical Skills Block */}
        <div className="card">
          <h3 className="card-title">Technical Skills</h3>
          <ul className="card-list">
            <li>
              <strong>Programming:</strong> Python, Core Java, JavaScript
            </li>
            <li>
              <strong>Web Technologies:</strong> HTML, CSS, Django, Flask,
              ReactJS
            </li>
            <li>
              <strong>Database:</strong> MySQL
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, PyCharm,
              MS Office
            </li>
            <li>
              <strong>Data Analytics:</strong> Excel (Pivot Tables, VLOOKUP,
              Charts)
            </li>
            <li>
              <strong>Other:</strong> REST APIs, Version Control
            </li>
            <li>
              <strong>Data Visualization:</strong> Power BI and Tableau
            </li>
          </ul>
        </div>

        {/* Certifications / Internships Block */}
        <div className="card">
          <h3 className="card-title">Certifications & Internship</h3>
          <ul className="card-list">
            <li>
              <strong>Internship:</strong> Python Full Stack Internship –{" "}
              <strong>Kodnest</strong>
            </li>
            <li>
              Python Programming – <strong>Code Tantra</strong>
            </li>
            <li>
              Git & GitHub – <strong>Udemy</strong>
            </li>
            <li>
              Web Development Using Django – <strong>APSSDC</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsCertifications;
