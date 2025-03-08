"use client";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React, { useState, useContext } from "react";
import { DataContext } from "../_component/context/Topbar";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AllServicesList } from "../_component/_data/AllServicesList";
import { Loader } from "lucide-react";
const Contacts = () => {
  const { userdata } = useContext(DataContext);
  const [loading,setloading]=useState(false)
  const UserId = userdata?.data?._id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const mergedData = {
      ...data,
      UserId,
    };

    try {
      const res = await fetch("/api/ContactsDetails", {
        method: "POST",
        body: JSON.stringify(mergedData), 
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      if (res.ok) {
        toast("Soon Our Team Contact You!");
        setloading(false);
        setData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          ss: "",
          state: "",
          city: "",
          assistance: "",
          duration: "",
          additionalInfo: "",
        });
      } else {
        toast("Error submitting form: " + result.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast("Error submitting the form. Please try again later.");
    }
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    canadaProvinces: "",
    state: "",
    city: "",
    assistance: "",
    duration: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
            Let’s safeguard your future together. Contact us for cutting-edge
            security systems and personalized support.
          </p>
          <img
            src="/contact.webp"
            alt="ContactPic"
            className="rounded-lg shadow-lg"
          />
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
            <a
              href="https://www.linkedin.com/in/alertgroupsecurity"
              aria-label="LinkedIn"
              className="hover:text-blue-500"
            >
              <LinkedIn />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/alertgroup_security"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <form
          className="space-y-6 p-8 bg-black rounded-lg shadow-2xl w-full max-w-lg md:w-1/2 border border-gray-300 h-fit"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-semibold">Talk To Us:</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label>First Name</label>
              <input
                required
                name="firstName" // Added name attribute
                onChange={handleChange}
                className="text-white bg-gray-900 p-2 rounded-lg"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                required
                name="lastName" // Added name attribute
                onChange={handleChange}
                className="text-white bg-gray-900 p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Business Email Address</label>
            <input
              required
              name="email" // Added name attribute
              type="email"
              onChange={handleChange}
              className="text-white bg-gray-900 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label>Phone Number</label>
            <input
              required
              name="phone" // Added name attribute
              type="tel"
              onChange={handleChange}
              className="text-white bg-gray-900 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label>Company Name</label>
            <input
              required
              name="company" // Added name attribute
              type="text"
              onChange={handleChange}
              className="text-white bg-gray-900 p-2 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col">
              <label>Canada Provinces</label>
              <input
                required
                name="canadaProvinces" // Added name attribute
                type="text"
                onChange={handleChange}
                className="text-white bg-gray-900 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>State</label>
              <input
                required
                name="state" // Added name attribute
                type="text"
                onChange={handleChange}
                className="text-white bg-gray-900 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>City</label>
              <input
                required
                name="city" // Added name attribute
                type="text"
                onChange={handleChange}
                className="text-white bg-gray-900 p-2 rounded-lg"
              />
            </div>
          </div>

          <Select
            onValueChange={(value) => setData({ ...data, assistance: value })}
          >
            <SelectTrigger className="w-full bg-slate-900 text-white">
              <SelectValue placeholder="How can we assist you today?" />
            </SelectTrigger>
            <SelectContent>
              {AllServicesList.map((val, index) => (
                <SelectItem
                  key={index}
                  value={val.name}
                  className="p-2 mt-2 bg-gray-300 text-black border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  {val.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) => setData({ ...data, duration: value })}
          >
            <SelectTrigger className="w-full bg-slate-900">
              <SelectValue placeholder="Duration of Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-15 Days" className="p-2 mt-2 bg-gray-300 text-black border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 transition-colors cursor-pointer">1-15 Days</SelectItem>
              <SelectItem value="16-30 Days" className="p-2 mt-2 bg-gray-300 text-black border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 transition-colors cursor-pointer">16-30 Days</SelectItem>
              <SelectItem value="31-60 Days" className="p-2 mt-2 bg-gray-300 text-black border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 transition-colors cursor-pointer">31-60 Days</SelectItem>
              <SelectItem value="61-120 Days" className="p-2 mt-2 bg-gray-300 text-black border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 transition-colors cursor-pointer">61-120 Days</SelectItem>
              <SelectItem value="121-200 Days" className="p-2 mt-2 bg-gray-300 text-black border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 transition-colors cursor-pointer">121-200 Days</SelectItem>
              <SelectItem value="200+ Days" className="p-2 mt-2 bg-gray-300 text-black border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 transition-colors cursor-pointer">200+ Days</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col">
            <label>Additional Information</label>
            <textarea
              name="additionalInfo" // Added name attribute
              onChange={handleChange}
              className="text-white bg-gray-900 p-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="flex justify-center w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-md shadow-lg hover:scale-105 transform transition-all duration-300"
          >
          {loading&&<Loader className=" animate-spin"/>}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Input Field Component
const InputField = ({ label, id, type = "text", required, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      onChange={onChange}
      className="mt-1 block w-full rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 transition duration-300 ease-in-out"
    />
  </div>
);

// Text Area Field Component
const TextAreaField = ({ label, id, required, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      rows="4"
      required={required}
      onChange={onChange}
      className="mt-1 block w-full rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition duration-300 ease-in-out"
    />
  </div>
);

// Example Icon Components
const PhoneIcon = () => <span>📞</span>;
const EmailIcon = () => <span>📧</span>;
const LocationIcon = () => <span>📍</span>;

export default Contacts;
