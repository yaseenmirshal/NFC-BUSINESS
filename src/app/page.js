

import Hero from "./Components/Hero";
import Materials from "./Components/Meterials";
import NFCCards from "./Components/NFCCards";
import RealEstate from "./Components/Realestate";
import Welcome from "./Components/Welcome";


export default function Home() {
  

  return (
    <>
      
         
          <Hero />
          <Welcome/>
          <RealEstate />
          <Materials />
          
          <NFCCards />
         
          {/* <EMenu /> */}
        
        
    </>
  );
}
