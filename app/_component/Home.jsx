import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center'>
      <div className="flex text-center flex-col gap-4 w-full md:w-1/2 px-4">
        <h1 className="font-bold text-5xl md:text-7xl">
          Your Safety<span className=' text-blue-600'>. Our Responsibility</span>
        </h1>
        <p className="text-xl md:text-3xl">
          We propose to provide excellent security coverage with trained security guards, specializing in patrolling, emergency response, and customer service.
        </p>
      </div>
      <img 
      data-aos="fade-left"
        src='/map.png' 
        alt='Map' 
        width={500} 
        style={{ filter: 'drop-shadow(0 0 12px #4169E1)' }}
       
      />
    </div>
  );
}

export default Home;
