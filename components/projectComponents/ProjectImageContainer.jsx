import React from "react";

const ProjectImageContainer = ({ src, alt = "", style = {}, className = "" }) => (
  <div className={`container my-4 d-flex justify-content-center ${className}`} style={{ background: "#232323", borderRadius: "12px", padding: "1.5rem", ...style }}>
    <img
      src={src}
      alt={alt}
      style={{ maxWidth: "100%", borderRadius: "8px", boxShadow: "0 2px 16px rgba(0,0,0,0.25)" }}
    />
  </div>
);

export default ProjectImageContainer;