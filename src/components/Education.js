import React from "react";
import "./Education.css";

const education = [
  {
    degree: "M.Tech in Computer Science and Engineering",
    college: "Vemu Institute of Technology, Chittoor",
    year: "Ongoing",
    score: "73%",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    college: "Vemu Institute of Technology, Chittoor",
    year: "Graduated: 2023",
    score: "75%",
  },
  {
    degree: "Intermediate (MPC)",
    college: "Sri Satya Sai College, Anantapur",
    year: "2018",
    score: "89%",
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="education-heading">Education..</h2>
      <div className="education-list">
        {education.map((item, idx) => (
          <div className="edu-card" key={idx}>
            <h3 className="edu-degree">{item.degree}</h3>
            <p className="edu-college">{item.college}</p>
            <div className="edu-meta">
              <span>📅 {item.year}</span>
              <span>🎯 {item.score}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="education-heading">Internship</h2>
      <div className="internship-card">
        <h3 className="edu-degree">KODNEST – Python Full Stack Intern</h3>
        <ul className="internship-points">
          <li>
            Collaborated with a cross-functional team of developers, designers,
            and project managers on real-world client projects.
          </li>
          <li>
            Developed and maintained responsive web applications using Python,
            Django, and Flask.
          </li>
          <li>
            Built dynamic front-end interfaces using HTML, CSS, and JavaScript,
            enhancing UX/UI.
          </li>
        </ul>
      </div>

      {/* {ITS Expireince } */}

      <h2 className="education-heading">Work Experience</h2>
      <div className="internship-card">
        <h3 className="edu-degree">NOBROKER Data Analyst</h3>
        <h5 className="">Feb 2024 – Present</h5>
        <ul className="internship-points">
          <li>
            Work in the Operations team to support large-scale market research
            and data processing tasks.
          </li>
          <li>
            Perform data collation, cleansing, analysis, and interpretation to
            ensure timely and high-quality delivery to clients.
          </li>
          <li>
            Use Excel and other tools to manage, validate, and visualize high
            volumes of structured consumer data.
          </li>
          <li>
            Collaborate with cross-functional teams to deliver insightful and
            accurate market intelligence. Adapt to flexible shifts and ensure
            deadline-driven data operations with a focus on quality and
            efficiency.
          </li>
          <li>
            Strong communication and problem-solving skills applied in a
            fast-paced analytical environment.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
