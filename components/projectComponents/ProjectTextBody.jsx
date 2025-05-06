import React from "react";

const ProjectTextBody = ({ body }) => (
  <div className="container my-4">
    <div className="bg-dark text-white p-4 rounded">
      <p>
        {body}
      </p>
    </div>
  </div>
);

export default ProjectTextBody;