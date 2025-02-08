'use client';
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import { metadata } from "./metadata"; // Import metadata

const montserrat = localFont({
  src: "./fonts/Montserrat.ttf", // Ensure the font file is placed correctly
  variable: "--font-montserrat",
  weight: "400",
  style: "normal",
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
