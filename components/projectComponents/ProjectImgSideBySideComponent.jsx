import React from "react";

const ProjectImgSideBySideComponent = ({
  leftImgSrc,
  leftImgAlt = "",
  leftImgText = "",
  rightImgSrc,
  rightImgAlt = "",
  rightImgText = "",
  style = {},
  className = "",
  imgStyle = {},
}) => (
  <div
    className={`container my-4 d-flex flex-column flex-md-row align-items-center justify-content-center ${className}`}
    style={{ background: "#232323", borderRadius: "12px", padding: "2rem", ...style }}
  >
    <div className="d-flex flex-column align-items-center mx-md-3 mb-3 mb-md-0">
      <img
        src={leftImgSrc}
        alt={leftImgAlt}
        style={{ maxWidth: "200px", borderRadius: "8px", ...imgStyle }}
      />
      <span className="text-white mt-2">{leftImgText}</span>
    </div>
    <div className="d-flex flex-column align-items-center mx-md-3 mb-3 mb-md-0">
      <img
        src={rightImgSrc}
        alt={rightImgAlt}
        style={{ maxWidth: "200px", borderRadius: "8px", ...imgStyle }}
      />
      <span className="text-white mt-2">{rightImgText}</span>
    </div>
  </div>
);

export default ProjectImgSideBySideComponent;