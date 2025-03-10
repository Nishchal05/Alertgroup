"use client";
import React, { useEffect, useState } from 'react';
import { DataContext } from '@/app/_component/context/Topbar'; 
const DataProvider = ({ children }) => {
  const [laptopview, setmobileview] = useState(true);
  const [Position,setPosition]=useState(null);
  const [Responsibilities,setResponsibilities]=useState(null);
  const [userdata,setuserdata]=useState(null);
  const [ServiceName,setservicename]=useState(null);
  const [Securityservices,setSecurityservices]=useState([]);
  const [AlertGroupJob,setAlertGroupJob]=useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        if (!res.ok){ throw new Error('Failed to fetch services');}
        const result = await res.json();
        setSecurityservices(result.services);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/UploadjobApplication');
        if (!res.ok){ throw new Error('Failed to fetch services');}
        const result = await res.json();
        setAlertGroupJob(result.services);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchJobs();
    fetchServices();
  }, []);
  return (
    // Providing the value (state and setter) to the children components
    <DataContext.Provider value={{AlertGroupJob,setAlertGroupJob,Securityservices,setSecurityservices, laptopview, setmobileview,userdata,setuserdata,Position,setPosition,Responsibilities,setResponsibilities,ServiceName,setservicename}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
