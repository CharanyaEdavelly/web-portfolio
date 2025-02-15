import React, { useState } from 'react';
import '../styles/ImageSlider.css'

const ImageSlider = ({workImages}) => {

  const images = workImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button  className="prev button" onClick={prevSlide}>
          &#10094;
        </button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="next button" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
