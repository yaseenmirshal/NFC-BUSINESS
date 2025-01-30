// components/Materials.js
export default function Materials() {
    return (
      <section id="materials" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
              <img src="https://via.placeholder.com/300x200" alt="PVC" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">PVC</h3>
              <p className="text-gray-600">Durable and cost-effective material.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <img src="https://via.placeholder.com/300x200" alt="Platinum" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">Platinum</h3>
              <p className="text-gray-600">Luxurious and high-end material.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
              <img src="https://via.placeholder.com/300x200" alt="Wood" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">Wood</h3>
              <p className="text-gray-600">Sustainable and stylish material.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }