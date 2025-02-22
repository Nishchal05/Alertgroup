"use client";
import React, { useState } from 'react';
import JobList from '../_component/_data/JobList';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import DialogBox from '../_component/DialogBox';

const Joblisting = () => {
  const [list, setList] = useState(0);

  return (
    <div id='Joblist' className="flex items-center p-5 min-h-screen justify-center gap-4">
      <ArrowLeft 
        className={`cursor-pointer ${list === 0 ? 'opacity-50 pointer-events-none' : ''}`}
        onClick={() => setList(Math.max(0, list - 1))}
      />

      {/* Job cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {JobList.slice(list, list + 4).map((val, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-slate-950 w-80">
            <img src='/AlertGroup.png' alt='AlertGroup' width={100} />
            <h1 className="text-lg font-bold text-white mb-2">Position: {val.Position}</h1>
            <div className="text-md text-gray-400">Type: {val.Type}</div>
            <DialogBox Label='Apply' Position={val.Position} Responsibilties={val.Responsibilities}/>
          </div>
        ))}
      </div>
      <ArrowRight 
        className={`cursor-pointer ${list + 4 >= JobList.length ? 'opacity-50 pointer-events-none' : ''}`}
        onClick={() => setList(list + 1)}
      />
    </div>
  );
}

export default Joblisting;
