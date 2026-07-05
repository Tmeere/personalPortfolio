import React from "react";
import "./ProjectVidVidComponent.css";

const isYouTubeUrl = (url) =>
  typeof url === "string" && url.includes("youtube.com/embed");

const VideoOrEmbed = ({ src }) =>
  isYouTubeUrl(src) ? (
    <div className="vidvid-embed">
      <iframe
        src={src}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ) : (
    <video src={src} controls className="vidvid-video" />
  );

const ProjectVidVidComponent = ({ videoSrc1, videoSrc2 }) => (
  <div className="vidvid-block panel">
    <VideoOrEmbed src={videoSrc1} />
    <VideoOrEmbed src={videoSrc2} />
  </div>
);

export default ProjectVidVidComponent;
