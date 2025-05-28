import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#8ec06c] px-[5%] py-4 sticky top-0 z-[1000]">
      {/* Logo */}
      <div className="logo">
        <img src="/Sippure logo.png" alt="Sippure Logo" className="h-[50px]" />
      </div>

      {/* Navigation Links */}
      <ul className="flex list-none gap-8">
        <li><a href="#" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Home</a></li>
        <li><a href="#" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">About</a></li>
        <li><a href="#" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Products</a></li>
        <li><a href="#" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Menu</a></li>
        <li><a href="#" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Gallery</a></li>
        <li><a href="#" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Contact</a></li>
      </ul>

      {/* Icons */}
      <div className="flex gap-20 text-3xl text-[#333]">
        <a href="#">👤</a>
        <a href="#">🛒</a>
      </div>
    </nav>
  );
};

