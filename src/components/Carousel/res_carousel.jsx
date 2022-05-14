// import React from 'react'
// import ReactDOM from "react-dom";
// import Carousel from "react-elastic-carousel";
// import Item from "./items";

// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 1 },
//     { width: 768, itemsToShow: 1 },
//     { width: 1200, itemsToShow: 2 },
//   ];

// export const ResCarousel = () => {
//     return (
//         <>
//       <div className="App">
//         <Carousel breakPoints={breakPoints}>
//           <Item>One</Item>
//           <Item>Two</Item>
//           <Item>Three</Item>
//           <Item>Four</Item>
//           <Item>Five</Item>
//           <Item>Six</Item>
//           <Item>Seven</Item>
//           <Item>Eight</Item>
//         </Carousel>
//       </div>
//     </>
//     )
// }
import React, { useEffect, useState } from "react";
import Arrows from './arrows'
import Dots from './dots'
import SlidesContent from './slide_content'
import sliderImage from './items'
import "./carousel.css";

const len = sliderImage.length - 1;

const ResCarousel = (props) => {
    const[activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
      }, [activeIndex]);

    return (
        <div className="slider__container">
            <SlidesContent activeIndex={activeIndex} sliderImage={sliderImage}/>
            <Arrows 
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default ResCarousel
