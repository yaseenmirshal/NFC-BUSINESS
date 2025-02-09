'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RealEstatePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h1 className="text-5xl mt-16 font-bold mb-4">
            Revolutionize Real Estate with NFC Technology
          </h1>
          <p className="text-xl mb-8">
            Stand out in the competitive market with our NFC-powered solutions.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Interactive Property Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl text-blue-900 font-bold mb-6">
                Interactive Property Listings
              </h2>
              <p className="text-gray-700 mb-6">
                Replace traditional brochures with NFC cards that provide instant access to virtual property tours, 3D layouts, pricing, and availability.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                Learn More
              </button>
            </div>
            <div data-aos="fade-left">
              <img
                src="/images/nfc-property-listings.jpg"
                alt="NFC Property Listings"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Follow-Up Simplified */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="/images/nfc-client-followup.jpg"
                alt="NFC Client Follow-Up"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl text-blue-900 font-bold mb-6">
                Client Follow-Up Simplified
              </h2>
              <p className="text-gray-700 mb-6">
                Share project details, brochures, and updates directly via a simple NFC tap.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Lead Generation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl text-blue-900 font-bold mb-6">
                Seamless Lead Generation
              </h2>
              <p className="text-gray-700 mb-6">
                Gather client data instantly when they tap your NFC cards during property exhibitions or open houses.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                Learn More
              </button>
            </div>
            <div data-aos="fade-left">
              <img
                src="/images/nfc-lead-generation.jpg"
                alt="NFC Lead Generation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Integration */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl text-blue-900 font-bold mb-6">
            WhatsApp Integration
          </h2>
          <p className="text-xl mb-8">
            Fully automated WhatsApp real-time chat and communication, including payment gateway integration.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
            Explore Features
          </button>
        </div>
      </section>

     

      
    </div>
  );
}