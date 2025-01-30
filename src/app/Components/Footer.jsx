'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing icons

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 mb-2">Email: contact@yourdomain.com</p>
          <p className="text-gray-400 mb-2">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-400">Address: 123 Business St, City, Country</p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
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
        <div data-aos="fade-up" data-aos-delay="500">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-6 justify-start md:justify-start">
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
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-center">
          &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
