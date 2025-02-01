'use client'
import React, { useEffect, useState } from "react";
import "./LoadingScreen.css"; // Ensure this CSS file is in the same folder

const words = ["Transforming possibilities...", "Shaping the digital era..."];

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000); // Hide after 3s

    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500); // Change word every 1.5s

    return () => {
      clearTimeout(timer);
      clearInterval(wordInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen flex justify-center items-center min-h-screen w-full bg-black">
      <span className="loading-text text-white text-xl md:text-4xl  text-center animate-pulse">
        {words[index]}
      </span>
    </div>
  );
};

export default LoadingScreen;
