import React from "react";
import { Link } from "react-router-dom";
import "./ProjectNavbar.css";

const ProjectNavbar = () => (
  <nav className="proj-nav">
    <div className="proj-nav-inner">
      <Link className="proj-nav-brand" to="/">
        <img src="/Me.svg" alt="Logo" className="proj-nav-logo" />
        <span>Thomas Meere</span>
      </Link>
      <div className="proj-nav-links">
        <Link to="/">Home</Link>
        <a
          href="/resume/Thomas Meere 2026 Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé
        </a>
      </div>
    </div>
  </nav>
);

export default ProjectNavbar;
