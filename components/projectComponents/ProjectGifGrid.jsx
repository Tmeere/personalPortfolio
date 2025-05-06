import React from "react";

const ProjectGifGrid = ({ gifs }) => (
  <div
    className="py-4"
    style={{
      background: "#222831",
      borderRadius: "16px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <div className="container">
      <div className="row">
        {gifs.map((gif, idx) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
            <div className="card h-100 border-0 bg-transparent">
              <img
                src={gif.src}
                alt={gif.alt}
                className="card-img-top img-fluid rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "320px" }}
              />
              {gif.caption && (
                <div className="mt-2 text-center text-light" style={{ fontSize: "1rem" }}>
                  {gif.caption}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectGifGrid;
