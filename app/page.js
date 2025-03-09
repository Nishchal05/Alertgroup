"use client";
import React, { useContext, useEffect } from "react";
import Home from "./_component/Home";
import Services from "./_component/Services";
import AboutUs from "./_component/AboutUs";
import { Crimedata } from "./_component/Crimedata";
import { useSession } from "next-auth/react";
import { DataContext } from "./_component/context/Topbar";
import AOS from "aos"; 
const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set animation duration to 1000ms (1 second)
      once: true,      // Whether animation should happen only once
    });

    return () => {
      AOS.refresh();  // Clean up AOS on component unmount
    };
  }, []);
  const { data: session, status } = useSession();
  const { setuserdata } = useContext(DataContext);
  const fetchdata = async (email) => {
    try {
      const res = await fetch(`/api/userdata?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      if (res.ok) {
        setuserdata(result);
;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      // Fetch data when the session is authenticated
      fetchdata(session.user.email);
    }
  }, [status, session]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className="h-[91.5vh] w-screen object-cover opacity-10"
        />
        <div data-aos="fade-up" className="absolute top-[15%] gap-4">
          <Home />
        </div>
      </div>

      {/* Main Content Sections */}
      <div data-aos="fade-up" className="flex flex-col px-4 md:px-8 lg:px-16 py-12">
        <Services />
        <AboutUs />
        <Crimedata />
      </div>
    </div>
  );
};

export default Page;
