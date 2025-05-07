import React from "react";

const ProjectImgImgContainer = ({
  src1,
  alt1,
  src2,
  alt2,
  imgClassName = "",
  containerClassName = "",
  text = "",
  textClassName = "",
  img1Style = {},
  img2Style = {}
}) => (
  <div
    className={`container bg-dark text-light py-4 ${containerClassName}`}
    style={{ borderRadius: "20px" }}
  >
    <div className="row g-3">
      <div className="col-12 col-md-6">
        <div className="h-100 w-100 p-2" style={{ borderRadius: "24px", overflow: "hidden" }}>
          <img
            src={src1}
            alt={alt1}
            className={`img-fluid rounded ${imgClassName}`}
            style={{ borderRadius: "16px", ...img1Style }}
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="h-100 w-100 p-2" style={{ borderRadius: "24px", overflow: "hidden" }}>
          <img
            src={src2}
            alt={alt2}
            className={`img-fluid rounded ${imgClassName}`}
            style={{ borderRadius: "16px", ...img2Style }}
          />
        </div>
      </div>
    </div>
    <div className="row py-3">
      <div className={`col-12 text-center ${textClassName}`}>
        {text}
      </div>
    </div>
  </div>
);

export default ProjectImgImgContainer;