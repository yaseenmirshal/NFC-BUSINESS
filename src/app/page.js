// pages/index.js

import EMenu from "./Components/E-menu";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Materials from "./Components/Meterials";
import Navbar from "./Components/Navbar";
import NFCCards from "./Components/NFCCards";
import RealEstate from "./Components/Realestate";


export default function Home() {
  return (
    <div>
    
      <Hero />
      <Materials />
      <NFCCards />
      <EMenu />
      <RealEstate/>
      
    
    </div>
  );
}