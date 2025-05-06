import React from "react";

const isYouTubeUrl = (url) =>
  typeof url === "string" && url.includes("youtube.com/embed");

const VideoOrEmbed = ({ src }) =>
  isYouTubeUrl(src) ? (
    <div
      className="ratio ratio-16x9 w-100 shadow-sm"
      style={{
        minWidth: 320,
        maxWidth: "600px",
        flex: 1,
        borderRadius: "1rem", // Add border radius to container
        overflow: "hidden",   // Ensure radius applies to iframe
      }}
    >
      <iframe
        src={src}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          border: 0,
          borderRadius: "1rem",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  ) : (
    <video
      src={src}
      controls
      className="w-100 rounded-4 shadow-sm"
      style={{ minWidth: 320, maxWidth: "600px", flex: 1 }}
    />
  );

const ProjectVidVidComponent = ({ videoSrc1, videoSrc2 }) => (
  <div className="container my-4">
    <div className="row justify-content-center">
      <div
        className="col-12 col-lg-12 bg-dark rounded-4 shadow p-4 d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center"
        style={{ borderRadius: "1rem" }} // Add custom radius to container
      >
        <VideoOrEmbed src={videoSrc1} />
        <VideoOrEmbed src={videoSrc2} />
      </div>
    </div>
  </div>
);

export default ProjectVidVidComponent;