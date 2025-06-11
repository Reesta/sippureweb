
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="animate-fadeInUp scroll-mt-20">
   
      <div className="text-center py-8">
        <h2 className="text-lg text-green-700 font-semibold mb-2 transition-colors duration-300 hover:text-green-900 cursor-default">
          Our Story
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-gray-900 cursor-default">
          About Us
        </h1>
        <h4 className="text-green-700 italic font-semibold text-lg transition-colors duration-300 hover:text-green-900 cursor-default">
          Naturally Refreshing, Mindfully Made!!
        </h4>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-20 py-10 gap-10">
        {/* Image Circle */}
        <div className="flex-1 flex justify-center items-center">
          <div
            className="
              w-[300px] md:w-[520px] h-[300px] md:h-[520px] bg-[#d9ebc8] rounded-full overflow-hidden shadow-md 
              relative md:-translate-x-10 md:-translate-y-8
              transition-transform duration-500 ease-in-out
              hover:scale-105 hover:shadow-xl
              cursor-pointer
            "
          >
            <Image
              src="/Images/About.png"
              alt="Herbal Tea"
              width={520}
              height={520}
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 px-4 md:px-0">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 transition-colors duration-300 hover:text-gray-900 cursor-default">
            A Cup of Nature, A Sip of Wellness
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed transition-opacity duration-500">
            At <strong className="text-green-700">SIPPURE</strong>, we believe that wellness starts with simplicity — and what's simpler than a soothing cup of herbal tea?
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed transition-opacity duration-500">
            Born from a passion for natural living, our platform is more than just a tea shop. It's a space where tradition meets technology, bringing the age-old comfort of herbal remedies to your modern-day routine.
          </p>
        </div>
      </div>
    </section>
  );
}