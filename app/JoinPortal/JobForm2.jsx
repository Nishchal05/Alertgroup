"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { CldUploadWidget } from "next-cloudinary";

const JobForm2 = ({ handleSubmit, handlePreviousStep, formData, setFormData }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6"
      >
        <div className="text-3xl font-extrabold mb-6 text-center text-gray-900">
          Submit Your Resume
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-left font-semibold text-gray-800">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={`${formData.firstName} ${formData.lastName}`}
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-left font-semibold text-gray-800">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled
          />
        </div>

        {/* Upload Resume */}
        <div className="space-y-2">
          <label className="block text-left font-semibold text-gray-800">
            Upload Resume
          </label>
          <CldUploadWidget
            uploadPreset="alertgroup"
            onSuccess={({ event, info }) => {
              if (event === 'success') {
                setFormData((prevData) => ({
                  ...prevData,
                  resumeFile: info?.secure_url // Saving the resume file URL
                }));
              }
            }}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={open}
                className="py-2 px-4 bg-blue-600 text-white rounded-md w-full hover:bg-blue-700 transition-all duration-200"
              >
                Upload Resume
              </button>
            )}
          </CldUploadWidget>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 mt-6">
          <Button
            type="button"
            onClick={handlePreviousStep}
            className="py-2 px-4 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition-all duration-200"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-all duration-200"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobForm2;
