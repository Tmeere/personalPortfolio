import React from "react";

const ProjectImageTextContainer = ({
  imgSrc,
  imgAlt = "Project Image",
  children,
  imgStyle = {},
  containerClass = "",
  background = "#232323",
  borderRadius = "18px",
  padding = "32px 18px",
  textColor = "#fff",
  fontSize = "1.1rem",
  boxShadow = "0 4px 24px rgba(0,0,0,0.18)",
  maxWidth = "400px",
  title = "", // <-- Added title prop
}) => (
  <div
    className={`container my-4 ${containerClass}`}
    style={{ background, borderRadius, padding }}
  >
    <div className="row align-items-center">
      {/* Image Left */}
      <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: "100%",
            maxWidth,
            borderRadius: "12px",
            boxShadow,
            objectFit: "cover",
            ...imgStyle,
          }}
        />
      </div>
      {/* Text Right */}
      <div className="col-12 col-md-6">
        {title && (
          <h3 style={{ color: "#4fc3f7", marginBottom: "1rem", fontWeight: "bold", letterSpacing: "0.5px" }}>
            {title}
          </h3>
        )}
        <div style={{ color: textColor, fontSize }}>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectImageTextContainer;