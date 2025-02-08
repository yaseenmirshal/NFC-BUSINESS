'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NFCBusinessPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4">Personal Digital Business Cards</h1>
        <p className="text-lg max-w-2xl">Create lasting impressions with NFC-powered business cards.</p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10" data-aos="fade-up">
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Effortless Networking</h3>
          <p>Share contact details, portfolios, and social media with just a tap.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Eco-Friendly & Cost-Effective</h3>
          <p>Replace paper cards with a sustainable, reusable solution.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Customizable Designs</h3>
          <p>Personalize your card to match your brand identity.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="text-center py-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>Simply tap your NFC-enabled business card on any smartphone to instantly share your details.</p>
      </section>

      {/* Industries That Benefit */}
      <section className="p-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-6">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg">Entrepreneurs & Freelancers</div>
          <div className="p-4 bg-gray-100 rounded-lg">Corporate Professionals</div>
          <div className="p-4 bg-gray-100 rounded-lg">Event & Conference Attendees</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gray-900 text-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Get Your NFC Business Card Today</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">Order Now</button>
      </section>
    </div>
  );
}
