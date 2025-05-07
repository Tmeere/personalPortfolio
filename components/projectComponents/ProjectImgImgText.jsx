import React from "react";


const ProjectImgImgText = ({
  src1,
  alt1 = "Image 1",
  src2,
  alt2 = "Image 2",
  img1Style = {},
  img2Style = {},
  title = "",
  children,
  background = "#232323",
  borderRadius = "18px",
  padding = "32px 18px",
  textColor = "#fff",
  fontSize = "1.1rem",
  containerClass = "",
}) => (
  <div
    className={`container my-4 ${containerClass}`}
    style={{ background, borderRadius, padding }}
  >
    <div className="row align-items-center">
      {/* Image 1 */}
      <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
        <img
          src={src1}
          alt={alt1}
          style={{
            width: "100%",
            maxWidth: "500px", // Increased from 350px to 500px
            borderRadius: "12px",
            objectFit: "cover",
            ...img1Style,
          }}
        />
      </div>
      {/* Image 2 */}
      <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
        <img
          src={src2}
          alt={alt2}
          style={{
            width: "100%",
            maxWidth: "500px", // Increased from 350px to 500px
            borderRadius: "12px",
            objectFit: "cover",
            ...img2Style,
          }}
        />
      </div>
      {/* Text */}
      <div className="col-12 col-md-4">
        {title && (
          <h3 style={{ color: "#4fc3f7", marginBottom: "1rem", fontWeight: "bold", letterSpacing: "0.5px" }}>
            {title}
          </h3>
        )}
        <div style={{ color: textColor, fontSize }}>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectImgImgText;