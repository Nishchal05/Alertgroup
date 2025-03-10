import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./context/Topbar";
import Link from "next/link";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const { setservicename, Securityservices } = useContext(DataContext); 

  // Filter the services only once and store the result
  const displayServices = Securityservices.filter(val => val.type === 'Display');

  // Ensure that there are services to display
  useEffect(() => {
    if (displayServices.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % displayServices.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [displayServices.length]); // Depend on the length of displayServices

  const getCardStyle = (index) => {
    const position = (index - activeIndex + displayServices.length) % displayServices.length;

    switch (position) {
      case 0:
        return "translate-x-[-200%] scale-75 opacity-50";
      case 1:
        return "translate-x-[-100%] scale-90 opacity-75";
      case 2:
        return "translate-x-[0] scale-100";
      case 3:
        return "translate-x-[100%] scale-90 opacity-75";
      case 4:
        return "translate-x-[200%] scale-75 opacity-50";
      default:
        return "";
    }
  };

  return (
    <div className="relative flex justify-center items-center h-[400px] w-full overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full">
        {displayServices.map((item, index) => (
          <Link
            key={index}
            className={`cursor-pointer absolute w-[400px] h-auto bg-gradient-to-br from-gray-800 to-gray-600 text-white shadow-2xl rounded-lg flex flex-col items-center text-xl font-semibold transition-transform duration-700 ease-in-out ${getCardStyle(index)} hover:opacity-30`}
            href="/Services"
            onClick={() => {
              setservicename(item.serviceName);
            }}
          >
            <img
              src={item.imgUrl}
              alt="security service"
              className="w-full h-[300px] rounded-t-lg"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
