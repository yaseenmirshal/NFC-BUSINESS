// components/EMenu.js
export default function EMenu() {
    return (
      <section id="e-menu" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">E-Menu Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
              <img src="https://via.placeholder.com/400x300" alt="E-Menu" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">Interactive Menus</h3>
              <p className="text-gray-600">Enhance customer experience with NFC-powered menus.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <img src="https://via.placeholder.com/400x300" alt="E-Menu" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">Contactless Ordering</h3>
              <p className="text-gray-600">Streamline ordering with NFC technology.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }