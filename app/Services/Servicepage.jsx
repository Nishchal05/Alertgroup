import React from 'react';
import Link from 'next/link';

const Servicespage = ({ label, subheading, discription, img }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white p-8">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-full mx-auto py-10">
        {img && (
          <div className="w-full lg:w-1/2">
            <img src={img} alt={label} className="rounded-lg shadow-lg w-full h-auto object-cover"/>
          </div>
        )}
        <div className="lg:ml-12 mt-6 lg:mt-0 w-full lg:w-1/2">
          <h1 className="text-5xl font-bold mb-6 text-blue-400">{label}</h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">{subheading}</h2>
          <p className="text-gray-200 leading-relaxed mb-6">{discription}</p>
          <Link href='/Contacts'>
            <button className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300">
              Talk To Us
            </button>
          </Link>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 px-8 py-10 bg-black rounded-lg shadow-xl h-1/2">
        <h2 className="text-4xl font-bold mb-6 text-blue-400 text-center">Why Choose Us?</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold mb-3 text-gray-200">Experienced Bodyguards</h3>
            <p className="text-gray-300 leading-relaxed">
              Our team consists of highly trained and experienced bodyguards ready to ensure your safety in any situation.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold mb-3 text-gray-200">24/7 Protection</h3>
            <p className="text-gray-300 leading-relaxed">
              We offer round-the-clock services, making sure you're protected at all times, no matter the location.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold mb-3 text-gray-200">Personalized Solutions</h3>
            <p className="text-gray-300 leading-relaxed">
              We tailor our security solutions to fit your unique needs, offering flexibility and personalized attention.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 px-8 py-12 bg-blue-800 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Secure Your Safety?</h2>
        <p className="text-gray-200 mb-8">
          Contact us now and let our professional team provide you with top-notch private protection services.
        </p>
        <Link href='/Contacts'>
          <button className="px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Servicespage;
