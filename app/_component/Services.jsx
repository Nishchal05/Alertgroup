import React from 'react'
import CardSlider from './CardSlider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const Services = () => {
  return (
    <div id='Services' className=' flex flex-col justify-center items-center h-screen mt-10'>
        <h2 className=' text-4xl'>What We Serve</h2>
        <CardSlider/>
        <Link href="#Contacts" className="bg-red-600 text-white py-2 px-6 hover:bg-red-700 transition-all duration-300">
                Talk To An Expert
        </Link>
    </div>
  )
}

export default Services 