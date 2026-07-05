import React from "react";
import "./ProjectTitleDivider.css";

const ProjectTitleDivider = ({ title, divider = false }) => (
  <div className={`title-divider-wrap ${divider ? "fit" : "full"}`}>
    <div className="title-divider panel">
      <h2>{title}</h2>
    </div>
  </div>
);

export default ProjectTitleDivider;
