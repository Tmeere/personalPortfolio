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
  text = "",
}) => (
  <div className={`video-img-block panel ${containerClass}`}>
    <div className="video-img-grid">
      <div className="video-img-video" style={videoStyle}>
        <iframe src={videoUrl} title={videoTitle} allow="autoplay; encrypted-media" allowFullScreen />
      </div>
      <img src={imgSrc} alt={imgAlt} className="video-img-image" style={imgStyle} />
    </div>
    {text && <div className="video-img-caption">{text}</div>}
  </div>
);

export default ProjectVideoAndImg;
