import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-12 mt-24 min-h-screen">
      
      {/* Call to Action Banner */}
      <div className="bg-blue-600 text-white py-6 px-10 rounded-lg shadow-xl max-w-3xl text-center">
        <h2 className="text-3xl font-bold">
          Get in touch for personalized security solutions.
        </h2>
        <p className="text-lg mt-3">
          We’re ready to provide you with expert advice and top-tier systems.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">

        {/* Left Section - Contact Info */}
        <div className="space-y-8 text-gray-700 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Let's <span className="text-blue-500">Talk:</span>
          </h1>
          <p className="text-lg md:text-2xl text-white">
            Let’s safeguard your future together. Contact us for cutting-edge security systems and personalized support.
          </p>

          <img src="/contact.webp" alt="ContactPic" className="rounded-lg shadow-lg" />

          {/* Contact Information */}
          <div className="space-y-4 text-white">
            <div className="flex items-center gap-4">
              <PhoneIcon />
              <div>
                <h3 className="text-xl font-semibold text-white">Phone:</h3>
                <p>+1-xxxxxxxxxx</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <EmailIcon />
              <div>
                <h3 className="text-xl font-semibold text-white">Email:</h3>
                <p>admin@alertgroup.ca</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LocationIcon />
              <div>
                <h3 className="text-xl font-semibold text-white">Address:</h3>
                <p>Canada</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 text-3xl mt-4 text-white">
            <a href="https://www.linkedin.com/in/alertgroupsecurity" aria-label="LinkedIn" className="hover:text-blue-500">
              <LinkedIn />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/alertgroup_security" aria-label="Instagram" className="hover:text-pink-500">
              <Instagram />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form className="space-y-6 p-8 bg-black rounded-lg shadow-2xl w-full max-w-lg md:w-1/2 border border-gray-300">
          <h1 className="text-2xl font-semibold">Talk To Us:</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <InputField label="First Name" id="firstName" required />
            <InputField label="Last Name" id="lastName" required />
          </div>

          <InputField label="Business Email Address" id="email" type="email" required />
          <InputField label="Phone Number" id="phone" type="tel" required />
          <InputField label="Company Name" id="company" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <InputField label="Canada Provinces" id="country" />
            <InputField label="State" id="state" required />
            <InputField label="City" id="city" required />
          </div>

          <TextAreaField label="How can we assist you today?" id="assistance" required />
          <InputField label="Duration of Services" id="duration" />
          <TextAreaField label="Additional Information" id="additionalInfo" />

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-md shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Input Field Component
const InputField = ({ label, id, type = "text", required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      className="mt-1 block w-full rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 transition duration-300 ease-in-out"
    />
  </div>
);

// Text Area Field Component
const TextAreaField = ({ label, id, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      rows="4"
      required={required}
      className="mt-1 block w-full rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition duration-300 ease-in-out"
    />
  </div>
);

// Example Icon Components
const PhoneIcon = () => <span>📞</span>;
const EmailIcon = () => <span>📧</span>;
const LocationIcon = () => <span>📍</span>;

export default Contacts;
