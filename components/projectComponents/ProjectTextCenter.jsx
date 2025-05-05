import React from "react";

const ProjectTextCenter = () => (
  <div className="container my-4 d-flex flex-column align-items-center">
    <div className="bg-dark text-white p-4 rounded text-center" style={{ maxWidth: "600px", width: "100%" }}>
      <h2 className="mb-3">Project Title</h2>
      <p>
        This is a simple project description inside a centered dark grey (Bootstrap dark) container. You can customize this text and title to describe your project details.
      </p>
    </div>
  </div>
);

export default ProjectTextCenter;