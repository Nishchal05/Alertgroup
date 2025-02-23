"use client";
import React, { useState } from 'react';
import { DataContext } from '@/app/_component/context/Topbar'; 

const DataProvider = ({ children }) => {
  const [data1, setdata1] = useState(true);

  return (
    // Providing the value (state and setter) to the children components
    <DataContext.Provider value={{ data1, setdata1 }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
