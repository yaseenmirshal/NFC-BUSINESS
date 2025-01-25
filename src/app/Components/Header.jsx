'use client'
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">NFC Cards</h1>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/categories" className="hover:text-gray-200">Categories</Link>
          <Link href="/themes" className="hover:text-gray-200">Themes</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 mt-2 py-2">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/categories" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Categories</Link>
            <Link href="/themes" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Themes</Link>
            <Link href="/about" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
