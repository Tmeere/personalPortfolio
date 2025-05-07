import React from "react";

const ProjectImageContainer = ({
  src,
  alt = "",
  style = {},
  className = "",
  summary = null,
}) => (
  <div
    className={`container my-4 d-flex flex-column align-items-center bg-dark ${className}`}
    style={{ borderRadius: "12px", padding: "1.5rem", background: "#23272b", ...style }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        maxWidth: "100%",
        borderRadius: "8px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.25)"
      }}
    />
    {summary && (
      <div style={{ color: "#fff", marginTop: "1rem", textAlign: "center" }}>
        {summary}
      </div>
    )}
  </div>
);

export default ProjectImageContainer;