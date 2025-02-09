'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function GoldCategoryPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-20">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h1 className="text-5xl mt-20 font-bold mb-4">
            Elevate Luxury Shopping with NFC Technology
          </h1>
          <p className="text-xl mb-8">
            Transform the jewelry shopping experience with NFC-enabled catalogs.
          </p>
          <button className="bg-white text-yellow-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-100 transition">
            Discover More
          </button>
        </div>
      </section>

      {/* Digital Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl text-yellow-700 font-bold mb-6">
                Digital Showcase
              </h2>
              <p className="text-gray-700 mb-6">
                Display product details, high-resolution images, and videos of collections directly on customers’ devices with a simple NFC tap.
              </p>
              <button className="bg-yellow-700 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
                Learn More
              </button>
            </div>
            <div data-aos="fade-left">
              <img
                src="/images/nfc-digital-showcase.jpg"
                alt="NFC Digital Showcase"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Recommendations */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="/images/nfc-personalized-catalogs.jpg"
                alt="NFC Personalized Catalogs"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl text-yellow-700 font-bold mb-6">
                Personalized Recommendations
              </h2>
              <p className="text-gray-700 mb-6">
                Share custom catalogs tailored to individual preferences, enhancing the luxury shopping experience.
              </p>
              <button className="bg-yellow-700 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Inventory Updates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl text-yellow-700 font-bold mb-6">
                Real-Time Inventory Updates
              </h2>
              <p className="text-gray-700 mb-6">
                Ensure customers always see the latest designs and availability with live updates powered by NFC technology.
              </p>
              <button className="bg-yellow-700 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
                Learn More
              </button>
            </div>
            <div data-aos="fade-left">
              <img
                src="/images/nfc-inventory-updates.jpg"
                alt="NFC Inventory Updates"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

     

     
    </div>
  );
}