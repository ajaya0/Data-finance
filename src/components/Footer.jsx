import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className=' max-w[1240] mx-auto py-16 grid  gap-8 text-gray-300 px-4'>
        <div className='lg:w-full '>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DATA FINANCE</h1>
            <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, cupiditate.</p>
            <div className='flex gap-4 md:[75%] my-6'>       
                <FaDribbbleSquare size={30}/>
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-4 lg:col-span-3 md:flex md:justify-between'>
            <div>
                <h6 className='font-medium text-[#00df9a]'>Solution</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Comerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-[#00df9a]'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentaion</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-[#00df9a]'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>BLog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div className=''>
                <h6 className='font-medium text-[#00df9a]'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Plicy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
