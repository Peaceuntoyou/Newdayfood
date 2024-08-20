import React from 'react'
import grain from '../assets/grain.jpg'
import graina from '../assets/graina.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Bottom() {
  return (
    <div>
        <div className='w-full h-[300px] flex px-0
     justify-center gap-x-28 bg-[#f7f4cc] 
     py-20 items-center overflow-hidden'>
      <div className=' ml-[-25%]'>
        <img src={grain} alt="/" className='h-52 
        rounded-full w-52 mt-[-180px]' />
      </div>
      <div className='text-2xl font-bold text-gray-600 
       w-[600px] ml-4 md:w-[650px] md:pl-1 mt-[-60px]'>
      <h2 className='ml-32'>Join in and get 15% off!</h2>
    <p className='text-xs text-gray-500 ml-16 mt-4'>
        To enjoy our weekend discount you have 
        to join now enter your name below
    </p > 
    <div className='flex'>
        <input type="text" placeholder='Enter your name' 
        className='placeholder:text-xs h-10 w-80 
        rounded-full mt-4 mr-5' />
      <button className='bg-[#00df9a] px-6 mt-4
        pt-1 pb-2 rounded-full text-white 
        font-semibold text-xl ml-5'>
          Subscribe
          </button>
    </div>

      </div>
      <div className=' mr-[-25%]'>
        <img src={graina} alt="/" className='h-52 w-52 
        rounded-full mb-[-150px]' />
      </div>
       
     </div>
    </div>
  )
}

export default Bottom
