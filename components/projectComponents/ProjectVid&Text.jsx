import React from "react";

const ProjectVidAndText = ({
  videoUrl,
  title,
  description,
  minHeight = "500px",
  children,
  flip = false
}) => (
  <div className="container my-2 bg-dark rounded" style={{ borderRadius: "12px" }}>
    <div className="row align-items-stretch py-4 flex-md-row flex-column">
      {flip ? (
        <>
          {/* Text - 8 columns */}
          <div className="col-md-8 text-white d-flex flex-column justify-content-center">
            <h2 style={{
              fontSize: "2.1rem",
              color: "#2196f3",
              fontWeight: 600,
              fontFamily: "Segoe UI, Arial, sans-serif",
              letterSpacing: "1px",
              marginBottom: "0.4em"
            }}>
              {title}
            </h2>
            <p>
              {description}
            </p>
            {children}
          </div>
          {/* Video - 4 columns */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex" style={{ height: "100%" }}>
            <div style={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: minHeight,
              borderRadius: "8px",
              overflow: "hidden"
            }}>
              <iframe
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px"
                }}
              ></iframe>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Video - 4 columns */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex" style={{ height: "100%" }}>
            <div style={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: minHeight,
              borderRadius: "8px",
              overflow: "hidden"
            }}>
              <iframe
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px"
                }}
              ></iframe>
            </div>
          </div>
          {/* Text - 8 columns */}
          <div className="col-md-8 text-white d-flex flex-column justify-content-center">
            <h2 style={{
              fontSize: "2.1rem",
              color: "#2196f3",
              fontWeight: 600,
              fontFamily: "Segoe UI, Arial, sans-serif",
              letterSpacing: "1px",
              marginBottom: "0.4em"
            }}>
              {title}
            </h2>
            <p>
              {description}
            </p>
            {children}
          </div>
        </>
      )}
    </div>
  </div>
);

export default ProjectVidAndText;