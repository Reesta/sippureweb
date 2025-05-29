import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-green-100 p-8 rounded-xl shadow-lg w-80">
        <h1 className="text-center text-2xl font-bold mb-8">Sign in</h1>

        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 font-semibold">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="w-full px-4 py-3 rounded-full text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 font-semibold">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="w-full px-4 py-3 pr-10 rounded-full text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        <a href="#" className="block text-sm text-blue-400 mb-4 hover:underline">
          Forgot Password?
        </a>

        <button className="w-full bg-green-300 hover:bg-lime-500 text-black font-bold py-3 rounded-full mb-4 transition-colors">
          Sign in
        </button>

        <div className="flex justify-between text-sm">
          <span>Don't have an Account?</span>
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
