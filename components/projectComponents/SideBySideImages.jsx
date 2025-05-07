import React from "react";

const SideBySideImages = ({
  leftImgSrc,
  leftImgAlt = "",
  rightImgSrc,
  rightImgAlt = "",
  containerStyle = {},
  leftImgStyle = {},
  rightImgStyle = {},
  className = "",
}) => (
  <div
    className={`d-flex align-items-center justify-content-center bg-dark rounded p-4 gap-4 ${className}`}
    style={containerStyle}
  >
    <img
      src={leftImgSrc}
      alt={leftImgAlt}
      className="img-fluid rounded"
      style={{ maxWidth: "200px", ...leftImgStyle }}
    />
    <img
      src={rightImgSrc}
      alt={rightImgAlt}
      className="img-fluid rounded"
      style={{ maxWidth: "200px", ...rightImgStyle }}
    />
  </div>
);

export default SideBySideImages;