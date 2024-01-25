import React from 'react'

function NewsLatter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 pt-5'>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p className='lg:mt-3'>Sign up to register and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-3'>
                    <input className='p-3 flex w-full rounded-md text-black' type="text" placeholder='Enter your Email'/>
                    <button className='w-[200px] bg-[#00df9a] rounded-md my-6 mx-auto py-3 font-medium text-black'>Notify me</button>
                </div>
                <p>We care bout the protection of your data. Read our <a href="" className='text-[#00df9a] underline'>Privacy Policy</a></p>
            </div>

        </div>
    </div>
  )
}

export default NewsLatter
