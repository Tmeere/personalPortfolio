import React from "react";
import "./ProjectTextBody.css";

const ProjectTextBody = ({ body, header }) => (
  <div className="proj-text-body-wrap section">
    <div className="proj-text-body panel">
      {header && <h3 className="proj-text-body-header">{header}</h3>}
      <div className="proj-text-body-content">{body}</div>
    </div>
  </div>
);

export default ProjectTextBody;
