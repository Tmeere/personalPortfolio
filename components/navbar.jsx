import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Adjust this value to match navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <a className="site-nav-brand" href="#home">
          <img src="/Me.svg" alt="Logo" className="site-nav-logo" />
          Thomas Meere
        </a>

        <button
          className="site-nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`site-nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => scrollToSection("home")}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
          <li>
            <a
              href="/resume/Thomas Meere 2026 Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
