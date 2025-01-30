// components/Hero.js
'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: adjust the animation speed
      easing: 'ease-in-out',
      once: true, // Make the animation happen only once
    });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-8">
        {/* Text on the Left */}
        <div
          className="text-left max-w-2xl mb-8 md:mt-0  mt-[-140px] md:mb-0"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Empower Your<br/> Business with TapX
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Smart, secure, and seamless solutions for the future.
          </p>

          {/* Buttons */}
          <div className="w-full flex flex-wrap justify-start gap-4 md:gap-6">
            <button className="bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 text-lg w-auto whitespace-nowrap hover:bg-gray-700 transition">
              Buy Now
            </button>
            <button className="border border-gray-900 text-gray-900 px-6 md:px-8 py-3 md:py-4 text-lg w-auto whitespace-nowrap hover:bg-gray-900 hover:text-white transition">
              How It Works
            </button>
          </div>
        </div>

{/* Image on the Right */}
<div className="absolute mt-28 md:mt-16 md:ml-[650px] max-w-xl md:max-w-1xl w-full" data-aos="fade-left">
  <img
    src="./cardss.png"
    alt="Angle 6 Metal"
    className="rounded-lg w-full h-auto"
  />

</div>


      </div>
    </section>
  );
}
