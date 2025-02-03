'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
          <p className="text-gray-400 mb-4 flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-yellow-500" />
            <span>contact@yourdomain.com</span>
          </p>
          <p className="text-gray-400 mb-4">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-400">Address: 123 Business St, City, Country</p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#nfc-materials"
                className="text-gray-400 hover:text-yellow-500 transition duration-300"
              >
                NFC Materials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition duration-300"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-300"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-300"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-300"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-300"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="text-xl font-semibold mb-6">Subscribe</h4>
          <p className="text-gray-400 mb-4">
            Stay updated with our latest news and offers.
          </p>
          <form className="flex flex-col gap-4 items-center md:items-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-md hover:from-yellow-600 hover:to-yellow-700 transition-all transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-800 pt-8">
        <p className="text-gray-400 text-center">
          &copy; {new Date().getFullYear()} TapX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}