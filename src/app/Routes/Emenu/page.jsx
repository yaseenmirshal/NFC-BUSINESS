'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMobileAlt, FaMoneyBillWave, FaUsers, FaWhatsapp } from 'react-icons/fa';

export default function NFCBusinessPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl mt-20 font-extrabold mb-4">Reimagine Dining Experiences</h1>
        <p className="text-lg max-w-2xl">Transform your restaurant with NFC-enabled e-menu solutions.</p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10" data-aos="fade-up">
        <div className="p-6 shadow-lg rounded-lg bg-gray-100 flex flex-col items-center text-center">
          <FaMobileAlt className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Contactless Menus</h3>
          <p>Allow customers to view menus, customize orders, and place them directly from their devices with a tap.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-gray-100 flex flex-col items-center text-center">
          <FaUsers className="text-green-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Interactive Offers & Loyalty</h3>
          <p>Showcase special deals, discounts, and earn customer loyalty effortlessly.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-gray-100 flex flex-col items-center text-center">
          <FaMoneyBillWave className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Faster Table Turnaround</h3>
          <p>Reduce waiting time and improve customer satisfaction with streamlined ordering and billing.</p>
        </div>
      </section>

      {/* WhatsApp Integration */}
      <section className="text-center py-16 px-6 bg-gray-900 text-white" data-aos="fade-up">
        <FaWhatsapp className="text-green-400 text-5xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">WhatsApp Integration</h2>
        <p>Fully automated WhatsApp chat and communication, including seamless payment integration.</p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-500 text-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Upgrade Your Dining Experience</h2>
        <button className="bg-white text-blue-500 hover:bg-gray-200 font-bold py-3 px-6 rounded-lg">Get Started</button>
      </section>
    </div>
  );
}
