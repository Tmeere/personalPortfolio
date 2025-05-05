import React from "react";

const ProjectHeroSection = ({
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
}) => (
  <section
    className="d-flex align-items-center justify-content-center w-100 min-vh-60"
    style={{ background }}
  >
    <div className="container py-5">
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
                    minHeight: "300px", // You can adjust this value as needed
                    aspectRatio: "16/9", // Optional: keeps the aspect ratio, remove if you want full flexibility
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
                      objectFit: "cover", // Ensures the video fills the box
                      borderRadius: "12px",
                      background: "#222"
                    }}
                  />
                </div>
              </div>
              {/* Info Columns */}
              <div className="col-md-6 p-4">
                <div className="row">
                  <div className="col-6">
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
                  <div className="col-6">
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
  </section>
);

export default ProjectHeroSection;

