// components/MaterialsSection.js
'use client'
import { useEffect } from 'react';
import Image from 'next/image';

export default function MaterialsSection() {
  useEffect(() => {
    // Initialize AOS
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-black font-bold text-center mb-12" data-aos="fade-up">
          Why Choose TapX?
        </h2>

        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Same-Day Production Card */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              <Image
                src="https://cdn.prod.website-files.com/65787ab94eec488e001cdbe5/6581a2adfbf626c8cdfba62c_iconmonstr-time-19%201.svg"
                alt="Same-Day Production"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Same-Day Production</h3>
            <p className="text-gray-600 mb-6">
              Place your order now for same-day collection or have your cards delivered to your table within 2 days across all Emirates.
            </p>
          </div>

          {/* One-Time Purchase Card */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="flex justify-center mb-6">
              <Image
                src="https://cdn.prod.website-files.com/65787ab94eec488e001cdbe5/6581a2ea55ed9a1a59c7fd09_iconmonstr-check-mark-18%201.svg"
                alt="One-Time Purchase"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">One-Time Purchase</h3>
            <p className="text-gray-600 mb-6">
              Pay once, use your whole life, no hidden fees or renewals.
            </p>
          </div>

          {/* Lifetime Warranty Card */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="flex justify-center mb-6">
              <Image
                src="https://cdn.prod.website-files.com/65787ab94eec488e001cdbe5/6581a2f30c039a3a1daab443_iconmonstr-infinity-4%201.svg"
                alt="Lifetime Warranty"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Lifetime Warranty</h3>
            <p className="text-gray-600 mb-6">
              Lifetime warranty on the NFC microchip. We’ll replace it if it begins malfunctioning.
            </p>
          </div>
        </div>



 {/* How It Works Section */}
<div className="mt-16 bg-gray-900 py-8 sm:py-12 rounded-lg">
  <h3 className="text-2xl font-semibold text-center text-white mb-6 sm:mb-12">How It Works</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-12">
    
    {/* Step 1: Choose Material */}
    <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md text-center relative">
      <span className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-lg font-bold w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full">
        1
      </span>
      <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white mt-5 sm:mt-6">Choose Material</h4>
      <p className="text-gray-300 text-sm sm:text-base">
        Select from a range of high-quality materials that suit your style and needs. We offer PVC, Platinum, Wood, and more.
      </p>
    </div>

    {/* Step 2: Approve Design */}
    <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md text-center relative">
      <span className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-lg font-bold w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full">
        2
      </span>
      <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white mt-5 sm:mt-6">Approve Design</h4>
      <p className="text-gray-300 text-sm sm:text-base">
        Review and finalize the design of your smart card before production. Customize it as per your brand’s needs.
      </p>
    </div>

    {/* Step 3: Get Your Card */}
    <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md text-center relative">
      <span className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-lg font-bold w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full">
        3
      </span>
      <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white mt-5 sm:mt-6">Get Your Card</h4>
      <p className="text-gray-300 text-sm sm:text-base">
        Once your card is ready, collect it in-person or have it delivered to your location. Enjoy your new smart card!
      </p>
    </div>

  </div>
</div>


      </div>
    </section>
  );
}
