"use client";
import React from "react";
import Home from "./_component/Home";
import CardSlider from "./_component/CardSlider";
import Services from "./_component/Services";
import AboutUs from "./_component/AboutUs";
import Contacts from "./_component/Contacts";
import Footer from "./_component/Footer";

const Page = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className="h-[91.5vh] w-screen object-cover opacity-5"
        />
        <div className="absolute top-[15%] gap-4">
          <Home />
        </div>
      </div>

      {/* Main Sections */}
      <div className="flex flex-col gap-14 px-4 mt-24 md:px-8 lg:px-16 py-12">
        <Services />
        <AboutUs />
        <Contacts />
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
