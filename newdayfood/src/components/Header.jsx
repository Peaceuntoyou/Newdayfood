import React from 'react'
import food from "../assets/food.jpg"
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Header() {
  const navigate = useNavigate();
  const toMenu = ()=>{
     navigate('/Menu')
  }

  const toContact = ()=>{
     navigate('/Contact')
  }
  const toTestimony = ()=>{
    navigate('/Testimony')
 }

 useEffect(()=>{
  AOS.init({duration:3000, 
  })
    }, [])

  const [nav, setnav] = useState(false)
  const handlenav = ()=>{
    setnav(!nav)
  }
  return (
    <>
    <div className='bg-gradient-to-tr from-black to-slate-500 
    w-full h-screen relative'>
      {/* background image */}
      <div className='tape mix-blend-overlay'></div>
      {/* navbar container */}
      <div className='text-white absolute top-0 flex 
      justify-between w-[100%] h-[100%] pt-8'>
        {/* navbar start */}
        <div className='flex justify-between w-full 
         h-[8%] max-w-[1240px] px-16 mx-auto'>
        <h1 className='font-bold text-2xl 
        text-[#00df9a] hidden md:flex'>NewDayFood</h1>
  
  <ul className='text-white pt-2 hidden 
  md:flex cursor-pointer'>
    <li className='px-6 hover:text-green-600'>HOME</li>
    <li className='px-6 hover:text-green-600' 
    onClick={toContact}>CONTACT</li>
    <li className='px-6 
    hover:text-green-600' onClick={toMenu}>MENU</li>
    <li className='px-6 hover:text-green-600' 
    onClick={toTestimony}>TESTIMONIES</li>
    <li className='px-6 hover:text-green-600'>LOGIN</li>
  </ul>
 <h1 className='text-white pt-3 hidden md:block'><FaSearch /></h1>
 <div className='mt-2 font-bold absolute 
 right-4 block md:hidden' onClick={handlenav}>
  {!nav? < FaBars size={25} /> : <FaTimes size={25} color='red' /> }
 
 </div>
 
        </div>
    <div className='absolute top-0 left-0'>
    <h1 className='font-bold text-xl 
        text-[#00df9a]  pt-10 ml-5 md:hidden'>NewDayFood</h1>
        <div className={!nav? 'absolute left-[-100px]' : 
          'absolute top-20 left-0 ml-5 ease-in-out duration-500'}>
  <ul className='text-white md:hidden cursor-'>
    <li className='py-3 hover:text-green-600'>HOME</li>
    <li className='py-3 hover:text-green-600' 
    onClick={toContact}>CONTACT</li>
    <li className='py-3 hover:text-green-600'
    onClick={toMenu}>MENU</li>
    <li className='py-3 hover:text-green-600' 
    onClick={toTestimony}>TESTIMONIES</li>
    <li className='py-3 hover:text-green-600'>LOGIN</li>
  </ul>
   </div>
 </div>
   
   <div className='text-white absolute top-72 left-24 md:top-60 
   md:left-16' data-aos='zoom-out'>
    <h1 className='text-xl font-bold'>
      <ReactTyped strings={["YOU",'ARE','WELCOME...']}
       typeSpeed={130} backSpeed={140} loop />
    </h1>
    <p className='mt-2'>We serve the best varities of food</p>
    <p>in the city</p>
    <button className='bg-[#00df9a] px-6 py-2 rounded-md 
    mt-3 text-x font-semibold'>Order now</button>
   </div>

      </div>
    </div>
    </>
  )
}

export default Header
