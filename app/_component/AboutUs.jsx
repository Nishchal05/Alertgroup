import React from "react";
import { Chart } from "./Chart";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center gap-8 p-4 mt-24">
      <h2 className="text-4xl md:text-3xl text-center">Who We Are</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
        <div className="bg-slate-500 rounded-xl h-64 md:h-auto"></div>
        <div className="grid gap-3 text-sm md:text-base">
          <p>
            Alert group security is a security company committed to ensuring the safety and security of individuals as well as businesses. Our company understands the importance of protecting assets, employees, and clients due to the rising threats. We provide professional security services specializing in Private Protection, mobile security, and security management with our extensive experience and commitment to excellence. 
            <br /><br />
            We are dedicated to ensuring the safety of our clients at all times. Every individual and business deserves to feel safe and secure. We have assembled a team of trained security professionals ready to deliver their best in every aspect of their work. Whether you need personal protection, mobile security, or experienced individuals to manage and control events, we ensure smooth operation.
          </p>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
