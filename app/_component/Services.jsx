import React from 'react'
import CardSlider from './CardSlider'
import { Button } from '@/components/ui/button'
const Services = () => {
  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
        <h2 className=' text-4xl'>Our Services:-</h2>
        <CardSlider/>
        <Button className="bg-red-600 text-white py-2 px-6 hover:bg-red-700 transition-all duration-300">
                Talk To An Expert
              </Button>
    </div>
  )
}

export default Services