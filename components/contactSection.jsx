import React from 'react';
import './contactSection.css'; // Import the CSS file for styling
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section"> {/* Added id="contact" */}
      <h2>Links & Socials</h2>
      <p>Feel free to reach out or find more here!</p>
      <div className="contact-links">
        <a
          href="https://github.com/Tmeere"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaGithub size={24} className="me-2" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/thomasmeere"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin size={24} className="me-2" /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default ContactSection;