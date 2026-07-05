import React from 'react';
import './contactSection.css'; // Import the CSS file for styling
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section">
      <p className="kicker">// contact</p>
      <h2>Links &amp; Socials</h2>
      <p className="contact-subtitle">Feel free to reach out or find more here.</p>
      <div className="contact-links">
        <a
          href="https://github.com/Tmeere"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <FaGithub size={18} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/thomasmeere"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <FaLinkedin size={18} /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default ContactSection;