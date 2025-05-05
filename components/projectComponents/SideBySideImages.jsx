import React from "react";

const SideBySideImages = ({
  leftImgSrc,
  leftImgAlt = "",
  rightImgSrc,
  rightImgAlt = "",
  containerStyle = {},
  imgStyle = {},
  className = "",
}) => (
  <div
    className={`d-flex align-items-center justify-content-center ${className}`}
    style={{
      background: "#232323",
      borderRadius: "12px",
      padding: "2rem",
      gap: "2rem",
      ...containerStyle,
    }}
  >
    <img
      src={leftImgSrc}
      alt={leftImgAlt}
      style={{ maxWidth: "200px", borderRadius: "8px", ...imgStyle }}
    />
    <img
      src={rightImgSrc}
      alt={rightImgAlt}
      style={{ maxWidth: "200px", borderRadius: "8px", ...imgStyle }}
    />
  </div>
);

export default SideBySideImages;