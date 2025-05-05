import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
    <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">
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
          <span className="d-none d-sm-inline">Thomas Meere</span>
        </a>
        <div className="navbar-nav ms-auto flex-row">
          <a className="nav-link" href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a 
            className="nav-link" 
            href="/resume/Thomas Meere - Game Designer _ Technical Designer.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              const navbarCollapse = document.getElementById("navbarNav");
              if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                const bootstrapCollapse = new window.bootstrap.Collapse(navbarCollapse);
                bootstrapCollapse.hide();
              }
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;