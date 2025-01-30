// components/NFCCards.js
export default function NFCCards() {
    return (
      <section id="nfc-cards" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">NFC Business Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
              <img src="https://via.placeholder.com/300x200" alt="NFC Card" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">Standard PVC</h3>
              <p className="text-gray-600">Durable and cost-effective NFC cards.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <img src="https://via.placeholder.com/300x200" alt="NFC Card" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">Premium Platinum</h3>
              <p className="text-gray-600">Luxurious and high-end NFC cards.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
              <img src="https://via.placeholder.com/300x200" alt="NFC Card" className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly Wood</h3>
              <p className="text-gray-600">Sustainable and stylish NFC cards.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }