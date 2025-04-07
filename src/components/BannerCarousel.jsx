import React, { useEffect, useState } from "react";
import "./BannerCarousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: icon package

const images = [
  "./src/assets/landing.jpg",
  "./src/assets/women2.jpg",
  "./src/assets/women.png"
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`carousel-image ${index === current ? "active" : ""}`}
        />
      ))}

      {/* Left/Right Arrows */}
      <button className="nav-button left" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="nav-button right" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
