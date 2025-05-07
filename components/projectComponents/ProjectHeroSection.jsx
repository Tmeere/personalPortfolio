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
  leftInfo = [
    "Project Duration: 6 months",
    "Team Size: 5 members",
    "Tools: Unity, Blender, Photoshop",
    "Languages: C#, JavaScript",
  ],
  leftTitle = "Project Details",
  background = "#181818",
  cardBackground = "#232323",
  summary,
  heroImage = "/images/Site%20Files/MidnightTaxiHeroImg.jpg",
  showLogo = false,
  downloadLinks = [
    // Example default
    // { url: "https://example.com/download/windows", label: "Download for Windows", description: "Windows Installer" },
    // { url: "https://example.com/download/mac", label: "Download for Mac", description: "MacOS App" }
  ]
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
      <h1
        style={{
          fontWeight: 800,
          letterSpacing: 1,
          fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
          color: "#2196f3", // Lighter blue
          fontSize: "3rem",
          textShadow: "0 2px 12px rgba(33,150,243,0.10), 0 4px 32px rgba(41, 41, 41, 0.92)", // Added background shadow
          background: "rgba(24,24,24,0.55)", // Subtle dark background for contrast
          borderRadius: "0.7rem",
          padding: "0.5rem 2rem"
        }}
      >
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
              fontSize: "1rem",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <em>{summary}</em>
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
              <div className="col-md-6 d-flex justify-content-center p-4" style={{ height: "100%" }}>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    minHeight: "500px",
                    height: "100%",
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
                <div className="text-white">
                  <h4
                    style={{
                      fontSize: "2.3rem",
                      color: "#2196f3", // Lighter blue
                      fontWeight: 600,
                      fontFamily: "Segoe UI, Arial, sans-serif", // Lighter, modern font
                      letterSpacing: "1px",
                      marginBottom: "0.2em", // Less vertical spacing
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                  >
                    Role
                  </h4>
                  <ul>
                    {roleInfo &&
                      roleInfo.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                  </ul>
                </div>
                <div className="text-white">
                  <h4
                    style={{
                      fontSize: "2.3rem",
                      color: "#2196f3", // Lighter blue
                      fontWeight: 600,
                      fontFamily: "Segoe UI, Arial, sans-serif",
                      letterSpacing: "1px",
                      marginBottom: "0.2em", // Less vertical spacing
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                  >
                    {leftTitle}
                  </h4>
                  <ul>
                    {leftInfo &&
                      leftInfo.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                  </ul>
                </div>
                {/* Download Links inside Info Column */}
                {downloadLinks && downloadLinks.length > 0 && (
                  <div
                    className="px-4 py-3 mt-4"
                    style={{
                      background: "#232323",
                      color: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                      maxWidth: "100%",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "1.7rem",
                        color: "#2196f3",
                        fontWeight: 600,
                        fontFamily: "Segoe UI, Arial, sans-serif",
                        letterSpacing: "1px",
                        marginBottom: "0.3em", // Slightly less space
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                    >
                      Additional Links
                    </h5>
                    <div className="d-flex flex-wrap justify-content-center">
                      {downloadLinks.map((link, idx) => (
                        <div key={idx} className="mb-2 mx-2">
                          <a
                            href={link.url}
                            className="btn btn-primary m-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontWeight: 500,
                              fontFamily: "Segoe UI, Arial, sans-serif",
                              letterSpacing: "0.5px"
                            }}
                          >
                            {link.label}
                          </a>
                          {link.description && (
                            <div style={{ fontSize: "0.95em", color: "#ccc" }}>{link.description}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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

