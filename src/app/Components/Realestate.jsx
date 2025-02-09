'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS
import { FaUtensils, FaBuilding, FaBriefcase, FaGem, FaArrowRight } from 'react-icons/fa'; // Icons for sectors
import { useRouter } from 'next/navigation';

export default function SectorThemes() {
  const router = useRouter(); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:mb-0 mb-[-70px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mt-0 md:mt-14 text-gray-800 mb-5" data-aos="fade-up">
          Explore Our Solutions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center md:mb-16 mb-7" data-aos="fade-up" data-aos-delay="100">
          Tailored solutions for every industry. Discover how we can transform your business.
        </p>

        {/* Grid Layout for Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Business Portfolio Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-100" data-aos="fade-up" data-aos-delay="600">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full">
                <FaBriefcase className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Business Portfolios</h3>
            <p className="text-gray-600 mb-6">
              Elevate your professional image with NFC-enabled business cards and digital portfolios.
            </p>
            <button onClick={() => router.push("/Routes/Business")} className="flex items-center text-orange-600 hover:text-orange-700 transition-all">
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* E-Menu Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
                <FaUtensils className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-Menu Solutions</h3>
            <p className="text-gray-600 mb-6">
              Revolutionize your restaurant with digital menus. Enhance customer experience and streamline operations.
            </p>
            <button onClick={() => router.push("/Routes/Emenu")} className="flex items-center text-blue-600 hover:text-blue-700 transition-all">
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Real Estate Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-100" data-aos="fade-up" data-aos-delay="400">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-full">
                <FaBuilding className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Real Estate Solutions</h3>
            <p className="text-gray-600 mb-6">
              Showcase properties with immersive virtual tours and smart NFC-based property cards.
            </p>
            <button onClick={() => router.push("/Routes/Realestate")} className="flex items-center text-green-600 hover:text-green-700 transition-all">
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div>

          {/* Jewelry Store Catalogs */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-gray-100" data-aos="fade-up" data-aos-delay="500">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-gold-600 p-4 rounded-full">
                <FaGem className="text-4xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Jewelry Store Catalogs</h3>
            <p className="text-gray-600 mb-6">
              Elevate the luxury shopping experience with NFC-enabled catalogs for jewelry stores.
            </p>
            <button onClick={() => router.push("/Routes/Gold")} className="flex items-center text-yellow-600 hover:text-yellow-700 transition-all">
              Learn More <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
