import React from 'react'
import Laptop from "../assets/laptop.jpg"

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='h-[500px] mx-auto py-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center gap-3'>
                <p className='text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>
                    Manage Data Analytics Centrally
                </h1>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quisquam rerum temporibus hic explicabo, necessitatibus iure possimus dolorem aliquid tenetur deserunt eius!
                </p>
                <button className='w-[200px]  text-[#00df9a] rounded-md my-6 mx-auto py-3 font-medium bg-black md:mx-0'>Get Started</button>
            </div>
        </div>
      
    </div>
  )
}

export default Analytics
