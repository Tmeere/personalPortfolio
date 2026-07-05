import React from "react";
import "./ProjectMediaLayouts.css";

const ProjectImageContainer = ({
  src,
  alt = "",
  style = {},
  className = "",
  summary = null,
}) => (
  <div className={`media-block panel ${className}`} style={style}>
    <img src={src} alt={alt} className="media-img" />
    {summary && <div className="media-caption">{summary}</div>}
  </div>
);

export default ProjectImageContainer;
