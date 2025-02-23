import React from "react";

const Contacts = () => {
  return (
    <div
      id="Contacts"
      className="flex flex-col items-center justify-center p-6 gap-12 mt-24"
    >
      <h1 className="text-3xl md:text-4xl">Let's Talk:</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <p className="text-lg md:text-3xl md:w-1/2">
          Let’s safeguard your future together. Contact us for cutting-edge
          security systems and personalized support.
        </p>
        <form className="space-y-6 p-6 bg-black rounded-lg shadow-md w-full max-w-lg md:w-1/2 border border-gray-800">
          <h1 className="text-white text-2xl">Talk To Us:</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 bg-black"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 bg-black"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Business Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 bg-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 bg-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 bg-black"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Canada Provinces
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="mt-1 block w-full rounded-md border shadow-sm  sm:text-sm h-11 bg-black"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 bg-black"
                required
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 bg-black"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="assistance"
              className="block text-sm font-medium text-gray-700"
            >
              How can we assist you today?
            </label>
            <textarea
              id="assistance"
              name="assistance"
              rows="4"
              className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700"
            >
              Duration of Services
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-11 bg-black"
            />
          </div>

          <div>
            <label
              htmlFor="additionalInfo"
              className="block text-sm font-medium text-gray-700"
            >
              Please provide additional information about your inquiry
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="4"
              className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-black"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-700 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
