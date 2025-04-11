import React from 'react';
import './footer.css';

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
          RETURN UP?
        </a>
        <br></br>
        <p className="footer-text mb-0">
          Thomas Meere - Technical Designer | Software Engineer
        </p>
      </div>
    </footer>
  );
};

export default Footer;