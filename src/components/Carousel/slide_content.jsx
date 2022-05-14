import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "__slides __active" : "__inactive"}
        >
          <img className="slide__image" src={slide.urls} alt="" />
          <h2 className="slide__title">{slide.title}</h2>
          <h3 className="slide__text">{slide.desciption}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;