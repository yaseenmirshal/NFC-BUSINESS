'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function NFCCardEcoPlastic() {
  const variants = {
    "Eco Plastic": "/4.png",
    "Aluminium": "/3.png",
    "Wood": "/2.png",
  };

  const [selectedVariant, setSelectedVariant] = useState("Eco Plastic");
  const [quantity, setQuantity] = useState(1);
  const basePrice = 120;

  return (
    <div className="container mb-20 mx-auto px-4 py-8 mt-28">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Left Side: Product Images */}
        <div className="w-full md:w-1/2">
          <div className="relative h-96 shadow-md overflow-hidden">
            <Image
              src={variants[selectedVariant]}
              alt={`NFC Card - ${selectedVariant}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {Object.keys(variants).map((variant, index) => (
              <div key={index} className="relative w-24 h-24 shadow-md overflow-hidden">
                <Image
                  src={variants[variant]}
                  alt={variant}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer"
                  onClick={() => setSelectedVariant(variant)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-black">{`NFC Card - ${selectedVariant}`}</h1>
          <p className="text-2xl font-semibold text-black mt-3">{quantity * basePrice} AED</p>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label htmlFor="quantity" className="text-black mr-5 text-sm font-medium">Quantity</label>
            <select
              id="quantity"
              name="quantity"
              className="w-24 border border-gray-500 text-black p-2 mt-2"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-gray-800 text-white px-6 py-2 text-sm hover:bg-gray-700">Add to Cart</button>
            <button className="bg-gray-900 text-white px-6 py-2 text-sm hover:bg-gray-800">Buy Now</button>
          </div>

          {/* Variants */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-black mb-2">Variants</h2>
            <div className="flex gap-2">
              {Object.keys(variants).map((variant, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm ${selectedVariant === variant ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-black mb-2">Description</h2>
            <p className="text-gray-700 text-sm">
              Choose our eco PVC card for a sustainable and professional networking solution. Made from recyclable materials for durability and style.
            </p>
          </div>

          {/* Discounts */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-black mb-2">Discounts</h2>
            <ul className="list-disc pl-4 text-gray-700 text-sm">
              <li>10% off on 11+ cards</li>
              <li>Corporate discount on 50+ cards</li>
              <li>Enterprise discount on 100+ cards</li>
            </ul>
          </div>

          {/* Shipping & Returns */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-black mb-2">Shipping & Returns</h2>
            <p className="text-gray-700 text-sm">
              Free shipping on orders over 200 AED. Standard shipping available. 30-day return policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
