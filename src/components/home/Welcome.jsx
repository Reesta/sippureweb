import React from 'react';
import Slider from './slider';

export default function Welcome() {
  return (
    <>
    
      <Slider />

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-white overflow-hidden flex items-start justify-start px-12 py-12 text-center">
        {/* Left content */}
        <div className="relative z-10 mt-20 max-w-xl text-left text-gray-800">
          <h1 className="text-5xl font-bold text-lime-700 mb-4">Sip Natural, Feel Better!</h1>
          <h2 className="text-2xl mb-6">Herbal Tea for every Moment</h2>
          <a
            href="#"
            className="bg-lime-300 hover:bg-lime-700 hover:text-white text-gray-900 font-semibold text-lg px-8 py-3 rounded-full transition-all inline-block"
          >
            Explore
          </a>
        </div>

        {/* Quality Badge */}
        <div className="absolute top-[20%] right-[15%] w-40 h-40 rounded-full bg-lime-700 text-white flex items-center justify-center p-5 z-20">
          <p className="text-lg font-bold text-center">100% original Ingredients</p>
        </div>

        {/* Bottom Image */}
        <img
          src="Images/Tea.png"
          alt="Tea Cup"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-h-[60%] object-cover z-0"
        />
      </section>
    </>
  );
}
