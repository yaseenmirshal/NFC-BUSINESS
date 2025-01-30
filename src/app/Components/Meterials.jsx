export default function NFCMaterials() {
  return (
    <section className="py-12 px-6 md:py-16 md:px-8 bg-gray-900 rounded-xl md:rounded-3xl shadow-lg mx-4 mt-8" id="nfc-materials">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          NFC Materials
        </h2>
        <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12">
          We offer NFC cards made from different premium materials. Select the one that best suits your business needs.
        </p>

        {/* Card Layout */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {/* PVC Card */}
          <div
            className="w-full sm:w-80 md:w-96 bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src="https://liveprint.ae/wp-content/uploads/2024/07/41nd49pWRHL._AC_UF10001000_QL80_.jpg"
              alt="PVC Material"
              className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">PVC</h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Flexible and waterproof. Ideal for events and loyalty programs.
            </p>
            <button className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-600 transition">
              Price: AED 50
            </button>
          </div>

          {/* Platinum Card */}
          <div
            className="w-full sm:w-80 md:w-96 bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://idealcard.sg/wp-content/uploads/2024/04/NFC-metal-card-customised.jpg"
              alt="Platinum Material"
              className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Platinum</h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Premium and scratch-resistant. Great for high-end memberships.
            </p>
            <button className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-600 transition">
              Price: AED 150
            </button>
          </div>

          {/* Wood Card */}
          <div
            className="w-full sm:w-80 md:w-96 bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://site.byvisit.com/wp-content/uploads/2023/12/Wooden2.jpg"
              alt="Wood Material"
              className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Wood</h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Eco-friendly and elegant. Perfect for personalized branding.
            </p>
            <button className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-600 transition">
              Price: AED 120
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
