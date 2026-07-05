import React from "react";
import "./ProjectMediaLayouts.css";

const ProjectImageTextContainer = ({
  imgSrc,
  imgAlt = "Project Image",
  children,
  imgStyle = {},
  containerClass = "",
  title = "",
}) => (
  <div className={`media-block panel ${containerClass}`}>
    <div className="media-grid-2-1">
      <img src={imgSrc} alt={imgAlt} className="media-img" style={imgStyle} />
      <div className="media-text-col">
        {title && <h3 className="media-title">{title}</h3>}
        <div className="media-text">{children}</div>
      </div>
    </div>
  </div>
);

export default ProjectImageTextContainer;
