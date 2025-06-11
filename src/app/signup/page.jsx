"use client";
import { useState } from "react";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-[#e3f5d4] text-black p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-4xl text-center mb-10 font-bold"> Sign Up</h1>

        <form className="flex flex-col justify-between flex-1">
          {/* First and Last Name */}
          <div className="flex gap-5 mb-6">
            <div className="w-1/2 relative">
              <label className="absolute -top-2 left-4 bg-white px-1 text-xs z-10">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder=""
                required
              />
            </div>
            <div className="w-1/2 relative">
              <label className="absolute -top-2 left-4 bg-white px-1 text-xs z-10">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder=""
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <label className="absolute -top-2 left-4 bg-white px-1 text-xs z-10">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder=""
              required
            />
          </div>

          {/* Password */}
          <div className="relative mb-8">
            <label className="absolute -top-2 left-4 bg-white px-1 text-xs z-10">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-3 border border-gray-300 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder=""
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 bg-transparent border-none"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="1" y1="5" x2="23" y2="19"></line>
                </svg>
              )}
            </button>
            <p className="text-xs mt-1 ml-4 text-gray-700">
             Password must be at least 6 characters
            </p>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-8">
            <label className="absolute -top-2 left-4 bg-white px-1 text-xs z-10">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full p-3 border border-gray-300 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder=""
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 bg-transparent border-none"
            >
              {showConfirmPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="1" y1="5" x2="23" y2="19"></line>
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="bg-[#a4d57c] text-black py-3 px-5 rounded-full text-lg font-medium mx-auto mt-4 hover:bg-[#a4d57c] transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;