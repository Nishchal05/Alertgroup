"use client"
import React, { useContext } from 'react'
import { DataContext } from '../_component/context/Topbar'
import Servicespage from './Servicepage';
import { AllServicesList } from '../_component/_data/AllServicesList';

const Page = () => {
    const { ServiceName } = useContext(DataContext);

    return (
        <div className=' mt-[150px]'>
            {AllServicesList
                .filter(val => val.name == ServiceName)
                .map((item, index) => (
                    <Servicespage 
                        key={index}
                        label={item.name} 
                        discription={item.discription} 
                        subheading={item.subheading}
                        img={item.img} 
                    />
                ))
            }
        </div>
    );
}

export default Page;
