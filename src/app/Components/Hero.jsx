// components/Hero.js
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="h-[850px] md:h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden pt-20 md:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-20 h-20 bg-teal-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/4 right-0 w-32 h-32 bg-teal-400 rounded-full opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-teal-400 rounded-full opacity-20 animate-float"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-8 relative z-10">
        {/* Text on the Left */}
        <div
          className="text-left mt-8 max-w-2xl mb-8 md:mb-0 md:mt-0"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-lg md:text-xl font-medium text-gray-600 uppercase tracking-widest">
              Welcome to{" "}
            </span>
            <span className="text-lg md:text-xl font-medium text-teal-600 uppercase tracking-widest">
              TapeX
            </span>
            <br />
            Your Trusted NFC Card & Solution Provider
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Revolutionize Your Business with NFC Technology
          </p>

          {/* Buttons */}
          <div className="w-full flex flex-row flex-wrap justify-start gap-4 md:gap-6">
            <button className="bg-teal-600 text-white px-4 py-2 text-md font-semibold hover:bg-teal-700 transition-transform transform hover:scale-105">
              Buy Now
            </button>
            <button className="border border-teal-600 text-teal-600 px-4 py-2 text-md font-semibold hover:bg-teal-600 hover:text-white transition-transform transform hover:scale-105">
              How It Works
            </button>
          </div>

          {/* Additional Information */}
          <div className="mt-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="text-gray-700">Trusted by 1000+ businesses</div>
          </div>
        </div>

        {/* Image on the Right */}
        <div
          className="relative w-full max-w-xl md:max-w-2xl md:mt-0"
          data-aos="fade-left"
        >
          <img
            src="./nfchd.png"
            alt="Angle 6 Metal"
            className="rounded-lg w-full h-auto transform hover:scale-105 transition-transform"
          />
          {/* Animated Badge */}
          <div className="absolute -bottom-36 -right-8 bg-teal-600 p-4 rounded-lg shadow-lg animate-bounce hidden md:block">
            <span className="text-white font-semibold"> New Feature!</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-900 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
