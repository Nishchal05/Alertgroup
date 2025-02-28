"use client";
import React, { useContext, useEffect } from "react";
import Home from "./_component/Home";
import Services from "./_component/Services";
import AboutUs from "./_component/AboutUs";
import { Crimedata } from "./_component/Crimedata";
import { useSession } from "next-auth/react";
import { DataContext } from "./_component/context/Topbar";

const Page = () => {
  const { data: session, status } = useSession();
  const { setuserdata } = useContext(DataContext);
  console.log(session)
  // Fetch user data only when the session is ready
  const fetchdata = async (email) => {
    try {
      const res = await fetch(`/api/userdata?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      console.log(result)
      if (res.ok) {
        setuserdata(result);
        console.log(result);
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
        <div className="absolute top-[15%] gap-4">
          <Home />
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="flex flex-col px-4 md:px-8 lg:px-16 py-12">
        <Services />
        <AboutUs />
        <Crimedata />
      </div>
    </div>
  );
};

export default Page;
