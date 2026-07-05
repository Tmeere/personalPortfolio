import React from "react";
import "./ProjectGifGrid.css";

const ProjectGifGrid = ({ gifs }) => (
  <div className="gif-grid-block panel">
    <div className="gif-grid">
      {gifs.map((gif, idx) => (
        <div className="gif-grid-item" key={idx}>
          <img src={gif.src} alt={gif.alt} className="gif-grid-image" />
          {gif.caption && <div className="gif-grid-caption">{gif.caption}</div>}
        </div>
      ))}
    </div>
  </div>
);

export default ProjectGifGrid;
