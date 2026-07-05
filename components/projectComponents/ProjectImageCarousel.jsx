import React, { useState } from "react";
import "./ProjectImageCarousel.css";

const ProjectImageCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [expanded, setExpanded] = useState(false);

  if (!images.length) return null;

  const goTo = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 150);
  };

  const prevImage = () => goTo((current - 1 + images.length) % images.length);
  const nextImage = () => goTo((current + 1) % images.length);

  return (
    <div className="carousel-block panel">
      <div className="carousel-viewport">
        <button className="carousel-arrow left" onClick={prevImage} aria-label="Previous">
          &#8592;
        </button>
        <img
          src={images[current].src}
          alt={images[current].alt || ""}
          className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
          onClick={() => setExpanded(true)}
          title="Click to expand"
        />
        <button className="carousel-arrow right" onClick={nextImage} aria-label="Next">
          &#8594;
        </button>
      </div>

      {images[current].caption && <div className="carousel-caption">{images[current].caption}</div>}

      <div className="carousel-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot ${idx === current ? "active" : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {expanded && (
        <div className="carousel-lightbox" onClick={() => setExpanded(false)}>
          <button
            className="carousel-arrow left lightbox"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <img
            src={images[current].src}
            alt={images[current].alt || ""}
            className="carousel-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="carousel-arrow right lightbox"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next"
          >
            &#8594;
          </button>
          <button className="carousel-close" onClick={() => setExpanded(false)} aria-label="Close">
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectImageCarousel;
