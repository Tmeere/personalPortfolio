import React from "react";
import "./ProjectHeroSection.css";

const ProjectHeroSection = ({
  title = "Project Title",
  videoUrl = "https://www.youtube.com/embed/AyeXuVhHfwk?autoplay=1&mute=1&loop=1&playlist=AyeXuVhHfwk&controls=0&showinfo=0&modestbranding=1&rel=0",
  roleInfo = [
    "Role: Game Developer",
    "Engine: Unity",
    "Platform: PC",
    "Genre: Action/Adventure",
  ],
  leftInfo = [
    "Project Duration: 6 months",
    "Team Size: 5 members",
    "Tools: Unity, Blender, Photoshop",
    "Languages: C#, JavaScript",
  ],
  leftTitle = "Project Details",
  background = "#181818",
  cardBackground,
  summary,
  heroImage = "/images/Site%20Files/MidnightTaxiHeroImg.jpg",
  showLogo = false,
  downloadLinks = [],
}) => (
  <section
    className="proj-hero"
    style={{
      backgroundColor: background,
      backgroundImage: `linear-gradient(rgba(22,24,29,0.55), rgba(22,24,29,0.9)), url('${heroImage}')`,
    }}
  >
    <div className="proj-hero-inner">
      <h1 className="proj-hero-title">{title}</h1>

      {showLogo && (
        <img
          src="/images/Site Files/MidnightTaxiLogo.png"
          alt="Project logo"
          className="proj-hero-logo"
        />
      )}

      {summary && <p className="proj-hero-summary panel">{summary}</p>}

      <div className="proj-hero-card panel" style={cardBackground ? { background: cardBackground } : undefined}>
        <div className="proj-hero-video">
          <iframe
            src={videoUrl}
            title="Project Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <div className="proj-hero-info">
          <div className="proj-hero-info-block">
            <h4>Role</h4>
            <ul>
              {roleInfo.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="proj-hero-info-block">
            <h4>{leftTitle}</h4>
            <ul>
              {leftInfo.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {downloadLinks.length > 0 && (
            <div className="proj-hero-downloads">
              <h5>Additional Links</h5>
              <div className="proj-hero-download-list">
                {downloadLinks.map((link, idx) => (
                  <div key={idx} className="proj-hero-download">
                    <a href={link.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                    {link.description && <span>{link.description}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectHeroSection;
