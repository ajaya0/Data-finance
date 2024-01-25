import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='text-white '>
        <div className=' mt-[-96px] w-full h-screen text-auto flex  flex-col justify-center items-center'>
            <p className='text-[#00df9a] font-semibold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl md:py-6 sm:text-6xl text-4xl font-bold'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexiblee financing for</p>
                <ReactTyped 
                    className='font-bold text-xl pl-2 md:font-bold md:text-5xl md:pl-2 sm:text-3xl'
                    strings={['BTB','BTC','SASS']} typeSpeed={120} bcakSpeed={140} loop 
                />
            </div>
            <p className='md:text-2xl md:p-3 text-xl font-bold text-gray-500 mt-3 text-center'>Monitor your data analytics to increase revenue for BTB,BTC &SASS platforms.</p>
            <button className='w-[200px]  bg-[#00df9a] rounded-md my-6 mx-auto py-3 font-medium text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
