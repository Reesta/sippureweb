import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#8bc072] text-[#1f1f1f] py-10 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sippure</h2>
          <p className="text-sm leading-relaxed">
            Naturally Refreshing, Mindfully Made. Sip wellness in every cup with Sippure’s herbal teas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <div className="text-sm space-y-3">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +977 9804328885</p>
            <p className="flex items-center gap-2"><FaEnvelope /> support@sippuretea.com</p>
          </div>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-[#333] mt-10">
        © 2024 Sippure Tea Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
