"use client";
import React, { useContext } from "react";
import Home from "./_component/Home";
import Services from "./_component/Services";
import AboutUs from "./_component/AboutUs";
import Footer from "./_component/Footer";
import { Crimedata } from "./_component/Crimedata";

const Page = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className="h-[91.5vh] w-screen object-cover opacity-10"
        />
        <div className="absolute top-[15%] gap-4">
          <Home />
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="flex flex-col px-4 md:px-8 lg:px-16 py-12">
        <Services />
        <AboutUs />
        <Crimedata/>
      </div>
    </div>
  );
};

export default Page;
