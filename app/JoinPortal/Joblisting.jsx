"use client";
import React, { useContext, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DataContext } from "../_component/context/Topbar";

const Joblisting = () => {
  const [list, setList] = useState(0);
const {setPosition,setResponsibilities,AlertGroupJob}=useContext(DataContext)
  const handleNext = () => {
    if (list + 4 < AlertGroupJob.length) {
      setList(list + 4);
    }
  };

  const handlePrev = () => {
    if (list > 0) {
      setList(list - 4);
    }
  };
  

  return (
    <div
      id="Joblist"
      className="flex flex-col w-full justify-center items-center min-h-screen p-6"
    >
      <div className="text-4xl font-bold text-white mb-8">
        Exciting Opportunities
      </div>

      {/* Job listings container */}
      <div className="flex items-center justify-center gap-4 w-full">
        {/* Left Arrow */}
        <ArrowLeft
          className={`cursor-pointer text-white text-3xl ${
            list === 0
              ? "opacity-50 pointer-events-none"
              : "hover:scale-105 transition-transform"
          }`}
          onClick={handlePrev}
        />

        {/* Job cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {AlertGroupJob.slice(list, list + 4).map((val, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-slate-950 flex flex-col gap-4"
            >
              <img
                src={val.image || "/AlertGroup.png"}
                alt="Job Image"
                width={80}
                className="mx-auto"
              />
              <div className="text-lg font-bold text-white mb-2">
                Company: {val.company}
              </div>
              <div className="text-lg font-bold text-white mb-2">
                Position: {val.jobTitle}
              </div>
              <div className="text-md text-gray-400">Type: {val.jobType}</div>
              <div className="text-md text-gray-400">Experience Required: {val.experienceLevel}</div>
              <Link
              className=" flex justify-center bg-black"
                href={{
                  pathname: '/JobFormSubmission',
                }}
                onClick={()=>{
                  setPosition(val.jobTitle)
                  setResponsibilities(val.responsibilities)
                }}
              >
                Apply
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <ArrowRight
          className={`cursor-pointer text-white text-3xl ${
            list + 4 >= AlertGroupJob.length
              ? "opacity-50 pointer-events-none"
              : "hover:scale-105 transition-transform"
          }`}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Joblisting;
