// components/RealEstate.js
export default function RealEstate() {
    return (
      <section id="real-estate" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Real Estate Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
              <img src="https://via.placeholder.com/400x300" alt="Real Estate" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">Property Showcase</h3>
              <p className="text-gray-600">Showcase properties with NFC-enabled brochures.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <img src="https://via.placeholder.com/400x300" alt="Real Estate" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">Virtual Tours</h3>
              <p className="text-gray-600">Offer virtual tours with NFC technology.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }