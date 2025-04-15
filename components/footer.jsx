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
    <footer className="footer bg-dark text-white py-3">
      <div className="container text-center">
        <a
          href="#"
          className="back-to-top mb-2"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            scrollToTop();
          }}
        >
          <FaArrowUp/> RETURN UP  <FaArrowUp /> 
          
        </a>
        <br></br>
        <p className="footer-text mb-0 mt-3">
          Thomas Meere - Technical Designer | Software Engineer | 
          <a
            href="https://www.linkedin.com/in/thomasmeere/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1"
          >
            <FaLinkedin size={32} />
          </a> | 
          <a
            href="https://github.com/Tmeere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1"
          >
            <FaGithub size={32} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;