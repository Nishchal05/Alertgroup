"use client"
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import PublicIcon from "@mui/icons-material/Public";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import { AllServicesList } from "./_data/AllServicesList";
import { DataContext } from "./context/Topbar";

const Footer = () => {
  const { setservicename }=useContext(DataContext);
  return (
    <footer className="flex flex-col w-full mt-24 border-t-[1px] text-gray-300 py-8">
      {/* Top Section: Logo, Location, and Social Links */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6">
        {/* Logo and Location */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <img src="/AlertGroup.png" alt="AlertGroup" width={80} />
          <div>
            <h1 className="text-4xl md:text-5xl font-serif">
              Alert<span className="text-blue-500">Group</span>
            </h1>
            <div className="flex items-center mt-2 text-lg bg-gray-800 p-2 rounded-md">
              CAN <PublicIcon className="ml-2" />
            </div>
          </div>
        </div>

        {/* Social Links and Contact Info */}
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          {/* Social Media Links */}
          <div className="flex space-x-4 text-2xl">
            <Link href="https://www.instagram.com/alertgroup_security">
              <Instagram className="hover:text-blue-500" />
            </Link>
            <Link href="https://www.linkedin.com/in/alertgroupsecurity">
              <LinkedIn className="hover:text-blue-500" />
            </Link>
            <Link href="#">
              <Twitter className="hover:text-blue-500" />
            </Link>
            <Link href="#">
              <Facebook className="hover:text-blue-500" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2 text-lg text-center md:text-left">
            <p className="flex items-center space-x-2">
              <PhoneCall className="text-blue-500" />
              <span>Phone: +1 (xxx) xxx-xxxx</span>
            </p>
            <p className="flex items-center space-x-2">
              <Email className="text-blue-500" />
              <span>Email: admin@alertgroup.ca</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links and Services */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full px-6 mt-12">
        {/* Join Us */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold text-white">Join Us</h2>
          <Link href="#" className="hover:text-blue-500">
            Join Our Team
          </Link>
        </div>

        {/* About Us */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold text-white">About Us</h2>
          <Link href="#" className="hover:text-blue-500">
            Motive To Secure You
          </Link>
        </div>

        {/* What We Do */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold text-white">What We Do</h2>
          <Link href="#" className="hover:text-blue-500">
            Security Services
          </Link>
        </div>

        {/* Who We Serve */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold text-white">Who We Serve</h2>
          {AllServicesList.filter(val=>val.Type=='Security Services').map((val, index) => (
            <Link key={index} href="/Services" className="hover:text-blue-500" onClick={()=>{
              setservicename(val.name)
            }}>
              {val.name}
            </Link>
          ))}
        </div>

        {/* Where We Are */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold text-white">Where We Are</h2>
          <p>Canada, Provinces</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AlertGroup. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
