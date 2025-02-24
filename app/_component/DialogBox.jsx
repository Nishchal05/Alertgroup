import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const DialogBox = ({ Label, Position, Responsibilties }) => {
  const [step, setStep] = useState(0);
  const [accept, setAccept] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resumeFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resumeFile") {
      setFormData({ ...formData, resumeFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  const handleNextStep = () => {
    if (step === 0 && !accept) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    setStep(step + 1);
  };

  const handlePreviousStep = () => setStep(step - 1);

  return (
    <Dialog>
      <DialogTrigger className=" bg-blue-600 text-white py-[2px] px-6 hover:bg-blue-700 transition-all duration-300 rounded-lg">
        {Label}
      </DialogTrigger>
      <DialogContent className="bg-black p-4 h-[95%]">
        <DialogDescription>
          {step === 0 && (
            <div className="flex flex-col justify-center items-center">
              <img src="/AlertGroup.png" alt="Alert Group" width={150} />
              <div>
                <p className=" text-white">
                  <h1 className=" text-lg">Who We Are:</h1>
                  Alert group security is a security company committed to
                  ensuring the safety and security of individuals as well as
                  businesses. Our company understands the importance of
                  protecting assets, employees, and clients due to the rising
                  threats. We provide professional security services
                  specializing in Private Protection, mobile security, and
                  security management with our extensive experience and
                  commitment to excellence.
                  <br />
                  <br />
                  We are dedicated to ensuring the safety of our clients at all
                  times. Every individual and business deserves to feel safe and
                  secure. We have assembled a team of trained security
                  professionals ready to deliver their best in every aspect of
                  their work. Whether you need personal protection, mobile
                  security, or experienced individuals to manage and control
                  events, we ensure smooth operation.
                </p>
              </div>
              <br />
              <div className=" text-white">
                <h1 className=" text-lg">Responsibilities:</h1>
                <p>{Responsibilties}</p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Checkbox
                  id="terms2"
                  style={{ color: "white" }}
                  checked={accept}
                  onCheckedChange={() => setAccept(!accept)}
                />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                >
                  Accept terms and conditions
                </label>
              </div>
              <div className="flex justify-evenly w-full mt-4">
                <Button
                  type="button"
                  onClick={handleNextStep}
                  className="py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
                  disabled={!accept}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="flex justify-center items-center">
                 <form
                onSubmit={(e) => e.preventDefault()}
                className="p-4 rounded-lg shadow-md w-full max-w-md"
              >
                <h2 className="text-3xl font-bold mb-4 text-center text-white">
                  Application Form
                </h2>
                {/* First Name */}
                <div className=" flex gap-1">
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="block text-white font-medium mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border rounded-md bg-transparent"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="block text-white font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border rounded-md bg-transparent"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md bg-transparent"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Phone */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-white font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-md bg-transparent"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="position"
                    className="block text-white font-medium mb-2"
                  >
                    Position Interested In
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="w-full px-4 py-2 border rounded-md bg-transparent focus:outline-none focus:border-blue-500"
                    value={Position}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Why do you want to join us?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-md bg-transparent focus:outline-none focus:border-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <Button
                    type="button"
                    onClick={handlePreviousStep}
                    className="py-2 px-4 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    onClick={handleNextStep}
                    className="py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
                  >
                    Next
                  </Button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="p-8 rounded-lg shadow-md w-full max-w-md"
              >
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                  Submit Resume
                </h2>
                <div className="mb-4">
                  <label className="block text-left mb-2 font-semibold text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={`${formData.firstName} ${formData.lastName}`}
                    className="w-full px-4 py-2 border rounded-md bg-white text-black"
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left mb-2 font-semibold text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    className="w-full px-4 py-2 border rounded-md bg-white text-black"
                    disabled
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-left mb-2 font-semibold text-white">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    name="resumeFile"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <Button
                    type="button"
                    onClick={handlePreviousStep}
                    className="py-2 px-4 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
