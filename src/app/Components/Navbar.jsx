"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Using Lucide icons for the toggle button

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          TapX
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map(({ href, label }) => (
            <Link key={href} href={href} className="text-black hover:text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 w-full absolute left-0 top-[100%] flex flex-col items-center py-4 space-y-4">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-300 hover:text-white text-lg"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// Menu items
const menuItems = [
  { href: "#nfc-cards", label: "NFC Cards" },
  { href: "#e-menu", label: "E-Menu" },
  { href: "#real-estate", label: "Real Estate" },
  { href: "#materials", label: "Materials" },
];
