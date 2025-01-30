// components/Hero.js
export default function Hero() {
    return (
      <section className="h-screen flex items-center justify-center bg-white">
       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
  {/* Text on the Left */}
  <div className="text-left max-w-lg mb-8 md:mb-0" data-aos="fade-up">
    <h1 className="text-4xl mt-44 md:mt-0 md:text-5xl font-bold text-black mb-4">Revolutionize Your Business with TapX</h1>
    <p className="text-lg md:text-xl text-gray-700 mb-8">Smart, secure, and seamless solutions for the future.</p>
   
    <div className="w-full flex flex-wrap justify-start gap-4">
  <button className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-700 transition whitespace-nowrap">
    Buy Now
  </button>
  <button className="border border-gray-900 text-gray-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition whitespace-nowrap">
    How It Works
  </button>
</div>



  </div>

  {/* Video on the Right */}
  <div className="max-w-lg" data-aos="fade-left">
  <img 
    src="https://cdn.prod.website-files.com/65796d16cb60655a822aa6e7/65ca1ea81aed2a3e77d7f441_Angle%206%20Metal.webp" 
    alt="Angle 6 Metal" 
    className="rounded-lg w-full h-auto"
  />
</div>


</div>
      </section>
    );
  }