"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation"; // Updated to next/navigation for app directory support
import JobTerms from "@/app/JoinPortal/JobTerms";
import JobForm1 from "@/app/JoinPortal/JobForm1";
import JobForm2 from "@/app/JoinPortal/Jobform2";
import { DataContext } from "../_component/context/Topbar";
import { toast } from "sonner";

const Page = () => {
  const [step, setStep] = useState(0);
  const [accept, setAccept] = useState(false);
  const { Position, Responsibilities } = useContext(DataContext);
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resumeFile: null,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && Position) {
      setFormData((prev) => ({ ...prev, position: Position }));
    }
  }, [Position, mounted]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resumeFile") {
      setFormData({ ...formData, resumeFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/UploadjobApplication", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      if (res.ok) {
        toast(result.message);
        if (result.message == "Submission Successful") {
          router.push("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextStep = () => {
    if (step === 0 && !accept) {
      toast("You must accept the terms and conditions to proceed.");
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => setStep((prevStep) => prevStep - 1);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen text-white p-6 flex flex-col justify-center items-center mt-14">
      <div className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold mb-6 shadow-lg">
        Job Application
      </div>
      <div className="border p-6 rounded-lg shadow-md w-full max-w-xl">
        <div className="mb-6 text-center">
          <div className={`text-lg ${step === 0 && "font-bold text-blue-500"}`}>
            Step 1: Terms & Conditions
          </div>
          <div className={`text-lg ${step === 1 && "font-bold text-blue-500"}`}>
            Step 2: Personal Information
          </div>
          <div className={`text-lg ${step === 2 && "font-bold text-blue-500"}`}>
            Step 3: Review & Submit
          </div>
        </div>

        {/* Step Content */}
        <div>
          {step === 0 && (
            <JobTerms
              handleNextStep={handleNextStep}
              Responsibilities={Responsibilities}
              accept={accept}
              setAccept={setAccept}
            />
          )}
          {step === 1 && (
            <JobForm1
              handleNextStep={handleNextStep}
              handleChange={handleChange}
              handlePreviousStep={handlePreviousStep}
              formData={formData}
              Position={Position}
            />
          )}
          {step === 2 && (
            <JobForm2
              handleSubmit={handleSubmit}
              handlePreviousStep={handlePreviousStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>

        {/* Navigation Buttons */}
      </div>
    </div>
  );
};

export default Page;
