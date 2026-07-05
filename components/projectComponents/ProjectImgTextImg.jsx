import React from "react";
import "./ProjectMediaLayouts.css";

const ProjectImgTextImg = ({
  leftImgSrc,
  leftImgAlt = "",
  rightImgSrc,
  rightImgAlt = "",
  children,
  style = {},
  className = "",
  imgStyle = {},
  flip = false,
}) => {
  const leftImg = <img src={leftImgSrc} alt={leftImgAlt} className="media-img media-flex-img" style={imgStyle} />;
  const rightImg = <img src={rightImgSrc} alt={rightImgAlt} className="media-img media-flex-img" style={imgStyle} />;
  const text = <div className="media-flex-text">{children}</div>;

  return (
    <div className={`media-block panel media-flex-row ${className}`} style={style}>
      {flip ? (
        <>
          {rightImg}
          {text}
          {leftImg}
        </>
      ) : (
        <>
          {leftImg}
          {text}
          {rightImg}
        </>
      )}
    </div>
  );
};

export default ProjectImgTextImg;
