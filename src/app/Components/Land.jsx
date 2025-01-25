import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://wallpapers.com/images/hd/stack-of-dark-colored-credit-cards-8kh9jkmkkurlact3.jpg')" }} // Update the path
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <main className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Elevate Your Networking with Smart NFC Cards
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Customizable NFC cards for every industry.
        </p>
        <div className="mt-6 space-x-4">
          <Link href="/categories" className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700">
            Explore Cards
          </Link>
          <Link href="/order" className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700">
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
