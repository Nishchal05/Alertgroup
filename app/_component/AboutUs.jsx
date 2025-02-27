import React from "react";
import { Handshake, TaskAlt } from "@mui/icons-material";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div id="About" className="flex flex-col items-center min-h-screen justify-center gap-8">
      <h2 className="text-4xl md:text-3xl text-center">Who We Are</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
        {/* About Us Text Section */}
        <div className="grid gap-3 text-sm md:text-base">
          <p>
            Alert group security is a security company committed to ensuring the safety and security of individuals as well as businesses. Our company understands the importance of protecting assets, employees, and clients due to the rising threats. We provide professional security services specializing in Private Protection, mobile security, and security management with our extensive experience and commitment to excellence. 
            <br /><br />
            We are dedicated to ensuring the safety of our clients at all times. Every individual and business deserves to feel safe and secure. We have assembled a team of trained security professionals ready to deliver their best in every aspect of their work. Whether you need personal protection, mobile security, or experienced individuals to manage and control events, we ensure smooth operation.
          </p>
        </div>        
          <img src="/team.jpg" alt="team" className=" rounded-lg"/>
      </div>

      {/* Join Us and Let's Talk Buttons */}
      <div className="flex justify-evenly w-full mt-3 max-w-md">
        <Link href="/JoinPortal" className="flex items-center gap-2 bg-red-600 p-2 rounded-xl transition-all duration-300 hover: hover:shadow-lg">
          <Handshake className="text-white" />
          Join Us
        </Link>
        <Link href="Contacts" className="flex items-center gap-2 p-2 bg-blue-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg">
          <TaskAlt className="text-white"/>
          Let's Talk
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
