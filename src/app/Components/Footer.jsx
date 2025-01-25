import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">NFC Card Business</h2>
          <p className="text-gray-400">
            Elevate your networking with smart NFC cards. Instant contact sharing with a tap!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link href="/categories" className="hover:text-gray-200">Categories</Link></li>
            <li><Link href="/themes" className="hover:text-gray-200">Themes</Link></li>
            <li><Link href="/order" className="hover:text-gray-200">Order Now</Link></li>
            <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">Address: 123 NFC Street, Business City, Country</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
          <p className="text-gray-400">Email: support@nfcbusiness.com</p>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="text-gray-400 mb-3">Get updates on new NFC card designs and offers!</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l bg-gray-800 border border-gray-600 text-white"
              required
            />
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r text-white hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-700 mt-6 pt-4">
        <p>© {new Date().getFullYear()} NFC Card Business. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:text-blue-400">Facebook</Link>
          <Link href="#" className="hover:text-blue-400">Twitter</Link>
          <Link href="#" className="hover:text-blue-400">LinkedIn</Link>
          <Link href="#" className="hover:text-blue-400">Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
