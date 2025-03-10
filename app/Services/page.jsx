"use client"
import React, { useContext } from 'react'
import { DataContext } from '../_component/context/Topbar'
import Servicespage from './Servicepage';

const Page = () => {
    const { ServiceName,Securityservices } = useContext(DataContext);

    return (
        <div className=' mt-[150px]'>
            {Securityservices
                .filter(val => val.serviceName == ServiceName)
                .map((item, index) => (
                    <Servicespage 
                        key={index}
                        label={item.serviceName} 
                        discription={item.description} 
                        subheading={item.subHeading}
                        img={item.imgUrl} 
                    />
                ))
            }
        </div>
    );
}

export default Page;
