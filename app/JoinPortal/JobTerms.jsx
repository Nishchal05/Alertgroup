import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const JobTerms = ({ handleNextStep, Responsibilities, accept, setAccept }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-6 space-y-6 rounded-lg shadow-lg">
      {/* Logo Section */}
      <div className="mb-6">
        <img src="/AlertGroup.png" alt="Alert Group" width={150} className="mx-auto" />
      </div>

      {/* Who We Are Section */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-inner text-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">Who We Are</h2>
        <p className="text-justify leading-relaxed">
          Alert Group Security is committed to ensuring the safety and security of individuals and businesses.
          We understand the importance of protecting assets, employees, and clients due to rising threats. 
          We provide professional security services specializing in private protection, mobile security, and security 
          management with extensive experience and a commitment to excellence.
          <br />
          <br />
          We are dedicated to the safety of our clients at all times. Every individual and business deserves to feel safe 
          and secure. Our team of trained security professionals is ready to deliver the best in personal protection, mobile 
          security, and event management, ensuring smooth operations.
        </p>
      </div>

      {/* Responsibilities Section */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-inner text-white w-full">
        <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
        <p>{Responsibilities}</p>
      </div>

      {/* Terms Acceptance */}
      <div className="flex items-center gap-2">
        <Checkbox
          id="terms2"
          checked={accept}
          onCheckedChange={() => setAccept(!accept)}
          className="bg-gray-600 border-white"
        />
        <label
          htmlFor="terms2"
          className="text-sm font-medium leading-none text-white cursor-pointer"
        >
          I accept the terms and conditions
        </label>
      </div>

      {/* Next Button */}
      <div className="w-full flex justify-center">
        <Button
          type="button"
          onClick={handleNextStep}
          className="py-2 px-6 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-200"
          disabled={!accept}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default JobTerms;
