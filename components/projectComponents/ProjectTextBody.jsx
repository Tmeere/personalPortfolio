import React from "react";

const ProjectTextBody = ({ body, header }) => (
  <div className="container px-1">
    <div className="bg-dark text-white px-3 py-4" style={{ borderRadius: "1rem" }}>
      {header && (
        <h3
          className="mb-3"
          style={{
            color: "#2196f3", // Blue color to match ProjectTitleDivider
            fontWeight: 700,
            fontFamily: "Segoe UI, Arial, sans-serif"
          }}
        >
          {header}
        </h3>
      )}
      <p>
        {body}
      </p>
    </div>
  </div>
);

export default ProjectTextBody;