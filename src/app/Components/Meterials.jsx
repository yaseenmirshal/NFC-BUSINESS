"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function NFCMaterials() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="py-12 px-6 md:py-16 md:px-20 bg-gray-100 rounded-3xl shadow-lg mx-4 mt-8 border border-gray-200"
      id="nfc-materials"
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
          NFC Materials
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
          We offer NFC cards made from different premium materials. Choose the one that best suits your business needs.
        </p>

        {/* Card Layout */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {/* PVC Card */}
          <div
            className="w-full sm:w-80 md:w-96 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src="/4.png"
                alt="PVC Material"
                className="w-full h-48 md:h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">PVC</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Flexible and waterproof. Ideal for events and loyalty programs.
            </p>

            <button
              onClick={() => router.push("/Routes/Purchase")}
              className="w-full bg-gray-200 border-[1px] border-neutral-400 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
            >
              <b>50 AED</b> - Learn more
            </button>
          </div>

          {/* Aluminium Card */}
          <div
            className="w-full sm:w-80 md:w-96 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src="/3.png"
                alt="Aluminium Material"
                className="w-full h-48 md:h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Aluminium</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Premium and scratch-resistant. Great for high-end memberships.
            </p>
            <button
              onClick={() => router.push("/Routes/Purchase")}
              className="w-full bg-gray-200 border-[1px] border-neutral-400 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
            >
              <b>150 AED</b> - Learn more
            </button>
          </div>

          {/* Wood Card */}
          <div
            className="w-full sm:w-80 md:w-96 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src="/2.png"
                alt="Wood Material"
                className="w-full h-48 md:h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Wood</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Eco-friendly and elegant. Perfect for personalized branding.
            </p>
            <button
              onClick={() => router.push("/Routes/Purchase")}
              className="w-full bg-gray-200 border-[1px] border-neutral-400 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
            >
              <b>170 AED</b> - Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
