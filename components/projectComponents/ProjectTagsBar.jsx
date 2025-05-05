import React from "react";

const ProjectTagsBar = ({ tags }) => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    padding: "8px 0",
    background: "#222" // Dark grey background
  }}>
    {tags.map((tag, idx) => (
      <span
        key={idx}
        style={{
          background: "#eee",
          borderRadius: "16px",
          padding: "6px 16px",
          fontSize: "14px"
        }}
      >
        {tag}
      </span>
    ))}
  </div>
);

export default ProjectTagsBar;