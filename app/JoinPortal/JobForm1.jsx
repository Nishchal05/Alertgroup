import React from 'react'
import { Button } from "@/components/ui/button";
const JobForm1 = ({handleNextStep,handleChange,handlePreviousStep,formData,Position}) => {
  return (
    <div className="flex justify-center items-center">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="p-4 rounded-lg shadow-md w-full max-w-md"
                  >
                    <div className="text-3xl font-bold mb-4 text-center text-white">
                      Application Form
                    </div>
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
  )
}

export default JobForm1