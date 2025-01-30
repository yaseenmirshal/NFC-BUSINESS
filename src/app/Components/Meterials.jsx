// components/NFCMaterials.js

export default function NFCMaterials() {
    return (
      <section className="py-16 bg-gray-900" id="nfc-materials">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your NFC Material</h2>
          <p className="text-lg text-gray-400 mb-12">We offer NFC cards made from different premium materials. Select the one that best suits your business needs.</p>
          
          {/* Card Layout */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* PVC Card */}
            <div className="w-96 md:w-112 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up">
              <img src="https://liveprint.ae/wp-content/uploads/2024/07/41nd49pWRHL._AC_UF10001000_QL80_.jpg" alt="PVC Material" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">PVC</h3>
              <p className="text-gray-300 mb-4">Flexible and waterproof. Ideal for events and loyalty programs.</p>
              <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition">Price: AED 50</button>
            </div>
  
            {/* Platinum Card */}
            <div className="w-96 md:w-112 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <img src="https://idealcard.sg/wp-content/uploads/2024/04/NFC-metal-card-customised.jpg" alt="Platinum Material" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Platinum</h3>
              <p className="text-gray-300 mb-4">Premium and scratch-resistant. Great for high-end memberships.</p>
              <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition">Price: AED 150</button>
            </div>
  
            {/* Wood Card */}
            <div className="w-96 md:w-112 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              <img src="https://site.byvisit.com/wp-content/uploads/2023/12/Wooden2.jpg" alt="Wood Material" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Wood</h3>
              <p className="text-gray-300 mb-4">Eco-friendly and elegant. Perfect for personalized branding.</p>
              <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition">Price: AED 120</button>
            </div>
          </div>
        </div>
      </section>
    );
}
