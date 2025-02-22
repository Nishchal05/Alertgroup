import Link from "next/link";
import React from "react";
import TouchAppIcon from "@mui/icons-material/TouchApp";

const ApplyHeroSection = () => {
  return (
    <div className="relative h-screen">
            <img
              src="/hero-bg.jpg"
              alt="background"
              className="h-full w-full object-cover opacity-10"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:w-1/2">
              <h1 className="font-bold text-white text-4xl md:text-6xl lg:text-7xl mb-4">
                Join AlertGroup’s elite{" "}
                <span className="text-yellow-600">security team.</span>
              </h1>
              <p className="text-white text-lg md:text-xl">
                Be a part of a team that values integrity, dedication, and
                professionalism.
              </p>
              <Link
                href="#Joblist"
                className="flex gap-2 items-center bg-red-600 text-white py-2 px-4 mt-7 rounded-md hover:bg-red-700 transition"
              >
                <TouchAppIcon /> Apply
              </Link>
            </div>
          </div>
  )
}

export default ApplyHeroSection