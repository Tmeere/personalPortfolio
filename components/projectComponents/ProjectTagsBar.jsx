import React from "react";

const tagStyle = {
  background: "#eee",
  borderRadius: "16px",
  padding: "6px 16px",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  height: "32px", 
};

const ProjectTagsBar = ({ tags }) => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        padding: "8px 0",
        background: "#222",
        flexWrap: "wrap",
      }}
    >
      {tags.map((tag, idx) => (
        <span key={idx} style={tagStyle}>
          {tag}
        </span>
      ))}
    </div>
    <style>
      {`
        @media (max-width: 600px) {
          .project-tag {
            height: 36px !important;
            font-size: 15px !important;
            padding: 8px 18px !important;
          }
        }
      `}
    </style>
  </>
);

export default ProjectTagsBar;