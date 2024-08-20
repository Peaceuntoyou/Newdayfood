import React from 'react'
import efo from '../assets/efo.png'
import stew from '../assets/stew.png'
import dare from '../assets/dare.jpg'
import jam from '../assets/jam.jpg'
import peace from '../assets/peace.jpg'
import { FaStar } from "react-icons/fa6";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Team() {

  useEffect(()=>{
    AOS.init({duration:3000, 
    })
      }, [])

  return (
    <>
    <div>
      <div className='w-full h-[300px] flex px-0
     justify-center items-center gap-x-28 bg-[#f7f4cc] 
     py-20 overflow-hidden'>
      <div className=' ml-[-8%]'>
        <img src={efo} alt="/" className='h-72' />
      </div>
      <div className='text-2xl font-bold text-gray-600 
       w-[600px] ml-4 md:w-[550px] md:pl-20'>
      <h2>Check out our best</h2>
      <h2>native soup</h2>
      <button className='bg-[#00df9a] px-6 mt-6
        pt-1 pb-2 rounded-full text-white font-semibold'>
          view more
          </button>
      </div>
      <div className=' mr-[-10%]'>
        <img src={stew} alt="/" className='h-48' />
      </div>
       
     </div>

     {/* our team */}

     <div className='bg-[#fcfbed]'>

     <div className='flex justify-center pt-14'>
            <h1 className='text-xl font-bold text-gray-600'>
             TEAM OFFICIALS
            </h1>
        </div>

     <div className='max-w-[1240px] grid sm:grid-cols-2 
     md:grid-cols-3  px-14 pt-14 pb-0 ml-12'>
      
       {/* card one */}
      <div className='shadow-2xl p-2 mx-2 hover:scale-110' 
      data-aos='flip-left'>
      <div className='flex'>
        <img src={dare} alt="/" className='h-[100px] 
        rounded-full w-[100px]' />
        <div className='ml-2 mt-4'>
          <h4  className='text-gray-600 font-bold'>
            Dare Sunday
            </h4>
          <p className='text-gray-500 font-bold'>
            Team leader
            </p>
        </div>
        <div className='flex mt-5 text-[#ffef0a] ml-10'>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
        </div>
      </div>
      <p className='text-xs text-gray-500 mt-6'>
        Attentive food service professional with 
        extensive knowledge about kitchen operations, 
        cooking equipment, and meal preparation styles. 
        providing outstanding customer service through 
        fast and attentive service.
        </p>
      </div>

         {/* card two */}
         <div className='shadow-2xl p-2 mx-2 hover:scale-110'
         data-aos='flip-up'>
      <div className='flex'>
        <img src={jam} alt="/" className='h-[100px] 
        rounded-full w-[100px]' />
        <div className='ml-2 mt-4'>
          <h4  className='text-gray-600 font-bold'>
            Jam Jam
            </h4>
          <p className='text-gray-500 font-bold'>
            IT Consult
            </p>
        </div>
        <div className='flex mt-5 text-[#ffef0a] ml-10'>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
        </div>
      </div>
      <p className='text-xs text-gray-500 mt-6'>
        Attentive food service professional with 
        extensive knowledge about kitchen operations, 
        cooking equipment, and meal preparation styles. 
        providing outstanding customer service through 
        fast and attentive service.
        </p>
      </div>

         {/* card three */}
         <div className='shadow-2xl p-2 mx-2 hover:scale-110'
         data-aos='flip-right'>
      <div className='flex'>
        <img src={peace} alt="/" className='h-[100px] 
        rounded-full w-[100px]' />
        <div className='ml-2 mt-4'>
          <h4  className='text-gray-600 font-bold'>
            Peace Dare
            </h4>
          <p className='text-gray-500 font-bold'>
            Team Member
            </p>
        </div>
        <div className='flex mt-5 text-[#ffef0a] ml-10'>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
        </div>
      </div>
      <p className='text-xs text-gray-500 mt-6'>
        Attentive food service professional with 
        extensive knowledge about kitchen operations, 
        cooking equipment, and meal preparation styles. 
        providing outstanding customer service through 
        fast and attentive service.
        </p>
      </div>
      

     </div>

     </div>
    </div>
    </>
  )
}

export default Team
