import React from 'react'
import { NavLink } from 'react-router';

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to Our Awesome Page!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore the amazing features and content we have prepared for you. Dive in and discover something new!
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out">
          Get Started
        </button>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Created with Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
    );
}

export default HomePage
