import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa'; // Import the arrow-up icon

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <a
          href="#"
          className="back-to-top"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <FaArrowUp /> Return up <FaArrowUp />
        </a>
        <p className="footer-text">
          Thomas Meere — Technical Designer | Software Engineer
          <a href="https://www.linkedin.com/in/thomasmeere/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Tmeere" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;