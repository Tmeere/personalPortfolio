import React from "react";
import "./ProjectTagsBar.css";

const ProjectTagsBar = ({ tags }) => (
  <div className="proj-tags-bar">
    {tags.map((tag, idx) => (
      <span key={idx} className="chip proj-tag">
        {tag}
      </span>
    ))}
  </div>
);

export default ProjectTagsBar;
