import React from 'react'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

function Cards() {
  return (
    <div className='py-[10rem] px-4 bg-white w-full'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className="w-full  border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-bold'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='w-[150px]  bg-[#00df9a] rounded-md my-6 mx-auto py-3 font-medium text-black'>Start Trial</button>
        </div>
        <div className="w-full  border shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
            <p className='text-center text-4xl font-bold'>$200</p>
            <div className='text-center font-bold'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>2 Granted User</p>    
                <p className='py-2 border-b mx-8'>Send up to 3 GB</p>
            </div>
            <button className='w-[150px]  bg-[#00df9a] rounded-md my-6 mx-auto py-3 font-medium text-black'>Start Trial</button>
        </div>
        <div className="w-full  border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
            <p className='text-center text-4xl font-bold'>$250</p>
            <div className='text-center font-bold'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>3 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
            </div>
            <button className='w-[150px]  bg-[#00df9a] rounded-md my-6 mx-auto py-3 font-medium text-black'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
