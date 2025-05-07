import React from "react";

const ProjectTitleDivider = ({ title, divider = false }) => (
  <div className="container my-3 d-flex justify-content-center">
    <div
      className={`bg-dark rounded-3 d-flex justify-content-center align-items-center`}
      style={
        divider
          ? { minHeight: "40px", padding: "0 1rem", width: "fit-content" }
          : { minHeight: "50px", width: "100%" }
      }
    >
      <h2
        className="m-0"
        style={{
          fontSize: "1.7rem",
          color: "#2196f3", // Blue color
          fontWeight: 700,
          fontFamily: "Segoe UI, Arial, sans-serif"
        }}
      >
        {title}
      </h2>
    </div>
  </div>
);

export default ProjectTitleDivider;