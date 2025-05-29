"use client";

import React, { useState } from "react";

const products = [
  { name: "Hibiscus Tea",price:300, image: "piledhibis.png" },
  { name: "Butterfly Tea",price:350, image: "butterfly.jpg" },
  { name: "Chamomile Tea",price:300, image: "3.webp" },
  { name: "Matcha Tea",price:400, image: "Matcha.jpg" },
  { name: "Rose Tea",price:450 ,image: "rose-bio.jpg" },
  { name: "Jasmine Tea",price:450, image: "jasmine.jpg" },
];

export default function TeaBestSellers() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#f5f9ed] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#333] mb-12 border-b-4 border-green-300 pb-4 inline-block">
          Our Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teas.map((tea, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-60 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {tea.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Leaf Particles */}
      {[10, 20, 30, 50, 70, 80].map((left, i) => (
        <div
          key={i}
          className="absolute w-2 h-3 bg-green-600 rounded-full opacity-10 animate-[float_20s_linear_infinite]"
          style={{
            left: `${left}%`,
            animationDelay: `${i * 3}s`,
            zIndex: 1,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 0.1;
          }
          to {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
