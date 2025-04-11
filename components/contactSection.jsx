import React from 'react';
import './contactSection.css'; // Import the CSS file for styling

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section"> {/* Added id="contact" */}
      <h2>Links & Socials</h2>
      <p>Feel free to reach out or find more here!</p>
      <div className="contact-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default ContactSection;