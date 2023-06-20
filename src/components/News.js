import React, { useState } from "react";

import { coxbazar, sundarban, sajek, sreemangal } from "../assets/images";

// import { touristSpots } from "../resources/constants.js";

{
  /* <div className="relative z-11 text-3xl text-yellow-400"> */
}
const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [coxbazar, sundarban, sreemangal, sajek];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="relative z-11 text-3xl text-yellow-400">
      <div className="relative">
        <div className="flex overflow-hidden">
          {images.map((image, index) => {
            const isVisible = index >= currentIndex && index <= currentIndex + 2;

            return (
              <div key={index} className={`w-1/3 transition-transform duration-300 transform ${isVisible ? "translate-x-0" : "translate-x-full"}`}>
                <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
              </div>
            );
          })}
        </div>

        <button className="absolute top-1/2 left-2 transform -translate-y-1/2" onClick={handlePrev}>
          Previous
        </button>
        <button className="absolute top-1/2 right-2 transform -translate-y-1/2" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};
export default News;
