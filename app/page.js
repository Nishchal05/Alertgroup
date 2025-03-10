"use client";
import React, { useContext, useEffect } from "react";
import Home from "./_component/Home";
import Services from "./_component/Services";
import AboutUs from "./_component/AboutUs";
import { Crimedata } from "./_component/Crimedata";
import { useSession } from "next-auth/react";
import { DataContext } from "./_component/context/Topbar";
import AOS from "aos";
import Head from "next/head";  // Import Head for SEO

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
      <Head>
        {/* Basic SEO */}
        <title>AlertGroup Security Services - Your Trusted Security Provider in Canada</title>
        <meta name="description" content="AlertGroup offers top-notch security services in Canada, ensuring safety through cutting-edge technology and professional teams." />
        <meta name="keywords" content="Security services Canada, crime data, AlertGroup, safety, surveillance, protection, alarm systems, emergency response" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="AlertGroup Security Services - Trusted Security in Canada" />
        <meta property="og:description" content="Explore our range of security services, learn about crime trends, and discover how we can protect you." />
        <meta property="og:image" content="/hero-bg.jpg" />
        <meta property="og:url" content="https://alertgroupsecurity.com" />
        <meta property="og:type" content="website" />

        {/* Structured Data (Schema Markup) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AlertGroup Security Services",
              "url": "https://alertgroupsecurity.com",
              "logo": "https://alertgroupsecurity.com/logo.png",
              "description": "AlertGroup provides a variety of security services in Canada including crime prevention, surveillance, and emergency response solutions.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer Support",
                "areaServed": "CA",
                "availableLanguage": ["English", "French"]
              },
              "sameAs": [
                "https://www.facebook.com/alertgroup",
                "https://www.linkedin.com/company/alertgroup",
                "https://twitter.com/alertgroup"
              ]
            }),
          }}
        />
      </Head>

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
