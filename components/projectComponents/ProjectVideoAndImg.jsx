import React from "react";
import "./ProjectVideoAndImg.css";

const ProjectVideoAndImg = ({
  videoUrl,
  imgSrc,
  imgAlt = "Project Image",
  videoTitle = "Project Video",
  imgStyle = {},
  videoStyle = {},
  containerClass = "",
  title = "",
  text = "",
  children,
}) => (
  <div className={`video-img-block panel ${containerClass}`}>
    {title && <h3 className="video-img-title">{title}</h3>}
    <div className="video-img-grid">
      <div className="video-img-video" style={videoStyle}>
        <iframe src={videoUrl} title={videoTitle} allow="autoplay; encrypted-media" allowFullScreen />
      </div>
      <img src={imgSrc} alt={imgAlt} className="video-img-image" style={imgStyle} />
    </div>
    {(text || children) && <div className="video-img-caption">{text || children}</div>}
  </div>
);

export default ProjectVideoAndImg;
