"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Using Lucide icons for the toggle button

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-white/90 backdrop-blur-md z-50 shadow-lg rounded-xl border border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-black hover:text-gray-700 transition-colors duration-300"
        >
          TapX
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-black hover:text-gray-700 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 mr-5">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm text-black hover:text-gray-700 transition-colors duration-300 font-medium group"
            >
              {label}
              <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

         
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md w-full absolute left-0 top-[100%] flex flex-col items-center py-4 space-y-4 shadow-lg rounded-b-xl">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm text-black hover:text-gray-700 transition-colors duration-300 font-medium group"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {label}
              <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// Menu items
const menuItems = [
  { href: "#about", label: "About Us" },
  { href: "#nfc-cards", label: "NFC Cards" },
  { href: "#e-menu", label: "E-Menu" },
  { href: "#real-estate", label: "Real Estate" },
  { href: "#materials", label: "Materials" },
];
