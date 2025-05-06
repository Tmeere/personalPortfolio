import React from "react";

const ProjectHeroSection = ({
  title = "Project Title",
  videoUrl = "https://www.youtube.com/embed/AyeXuVhHfwk?autoplay=1&mute=1&loop=1&playlist=AyeXuVhHfwk&controls=0&showinfo=0&modestbranding=1&rel=0",
  roleInfo = [
    "Role: Game Developer",
    "Engine: Unity",
    "Platform: PC",
    "Genre: Action/Adventure",
  ],
  rightInfo = [
    "Developed core gameplay mechanics",
    "Implemented multiplayer features",
    "Designed immersive environments",
    "Optimized performance for smooth gameplay",
  ],
  leftInfo = [
    "Project Duration: 6 months",
    "Team Size: 5 members",
    "Tools: Unity, Blender, Photoshop",
    "Languages: C#, JavaScript",
  ],
  leftTitle = "Project Details",
  rightTitle = "Key Contributions",
  background = "#181818",
  cardBackground = "#232323",
  summary, // <-- Remove default value, make it required as a prop
  heroImage = "/images/Site%20Files/MidnightTaxiHeroImg.jpg",
  showLogo = false
}) => (
  <section
    className="d-flex flex-column align-items-center justify-content-center w-100 min-vh-60"
    style={{
      background: background,
      backgroundImage: `url('${heroImage}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
    {/* Title or Logo Row */}
    <div className="d-flex justify-content-center pt-5">
      <h1 className="text-white" style={{ fontWeight: 700, letterSpacing: 1 }}>
        {title}
      </h1>
    </div>
    {/* Centered Logo if enabled */}
    {showLogo && (
      <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
        <img
          src="/images/Site Files/MidnightTaxiLogo.png"
          alt="Centered Example"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
          }}
          className="midnight-taxi-logo"
        />
      </div>
    )}
    <div className="container">
      {/* Summary Row */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-lg-11">
          <div
            className="px-4 py-3"
            style={{
              background: "#232323",
              color: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              fontSize: "1rem", // Smaller font size
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center", // Center the text
            }}
          >
            {summary}
          </div>
        </div>
      </div>
      {/* Main Card Row */}
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11">
          <div
            className="card shadow-lg border-0"
            style={{ background: cardBackground, borderRadius: "18px" }}
          >
            <div className="row align-items-center g-0">
              {/* Video Column */}
              <div className="col-md-6 d-flex justify-content-center p-4">
                <div
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    minHeight: "300px",
                    aspectRatio: "16/9",
                    background: "#222",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <iframe
                    src={videoUrl}
                    title="Project Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{
                      border: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                      background: "#222"
                    }}
                  />
                </div>
              </div>
              {/* Info Columns */}
              <div className="col-md-6 p-4">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="text-white">
                      <h4>Role</h4>
                      <ul>
                        {roleInfo &&
                          roleInfo.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                      </ul>
                    </div>
                    <div className="text-white">
                      <h4>{leftTitle}</h4>
                      <ul>
                        {leftInfo &&
                          leftInfo.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-white">
                      <h4>{rightTitle}</h4>
                      <ul>
                        {rightInfo &&
                          rightInfo.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
  </section>
);

export default ProjectHeroSection;

