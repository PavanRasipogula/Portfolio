import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-wrapper" id="contact">
      <div className="contact-left">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-text">
          I'm excited to connect with you. Whether you'd like to discuss
          collaborations, provide feedback, or just say hello, don't hesitate
          to reach out!
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/PavanRasipogula"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/PavanRasipogula"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/Pavan_Rasipogula"><i className="fab fa-instagram"></i></a>
          <a href="https://x.com/PavanRasipogula"><i className="fab fa-twitter"></i></a>
          <a href="mailto:justmailtopavankumar@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <label>Your Name *</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email *</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message *</label>
          <textarea rows="5" placeholder="Type your message" required />

          <button type="submit">
            <i className="fas fa-envelope"></i> Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
