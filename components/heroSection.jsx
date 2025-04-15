import "bootstrap/dist/css/bootstrap.min.css";
import "./heroSection.css";
import { FaChevronDown } from "react-icons/fa"; // Import Font Awesome icon

function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section d-flex align-items-center justify-content-center">
      <div className="container">
        {/* Left Column: Text */}
        <div className="text-column-wrapper p-4 rounded shadow">
          {/* Editor Header */}
          <div className="editor-header">
            <div className="editor-buttons">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <span className="editor-title">heroSection.jsx</span>
          </div>

          <div className="text-column text-center text-md-start d-flex">
            {/* Line Numbers */}
            <div className="line-numbers pe-3">
              {[...Array(15)].map((_, index) => (
                <div key={index} className="line-number">
                  {index + 1}
                </div>
              ))}
            </div>
            {/* Text Content */}
            <div>
              <h1 className="display-4 fw-bold glow-text">
                Hello, I'm Thomas Meere!
              </h1>
              <h2 className="h4 text-primary">
                Game Designer | Software Engineer
              </h2>
              <hr className="divider" />
              <p className="mt-3">
                &gt; Experienced in full-stack development and game design,
                specializing in creating immersive experiences.
                <br />
                <br></br>
                &gt; Skilled in programming (C++, C#, JavaScript/React, Python)
                and creative tools like Adobe Creative Suite.
                <br />
                <br></br>
                &gt; Passionate about VR/AR development, retro game making, and
                building innovative solutions.
              </p>
              <div className="button-container text-center">
                <button id="btn-primary" onClick={scrollToAbout}>
                  <FaChevronDown /> See More  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;