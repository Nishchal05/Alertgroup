"use client"
import React, { useState, useEffect, useContext, useMemo } from "react";
import { DataContext } from "./context/Topbar";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const { setservicename, Securityservices } = useContext(DataContext);

  // Memoize filtered services to avoid recalculating them on every render
  const displayServices = useMemo(
    () => Securityservices.filter((val) => val.type === "Display"),
    [Securityservices]
  );

  // Handle card auto-sliding every 3 seconds
  useEffect(() => {
    if (displayServices.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % displayServices.length);
      }, 3000);

      return () => clearInterval(interval); // Clean up the interval on unmount
    }
  }, [displayServices.length]);

  // Helper function to calculate styles for each card based on its position
  const getCardStyle = (index) => {
    const position = (index - activeIndex + displayServices.length) % displayServices.length;

    switch (position) {
      case 0:
        return "translate-x-[-200%] scale-75 opacity-50";
      case 1:
        return "translate-x-[-100%] scale-90 opacity-75";
      case 2:
        return "translate-x-[0] scale-100"; // Active card
      case 3:
        return "translate-x-[100%] scale-90 opacity-75";
      case 4:
        return "translate-x-[200%] scale-75 opacity-50";
      default:
        return "hidden"; // Cards outside the display range are hidden
    }
  };

  // Function for manual navigation to previous and next cards
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? displayServices.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % displayServices.length);
  };

  return (
    <div className="relative flex justify-center items-center h-[400px] w-full overflow-hidden">
      {/* Left arrow for manual navigation */}
      <button
        onClick={handlePrev}
        aria-label="Previous"
        className="w-11 h-11 absolute left-4 z-10 text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
        style={{
          backdropFilter: "blur(30px)",
        }}
      >
        <MoveLeft/>
      </button>

      {/* Card slider content */}
      <div className="relative flex items-center justify-center w-full h-full">
        {displayServices.map((item, index) => (
          <Link
            key={index}
            className={`cursor-pointer absolute w-[350px] sm:w-[400px] h-auto bg-gradient-to-br from-gray-800 to-gray-600 text-white shadow-2xl rounded-lg flex flex-col items-center text-xl font-semibold transition-transform duration-700 ease-in-out ${getCardStyle(
              index
            )}`}
            href="/Services"
            onClick={() => {
              setservicename(item.serviceName);
            }}
          >
            <img
              src={item.imgUrl}
              alt={item.serviceName || "Security service"}
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-t-lg"
            />
          </Link>
        ))}
      </div>

      {/* Right arrow for manual navigation */}
      <button
        onClick={handleNext}
        aria-label="Next"
        className="w-11 h-11 absolute right-4 z-10 text-white p-2 rounded-full hover:bg-gray-800 transition duration-300"
        style={{
          backdropFilter: "blur(30px)",
        }}
      >
        <MoveRight/>
      </button>
    </div>
  );
};

export default CardSlider;
