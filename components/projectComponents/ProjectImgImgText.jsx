import React from "react";
import "./ProjectMediaLayouts.css";

const ProjectImgImgText = ({
  src1,
  alt1 = "Image 1",
  src2,
  alt2 = "Image 2",
  img1Style = {},
  img2Style = {},
  title = "",
  children,
  containerClass = "",
}) => (
  <div className={`media-block panel ${containerClass}`}>
    <div className="media-grid-3">
      <img src={src1} alt={alt1} className="media-img" style={img1Style} />
      <img src={src2} alt={alt2} className="media-img" style={img2Style} />
      <div className="media-text-col">
        {title && <h3 className="media-title">{title}</h3>}
        <div className="media-text">{children}</div>
      </div>
    </div>
  </div>
);

export default ProjectImgImgText;
