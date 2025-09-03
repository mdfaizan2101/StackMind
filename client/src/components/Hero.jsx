import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-20 xl:px-32 bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat text-center">

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 -z-10"></div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold leading-tight tracking-tight">
        Create <span className="text-[color:var(--color-primary)]">amazing</span> content <br />
        with <span className="text-[color:var(--color-primary)]">AI tools</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 max-w-md sm:max-w-2xl text-gray-600 text-sm sm:text-base 2xl:text-lg leading-relaxed">
        Supercharge your creativity with our premium AI suite — write engaging articles, 
        generate stunning visuals, and streamline your workflow effortlessly.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm sm:text-base">
        <button
          onClick={() => navigate('/ai')}
          className="bg-[color:var(--color-primary)] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-2xl font-medium shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          🚀 Start Creating
        </button>
        <button className="bg-white px-8 sm:px-12 py-3 sm:py-4 rounded-2xl border border-gray-200 font-medium text-gray-700 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all">
          🎬 Watch Demo
        </button>
      </div>

      {/* Trusted by Section */}
      <div className="flex items-center gap-3 mt-10 text-gray-600 text-sm sm:text-base">
        <img src={assets.user_group} alt="Users" className="h-10 sm:h-12" />
        <span>
          <span className="font-semibold text-gray-800">10k+ creators</span> trust our AI tools
        </span>
      </div>
    </div>
  )
}

export default Hero;