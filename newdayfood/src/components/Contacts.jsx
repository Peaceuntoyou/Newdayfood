import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contacts() {

  useEffect(()=>{
    AOS.init({duration:3000, 
    })
      }, [])

  return (
    <>
    <div className='w-full h-screen bg-gradient-to-t 
    from-sky-400 to-indigo-800 flex relative justify-center' 
    data-aos='zoom-in'>
      <div className='cont mix-blend-overlay '></div>
      <div className='absolute w-full'>
      <div className=' text-white flex 
      flex-col items-center mb-10'>
      <h1 className='text-4xl font-extrabold mt-20'>
        Get in Torch
        </h1>
      <div className='bg-gradient-to-tl from-sky-400 to-indigo-800  
       w-[50px] my-3 h-[5px] mt-6 mb-4'></div>
       <p className='w-[600px] text-white font-bold'>
       Please do not hesitate to conect with us, ask us questions 
       about your favourite and also make your comment 
       we are here to serve you better. Thanks for your 
       patronage 
       </p>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex gap-5'>
          <input type="text" placeholder='Full Name' 
          className='bg-inherit border w-[400px] h-9 pl-4 
          border-white border-x-3 border-y-3' />
           <input type="text" placeholder='Email Address' 
          className='bg-inherit border w-[400px] h-9 pl-4 
          border-white border-x-3 border-y-3' />
        </div>
        <input type="text" placeholder='Subject' 
          className='bg-inherit border w-[823px] h-9 pl-4 mt-6 
          border-white border-x-3 border-y-3' />
          <textarea className='border border-white border-x-3 
          w-[823px] mt-6 bg-inherit border-y-3
          text-gray-300 h-20 pl-4'>Message</textarea>
          <button className='w-[200px] h-12 bg-gradient-to-tr 
          from-sky-400 to-indigo-800 text-white mt-6 rounded-full 
           font-bold text-xl'>
            Send Message
          </button>
      </div>
      </div>
    


    </div>
    
    </>
  )
}

export default Contacts
