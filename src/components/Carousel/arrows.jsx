import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="__prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="__next" onClick={nextSlide}>
        &#10095;
      </span>

    </div>
  );
}

export default Arrows;