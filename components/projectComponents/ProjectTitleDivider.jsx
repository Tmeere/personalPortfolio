import React from "react";

const ProjectTitleDivider = ({ title, divider = false }) => (
  <div className="container my-3 d-flex justify-content-center">
    <div
      className={`bg-dark rounded-3 d-flex justify-content-center align-items-center`}
      style={
        divider
          ? { minHeight: "50px", padding: "0 2rem", width: "fit-content" }
          : { minHeight: "50px", width: "100%" }
      }
    >
      <h2 className="text-white m-0">{title}</h2>
    </div>
  </div>
);

export default ProjectTitleDivider;