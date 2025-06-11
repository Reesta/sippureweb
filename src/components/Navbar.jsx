// components/Navbar.jsx
"use client"; // Required because we're using client-side navigation
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#8ec06c] px-[5%] py-4 sticky top-0 z-[1000] shadow-md">
      {/* Logo */}
      <div className="Logo">
        <Link href="/">
          <img src="/Sippurelogo.png" alt="Sippure Logo" className="h-[50px]" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex list-none gap-8">
        <Link href="/#Home" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Home</Link>
        <Link href="/#about" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">About</Link>
        <Link href="/#products" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Products</Link>
        <Link href="/#menu" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Menu</Link>
        <Link href="/#gallery" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Gallery</Link>
        <Link href="/#contact" className="text-[#333] font-semibold text-lg hover:text-white transition-colors duration-300">Contact</Link>
      </ul>

      {/* Icons */}
      <div className="flex gap-10 text-3xl text-[#333]">
        <Link href="/signin">👤</Link>
        <Link href="/cart">🛒</Link>
      </div>
    </nav>
  );
}