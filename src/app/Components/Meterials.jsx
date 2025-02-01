// components/NFCMaterials.js
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS

export default function NFCMaterials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      className="py-12 px-6 md:py-12 md:px-12 bg-gray-900 rounded-xl md:rounded-3xl shadow-2xl mx-4 mt-8 border-2 border-gray-800 transform transition-all hover:shadow-3xl hover:scale-101"
      id="nfc-materials"
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up">
          NFC Materials
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
          We offer NFC cards made from different premium materials. Select the one that best suits your business needs.
        </p>

        {/* Card Layout */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {/* PVC Card */}
          <div
            className="w-full sm:w-80 md:w-96 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative overflow-hidden rounded-md mb-4">
              <img
                src="https://liveprint.ae/wp-content/uploads/2024/07/41nd49pWRHL._AC_UF10001000_QL80_.jpg"
                alt="PVC Material"
                className="w-full h-48 md:h-56 object-cover rounded-md hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-all duration-300"></div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">PVC</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Flexible and waterproof. Ideal for events and loyalty programs.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Price: AED 50
            </button>
          </div>

          {/* Platinum Card */}
          <div
            className="w-full sm:w-80 md:w-96 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-100"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="relative overflow-hidden rounded-md mb-4">
              <img
                src="https://idealcard.sg/wp-content/uploads/2024/04/NFC-metal-card-customised.jpg"
                alt="Platinum Material"
                className="w-full h-48 md:h-56 object-cover rounded-md hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-all duration-300"></div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Platinum</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Premium and scratch-resistant. Great for high-end memberships.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Price: AED 150
            </button>
          </div>

          {/* Wood Card */}
          <div
            className="w-full sm:w-80 md:w-96 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-100"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="relative overflow-hidden rounded-md mb-4">
              <img
                src="https://site.byvisit.com/wp-content/uploads/2023/12/Wooden2.jpg"
                alt="Wood Material"
                className="w-full h-48 md:h-56 object-cover rounded-md hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-all duration-300"></div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Wood</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Eco-friendly and elegant. Perfect for personalized branding.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Price: AED 120
            </button>
          </div>
        </div>

        {/* Additional Animated Element */}
        <div
          className="mt-12 text-gray-300 text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <p className="text-lg md:text-xl mb-4">
            🚀 Ready to transform your business? Choose your material today!
          </p>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}