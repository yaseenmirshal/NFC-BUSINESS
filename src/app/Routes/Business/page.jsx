'use client';
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
      <section className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white" data-aos="fade-up">
        <h1 className="text-5xl mt-20 font-bold mb-6">Personal Digital Business Cards</h1>
        <p className="text-xl max-w-2xl mb-8">
          Create lasting impressions with NFC-powered business cards. Share your details instantly, effortlessly, and sustainably.
        </p>
        <button className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NFC Business Cards?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Effortless Networking</h3>
              <p className="text-gray-700">
                Share contact details, portfolios, and social media with just a tap. No more fumbling for paper cards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly & Cost-Effective</h3>
              <p className="text-gray-700">
                Replace paper cards with a sustainable, reusable solution. Save money and the environment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customizable Designs</h3>
              <p className="text-gray-700">
                Personalize your card to match your brand identity. Choose colors, logos, and layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tap Your Card</h3>
              <p className="text-gray-700">
                Simply tap your NFC-enabled business card on any smartphone.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Share Instantly</h3>
              <p className="text-gray-700">
                Your contact details, portfolio, and social media are shared instantly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
              <p className="text-gray-700">
                Build meaningful connections with ease and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries That Benefit Section */}
      <section className="py-20 px-6 bg-gray-900 text-white" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Who Can Benefit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Entrepreneurs & Freelancers</h3>
              <p>Make a lasting impression on potential clients and partners.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Corporate Professionals</h3>
              <p>Streamline networking at conferences and meetings.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Event & Conference Attendees</h3>
              <p>Exchange information effortlessly at large events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-20 bg-blue-600 text-white" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Get Your NFC Business Card Today</h2>
        <p className="text-xl mb-8">Join the future of networking with NFC technology.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
          Order Now
        </button>
      </section>
    </div>
  );
}