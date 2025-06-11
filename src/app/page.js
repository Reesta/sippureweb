import React from "react";
import Welcome from "components/home/Welcome"; 
import About from "components/home/About";
import MissionPage from "components/home/MissionPage";
import Gallery from "components/home/Gallery";
import WhyChoose from "components/home/whychoose";
import Products from "components/home/Products";
import Menu from "components/home/Menu";
import Contact from "components/home/Contact";
import Myprofile from "components/home/Myprofile";
import Image from "next/image";



export default function home() {
  return (
    <div>
      <Welcome />
      
      <About />
      <MissionPage />
      <Gallery />
      <WhyChoose />
      <Products />
      <Menu />
      <Contact />
      <Myprofile />

    </div>
  );
}
