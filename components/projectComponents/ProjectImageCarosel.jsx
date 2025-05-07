import React, { useState } from "react";

const ProjectImageCarousel = ({ images = [], className = "", style = {} }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [expanded, setExpanded] = useState(false);

  if (!images.length) return null;

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((current - 1 + images.length) % images.length);
      setFade(true);
    }, 150);
  };

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((current + 1) % images.length);
      setFade(true);
    }, 150);
  };

  const handleExpand = () => setExpanded(true);
  const handleClose = () => setExpanded(false);

  return (
    <div
      className={`container my-2 d-flex flex-column align-items-center justify-content-center ${className}`}
      style={{ background: "#232323", borderRadius: "12px", padding: "2rem", ...style }}
    >
      <div
        className="position-relative w-100 d-flex justify-content-center align-items-center"
        style={{ minHeight: "220px" }}
      >
        <button
          className="btn btn-light position-absolute start-0"
          style={{ zIndex: 2 }}
          onClick={prevImage}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <img
          src={images[current].src}
          alt={images[current].alt || ""}
          className={`img-fluid rounded transition-fade ${fade ? "fade-in" : "fade-out"}`}
          style={{
            width: "100%",
            maxWidth: "900px",
            maxHeight: "500px",
            objectFit: "cover",
            transition: "opacity 0.3s",
            cursor: "pointer",
          }}
          onClick={handleExpand}
          title="Click to expand"
        />
        <button
          className="btn btn-light position-absolute end-0"
          style={{ zIndex: 2 }}
          onClick={nextImage}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      {images[current].caption && (
        <div className="text-white mt-3">{images[current].caption}</div>
      )}
      <div className="mt-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`mx-1 btn btn-sm ${idx === current ? "btn-primary" : "btn-secondary"}`}
            style={{ borderRadius: "50%", width: "12px", height: "12px", padding: 0 }}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrent(idx);
                setFade(true);
              }, 150);
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      {/* Expanded modal */}
      {expanded && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            left: 0,
            top: 0,
          }}
          onClick={handleClose}
        >
          {/* Previous Button */}
          <button
            className="btn btn-light position-absolute start-0 top-50 translate-middle-y"
            style={{ zIndex: 10001, fontSize: "2rem", padding: "0.5rem 1rem" }}
            onClick={e => {
              e.stopPropagation();
              setCurrent((current - 1 + images.length) % images.length);
            }}
            aria-label="Previous"
          >
            &#8592;
          </button>
          {/* Expanded Image */}
          <img
            src={images[current].src}
            alt={images[current].alt || ""}
            style={{
              maxWidth: "95vw",
              maxHeight: "90vh",
              borderRadius: "12px",
              boxShadow: "0 4px 32px rgba(0,0,0,0.7)",
              background: "#232323",
            }}
            onClick={e => e.stopPropagation()}
          />
          {/* Next Button */}
          <button
            className="btn btn-light position-absolute end-0 top-50 translate-middle-y"
            style={{ zIndex: 10001, fontSize: "2rem", padding: "0.5rem 1rem" }}
            onClick={e => {
              e.stopPropagation();
              setCurrent((current + 1) % images.length);
            }}
            aria-label="Next"
          >
            &#8594;
          </button>
          {/* Close Button */}
          <button
            className="btn btn-light position-absolute top-0 end-0 m-4"
            style={{ zIndex: 10002, fontSize: "2rem", padding: "0.5rem 1rem" }}
            onClick={handleClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
      {/* Animation and responsive styles */}
      <style>
        {`
          .transition-fade {
            opacity: 1;
            transition: opacity 0.3s;
          }
          .fade-in {
            opacity: 1;
          }
          .fade-out {
            opacity: 0;
          }
          @media (max-width: 768px) {
            img.transition-fade {
              max-width: 100vw !important;
              max-height: 250px !important;
            }
            .container {
              padding: 1rem !important;
            }
          }
          @media (max-width: 480px) {
            img.transition-fade {
              max-width: 100vw !important;
              max-height: 160px !important;
            }
            .container {
              padding: 0.5rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProjectImageCarousel;