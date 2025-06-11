"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Fresh Spring Water",
    description: "Naturally sourced and filtered through layers of rock.",
    image: "/Images/13.jpg",
  },
  {
    id: 2,
    title: "Pure and Refreshing",
    description: "Hydrate your life with crystal-clear purity.",
    image: "/Images/17.jpg",
  },
  {
    id: 3,
    title: "Eco-Friendly Bottling",
    description: "Committed to sustainability from source to sip.",
    image: "/Images/16.jpg",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // Change time here (in ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  
  

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {!imageErrors[slide.id] ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full h-full aspect-[16/9] max-h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ aspectRatio: "45/9" }}
                  onError={() => handleImageError(slide.id)}
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-green-400 flex items-center justify-center">
              <p className="text-white text-lg">Image not available</p>
            </div>
          )}

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

     
      

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
