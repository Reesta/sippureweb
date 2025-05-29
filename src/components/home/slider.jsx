"use client";
import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    title: "Fresh Spring Water",
    description: "Naturally sourced and filtered through layers of rock.",
    image: "/images/slide1.jpg",
  },
  {
    id: 2,
    title: "Pure and Refreshing",
    description: "Hydrate your life with crystal-clear purity.",
    image: "/images/slide2.jpg",
  },
  {
    id: 3,
    title: "Eco-Friendly Bottling",
    description: "Committed to sustainability from source to sip.",
    image: "/images/slide3.jpg",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}