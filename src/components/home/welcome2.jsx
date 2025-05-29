'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 bg-white gap-10 relative">
      {/* Hero Text */}
      <div className="md:w-1/2 space-y-6 px-4 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
          Nature’s remedy <br /> in every sip
        </h1>
        <p className="text-lg text-gray-800 font-semibold">
          SipPure Herbal Tea is a blend of natural ingredients that helps you relax and rejuvenate.
          Our tea is made with the finest herbs and spices, ensuring a delightful experience in every sip.
        </p>
        <p className="text-base text-gray-700">
          Herbal Tea for every Moment
        </p>
        <a
          href="#"
          className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Shop Now
        </a>
      </div>

      {/* Hero Image */}
      <div className="md:w-1/2 relative flex items-center justify-center bg-gray-100 rounded-full overflow-hidden p-6">
        <img src="/save.png" alt="Herbal Tea" className="w-[90%] h-auto object-contain" />

        {/* Offer Badge */}
        <div className="absolute right-6 bottom-6 bg-green-700 text-white w-36 h-36 rounded-full flex flex-col items-center justify-center text-center p-4 font-bold text-sm shadow-lg">
          <p className="leading-tight">
            Offer<br />10% off<br />every product
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
