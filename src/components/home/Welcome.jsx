"use client";
import React from "react";
import Slide from "./Slide"; 
export default function Welcome() {
  return (
    <>
     
      <Slide />

      
      <section
        id="Home"
        className="relative w-full h-screen bg-white overflow-hidden px-12 py-12 pt-[120px] text-center"
      >
        
        <div className="relative z-10 mt-20 max-w-xl text-left text-gray-800 mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-lime-700 mb-4">
            Sip Natural, Feel Better!
          </h1>
          <h2 className="text-xl sm:text-2xl mb-6">
            Herbal Tea for every Moment
          </h2>
          <button
            onClick={() => console.log("Explore clicked")}
            aria-label="Explore herbal tea"
            className="bg-lime-300 hover:bg-lime-700 hover:text-white text-gray-900 font-semibold text-lg px-8 py-3 rounded-full transition-all inline-block"
          >
            Explore
          </button>
        </div>

        
        <div className="absolute top-[20%] right-[15%] w-40 h-40 rounded-full bg-lime-700 text-white flex items-center justify-center p-5 z-20">
          <p className="text-sm sm:text-lg font-bold text-center">
            100% original Ingredients
          </p>
        </div>

        
        <img
          src="/Tea1.png"
          alt="A steaming cup of herbal tea with natural ingredients"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-h-[60%] object-cover z-0"
        />
      </section>
    </>
  );
}