import React from "react";

const ProjectVideoAndImg = ({
  videoUrl,
  imgSrc,
  imgAlt = "Project Image",
  videoTitle = "Project Video",
  imgStyle = {},
  videoStyle = {},
  containerClass = "",
  text = "", // Add text prop
}) => (
  <div
    className={`container my-2 ${containerClass}`}
    style={{
      background: "#232323",
      borderRadius: "16px",
      padding: "32px 24px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
    }}
  >
    <div className="row">
      {/* Video Column (Left, full height/width) */}
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "350px",
            aspectRatio: "16/9",
            background: "#222",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            ...videoStyle,
          }}
        >
          <iframe
            src={videoUrl}
            title={videoTitle}
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              border: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              background: "#222",
            }}
          />
        </div>
      </div>
      {/* Image Column (Right, full height/width) */}
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "350px",
            maxHeight: "500px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            ...imgStyle,
          }}
        />
      </div>
    </div>
    {/* New row for text */}
    <div className="row mt-3">
      <div className="col text-center">
        <span style={{ color: "#fff", fontSize: "1.1rem" }}>
          {text}
        </span>
      </div>
    </div>
  </div>
);

export default ProjectVideoAndImg;