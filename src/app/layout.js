// RootLayout.js
'use client';
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import { metadata } from "./metadata"; // Import metadata

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "400", "600", "800"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.className} antialiased`}
      >
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
