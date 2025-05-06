import React from "react";

const ProjectTextBody = ({ body }) => (
  <div className="container px-1">
    <div className="bg-dark text-white px-3 py-1" style={{ borderRadius: "1rem" }}>
      <p>
        {body}
      </p>
    </div>
  </div>
);

export default ProjectTextBody;