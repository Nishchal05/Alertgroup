import React from 'react'
import { Button } from "@/components/ui/button"
import DialogBox from './DialogBox'

const Home = () => {
  return (
    <div className="flex justify-center text-center flex-col gap-4 w-full md:w-1/2 mx-auto px-4">
      <h1 className="font-bold text-5xl md:text-7xl">
        Your Safety<span className="text-yellow-400">. Our Responsibility</span>
      </h1>
      <p className="text-xl md:text-3xl">
        We propose to provide excellent security coverage with trained security guards, specializing in patrolling, emergency response, and customer service.
      </p>
      <DialogBox Label="Join Us" heading="Become a Part of Our Team" className=' bg-red-700' style={{backgroundColor:'red'}}/>
    </div>
  )
}

export default Home
