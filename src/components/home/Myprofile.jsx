'use client';
import React from "react";

export default function ProfilePage() {
  return (
    <div id="/profile" className="max-w-5xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">My Profile</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-5 flex items-center justify-center border-4 border-gray-200">
            <div className="w-10 h-10 bg-gray-800 rounded-full relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-5 h-3.5 bg-white rounded-t-xl"></div>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">Sara Smith</div>
          <div className="text-gray-600 mb-6">sarasmith@gmail.com</div>
          <button className="bg-green-200 text-green-900 py-2 px-6 rounded-full font-medium hover:bg-green-300 transition">
            Edit Profile
          </button>
        </div>

        {/* Order History */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Order History</h2>

          <div className="mb-5 border-b border-gray-200 pb-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Chamomile Tea</h3>
              <p className="text-sm text-gray-500">1 Item</p>
            </div>
            <div className="text-right">
              <div className="font-bold text-gray-800 text-lg">Delivered</div>
              <div className="text-sm text-gray-500">April 15, 2024</div>
            </div>
          </div>

          <div className="mb-5 border-b border-gray-200 pb-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Herbal Tea</h3>
              <p className="text-sm text-gray-500">1 Item</p>
            </div>
            <div className="text-right">
              <div className="font-bold text-gray-800 text-lg">Delivered</div>
              <div className="text-sm text-gray-500">April 15, 2024</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-200 text-green-900 py-2 px-6 rounded-full font-medium hover:bg-green-300 transition">
              View Orders
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Delivery Address */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Address</h2>

          <div className="mb-6">
            <div className="text-lg font-bold text-gray-800 mb-1">Home</div>
            <div className="text-gray-600 leading-relaxed">Newroad, Kathmandu</div>
          </div>

          <div className="flex gap-3">
            <button className="bg-green-200 text-green-900 py-2 px-4 rounded-full font-medium hover:bg-green-300 transition">
              Edit
            </button>
            <button className="bg-green-200 text-green-900 py-2 px-4 rounded-full font-medium hover:bg-green-300 transition">
              Add Address
            </button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Method</h2>

          <div className="mb-4 flex justify-between items-center">
            <div className="text-gray-600 text-base">Credit card</div>
            <a href="#" className="text-gray-600 text-base hover:text-gray-800">Edit</a>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <div className="text-gray-600 text-base">Bank Transfer</div>
            <a href="#" className="text-gray-600 text-base hover:text-gray-800">Edit</a>
          </div>

          <button className="bg-green-200 text-green-900 py-2 px-4 rounded-full font-medium hover:bg-green-300 transition mt-2">
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}
