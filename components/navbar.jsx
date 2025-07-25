import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Adjust this value to match your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close the navbar after clicking a link
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      const bootstrapCollapse = new window.bootstrap.Collapse(navbarCollapse);
      bootstrapCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img 
            src="/Me.svg" 
            alt="Logo" 
            style={{ 
              width: "30px", 
              height: "30px", 
              marginRight: "10px", 
              borderRadius: "50%", 
              border: "2px solid grey" 
            }} 
          />
          Thomas Meere
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="\resume\Thomas Meere - Fullstack Dev 2025 V3.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  const navbarCollapse = document.getElementById("navbarNav");
                  if (navbarCollapse.classList.contains("show")) {
                    const bootstrapCollapse = new window.bootstrap.Collapse(navbarCollapse);
                    bootstrapCollapse.hide();
                  }
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;