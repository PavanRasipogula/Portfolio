import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Face Recognition Attendance System",
    description: "Developed a smart attendance system using face recognition with OpenCV and machine learning.  Enabled real-time facial recognition for marking attendance, reducing manual errors and proxy.",
    technologies: ["Python", "OpenCV", "Machine Learning", "Face Recognition", "Database","Git"],
    github: "https://github.com/yourusername/face-attendance",
    website: "#",
  },
  {
    title: " Plant Leaf Disease Prediction",
    description: "Built a web-based application to detect plant leaf diseases using image classification techniques.Utilized computer vision and a trained ML model to classify disease from uploaded leaf images.",
    technologies: ["Python", "ML", "Computer Vision", "Image Processing","Git"],
    github: "https://github.com/PavanRasipogula/Final-Pro",
    website: "#",
  },
  {
    title: "Online Library Management System",
    description: "Designed and developed a web application to automate library management tasks.Allowed admin to manage books, issue/return logs, and student records via an interactive dashboard",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript","Git"],
    github: "https://github.com/PavanRasipogula/O-L-M-S",
    website: "#",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio with dark mode, smooth animations & project showcase.Built using React, JavaScript, and HTML with a modern Neumorphism design.Features interactive sections, clean UI, and fully optimized for all devices.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Git"],
    github: "https://github.com/yourusername/portfolio",
    website: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">Some Things <span className="me">I've Built..</span></h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>
            <ul className="project-tech">
              {proj.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            <div className="project-icons">
              <a href={proj.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href={proj.website} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
