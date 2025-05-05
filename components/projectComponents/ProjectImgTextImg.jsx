import React from "react";

const ProjectImgTextImg = ({
  leftImgSrc,
  leftImgAlt = "",
  rightImgSrc,
  rightImgAlt = "",
  children,
  style = {},
  className = "",
  imgStyle = {},
  flip = false
}) => (
  <div
    className={`container my-4 d-flex flex-column flex-md-row align-items-center justify-content-center ${className}`}
    style={{ background: "#232323", borderRadius: "12px", padding: "2rem", ...style }}
  >
    {flip ? (
      <>
        {/* Right Image */}
        <img
          src={rightImgSrc}
          alt={rightImgAlt}
          className="mb-3 mb-md-0 mx-md-3"
          style={{ maxWidth: "200px", borderRadius: "8px", ...imgStyle }}
        />
        {/* Text */}
        <div className="flex-fill text-white px-3 py-2">{children}</div>
        {/* Left Image */}
        <img
          src={leftImgSrc}
          alt={leftImgAlt}
          className="mb-3 mb-md-0 mx-md-3"
          style={{ maxWidth: "200px", borderRadius: "8px", ...imgStyle }}
        />
      </>
    ) : (
      <>
        {/* Left Image */}
        <img
          src={leftImgSrc}
          alt={leftImgAlt}
          className="mb-3 mb-md-0 mx-md-3"
          style={{ maxWidth: "200px", borderRadius: "8px", ...imgStyle }}
        />
        {/* Text */}
        <div className="flex-fill text-white px-3 py-2">{children}</div>
        {/* Right Image */}
        <img
          src={rightImgSrc}
          alt={rightImgAlt}
          className="mb-3 mb-md-0 mx-md-3"
          style={{ maxWidth: "200px", borderRadius: "8px", ...imgStyle }}
        />
      </>
    )}
  </div>
);

export default ProjectImgTextImg;