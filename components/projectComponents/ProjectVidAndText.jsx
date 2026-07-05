import React from "react";
import "./ProjectVidAndText.css";

const ProjectVidAndText = ({ videoUrl, title, description, minHeight, children, flip = false }) => (
  <div className="vid-text-block panel">
    <div className="vid-text-video" style={{ order: flip ? 2 : 1, minHeight }}>
      <iframe
        src={videoUrl}
        title={title}
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="vid-text-copy" style={{ order: flip ? 1 : 2 }}>
      <h2>{title}</h2>
      <div className="vid-text-description">{description}</div>
      {children}
    </div>
  </div>
);

export default ProjectVidAndText;
