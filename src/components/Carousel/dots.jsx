import React from "react";

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all__dots">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "__dot active__dot" : "__dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;