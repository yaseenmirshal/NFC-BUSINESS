import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import CategoryCard from "./Components/CategoryCard";
import Themes from "./Components/Themes";
import Land from "./Components/Land";

export default function Home() {
  return (
   <>
   <Header/>
   <Land/>
   <Themes/>
   <CategoryCard/>
   <Contact/>

   <Footer/>
   </>
  );
}
