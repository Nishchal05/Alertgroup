"use client";
import React, { useEffect, useState } from 'react';
import { DataContext } from '@/app/_component/context/Topbar'; 
import { useSession } from 'next-auth/react';

const DataProvider = ({ children }) => {
  const [laptopview, setmobileview] = useState(true);
  const [Position,setPosition]=useState(null);
  const [Responsibilities,setResponsibilities]=useState(null);
  const [userdata,setuserdata]=useState(null);
  const [ServiceName,setservicename]=useState(null)
  return (
    // Providing the value (state and setter) to the children components
    <DataContext.Provider value={{ laptopview, setmobileview,userdata,setuserdata,Position,setPosition,Responsibilities,setResponsibilities,ServiceName,setservicename}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
