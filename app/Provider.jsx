"use client";
import React, { useState } from 'react';
import { DataContext } from '@/app/_component/context/Topbar'; 

const DataProvider = ({ children }) => {
  const [laptopview, setmobileview] = useState(true);

  return (
    // Providing the value (state and setter) to the children components
    <DataContext.Provider value={{ laptopview, setmobileview }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
