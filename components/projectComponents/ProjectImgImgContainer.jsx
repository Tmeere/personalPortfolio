import React from "react";
import "./ProjectMediaLayouts.css";

const ProjectImgImgContainer = ({
  src1,
  alt1,
  src2,
  alt2,
  imgClassName = "",
  containerClassName = "",
  text = "",
  textClassName = "",
  img1Style = {},
  img2Style = {},
}) => (
  <div className={`media-block panel ${containerClassName}`}>
    <div className="media-grid-2">
      <img src={src1} alt={alt1} className={`media-img ${imgClassName}`} style={img1Style} />
      <img src={src2} alt={alt2} className={`media-img ${imgClassName}`} style={img2Style} />
    </div>
    {text && <div className={`media-caption ${textClassName}`}>{text}</div>}
  </div>
);

export default ProjectImgImgContainer;
