import "./heroSection.css";
import { FaChevronDown } from "react-icons/fa";

function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero grid-bg">
      <div className="hero-inner section">
        <div className="hero-text">
          <p className="kicker">BeginPlay() — Technical Designer / Software Engineer</p>
          <h1 className="hero-title">Hi, I'm Thomas Meere</h1>
          <h2 className="hero-subtitle">Building playable systems, end to end</h2>
          <p className="hero-bio">
            Experienced in full-stack development and game design, specializing in
            immersive experiences. Skilled in C++, C#, JavaScript/React, and Python,
            with creative tools like Blender and the Adobe Creative Suite. Passionate
            about VR/AR development, retro game making, and shipping playable systems
            from design doc to release.
          </p>
          <button className="btn btn-primary hero-cta" onClick={scrollToAbout}>
            <FaChevronDown /> See More <FaChevronDown />
          </button>
        </div>

        <div className="hero-diagram panel">
          <div className="panel-label">EventGraph — Portfolio_BP</div>
          <svg viewBox="0 0 260 160" width="100%" height="200" className="hero-svg">
            <rect className="node" x="10" y="24" width="80" height="34" rx="4" />
            <text className="node-title" x="18" y="45">BeginPlay</text>

            <rect className="node" x="115" y="10" width="80" height="34" rx="4" />
            <text className="node-title" x="123" y="31">LoadSkills</text>

            <rect className="node" x="115" y="78" width="80" height="34" rx="4" />
            <text className="node-title" x="123" y="99">LoadProjects</text>

            <rect className="node" x="205" y="44" width="50" height="34" rx="4" />
            <text className="node-title" x="212" y="65">Render</text>

            <path className="wire" d="M90,41 C100,41 100,27 115,27" />
            <path className="wire" d="M90,49 C100,60 100,95 115,95" />
            <path className="wire" d="M195,27 C205,27 205,58 205,58" />
            <path className="wire" d="M195,95 C205,95 205,64 205,64" />

            <circle className="pin" cx="90" cy="41" r="2.5" />
            <circle className="pin" cx="115" cy="27" r="2.5" />
            <circle className="pin" cx="115" cy="95" r="2.5" />
            <circle className="pin" cx="205" cy="61" r="2.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
