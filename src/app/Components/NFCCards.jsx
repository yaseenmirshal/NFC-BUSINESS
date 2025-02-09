// components/MaterialsSection.js
'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MaterialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true });

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Why Choose Us Section */}
        <h2 className="text-3xl md:text-5xl text-black font-bold text-center mb-14 md:mb-16" data-aos="fade-up">
          Why Choose Us?
        </h2>

        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Innovative Technology Card */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
            data-aos="fade-up"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex justify-center mb-6">
              <Image
                src="https://cdn.prod.website-files.com/65787ab94eec488e001cdbe5/6581a2adfbf626c8cdfba62c_iconmonstr-time-19%201.svg"
                alt="Innovative Technology"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Innovative Technology</h3>
            <p className="text-gray-600">
              We use the latest NFC standards to deliver seamless solutions.
            </p>
          </motion.div>

          {/* Custom Solutions Card */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex justify-center mb-6">
              <Image
                src="https://cdn.prod.website-files.com/65787ab94eec488e001cdbe5/6581a2ea55ed9a1a59c7fd09_iconmonstr-check-mark-18%201.svg"
                alt="Custom Solutions"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Custom Solutions</h3>
            <p className="text-gray-600">
              Tailored NFC cards to suit the unique needs of your business.
            </p>
          </motion.div>

          {/* High-Quality Materials Card */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex justify-center mb-6">
              <Image
                src="https://cdn.prod.website-files.com/65787ab94eec488e001cdbe5/6581a2f30c039a3a1daab443_iconmonstr-infinity-4%201.svg"
                alt="High-Quality Materials"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">High-Quality Materials</h3>
            <p className="text-gray-600">
              Durable, aesthetically pleasing cards designed to leave a lasting impression.
            </p>
          </motion.div>

          {/* Exceptional Support Card */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex justify-center mb-6">
              <Image
                src="https://cdn.prod.website-files.com/65787ab94eec488e001cdbe5/6581a2f30c039a3a1daab443_iconmonstr-infinity-4%201.svg"
                alt="Exceptional Support"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Exceptional Support</h3>
            <p className="text-gray-600">
              From design to deployment, we’re here to assist every step of the way.
            </p>
          </motion.div>
        </div>

        {/* Get Started Today Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 py-12 rounded-lg shadow-2xl" ref={ref}>
          <h3 className="text-3xl font-semibold text-center text-white mb-12">Get Started Today</h3>
          <p className="text-lg text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? Contact us today to explore our range of NFC cards and solutions. Let us help you deliver unforgettable experiences to your customers while driving efficiency and growth.
          </p>
          <div className="flex justify-center">
            <motion.button
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}