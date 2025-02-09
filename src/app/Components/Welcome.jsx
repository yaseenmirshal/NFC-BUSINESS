'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TAPEXSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Floating NFC Card Animation (Left Side) */}
      <div
        className="absolute -left-20 top-1/4 w-48 h-64 bg-teal-100 rounded-lg shadow-lg transform rotate-12"
        data-aos="fade-right"
        data-aos-delay="200"
      ></div>
      <div
        className="absolute -left-40 top-1/2 w-48 h-64 bg-teal-200 rounded-lg shadow-lg transform rotate-6"
        data-aos="fade-right"
        data-aos-delay="400"
      ></div>

      {/* Floating NFC Card Animation (Right Side) */}
      <div
        className="absolute -right-20 top-1/4 w-48 h-64 bg-teal-100 rounded-lg shadow-lg transform -rotate-12"
        data-aos="fade-left"
        data-aos-delay="200"
      ></div>
      <div
        className="absolute -right-40 top-1/2 w-48 h-64 bg-teal-200 rounded-lg shadow-lg transform -rotate-6"
        data-aos="fade-left"
        data-aos-delay="400"
      ></div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title with AOS animation */}
        <h1
          className="text-5xl font-bold text-gray-800 mb-6"
          data-aos="fade-down"
        >
          Welcome to <span className="text-teal-600">TAPEX</span>
        </h1>

        {/* Subtitle with AOS animation */}
        {/* <p
          className="text-xl text-gray-600 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Your Trusted NFC Card & Solution Provider
        </p> */}

        {/* Description with AOS animation */}
        <div
          className="text-lg text-gray-600 mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>
            At TAPEX, we specialize in providing cutting-edge NFC (Near Field Communication) solutions tailored to meet the diverse needs of modern businesses. By streamlining your connection with target audiences, our NFC cards unlock endless possibilities.
          </p>
        </div>

        {/* Call-to-action button with AOS animation */}
        <button
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Get Started Today!
        </button>
      </div>
    </section>
  );
};

export default TAPEXSection;