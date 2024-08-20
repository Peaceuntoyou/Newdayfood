import React from 'react'
import iyan from '../assets/iyan.webp'
import gari from '../assets/gari.webp'
import jolof from '../assets/jolof.webp'
import snacks from '../assets/snacks.webp'
import whiteRice from '../assets/whiteRice.jpg'
import vegetable from '../assets/vegetable.jpg'
import moiMoi from '../assets/moiMoi.webp'
import pexelsAsh from '../assets/pexelsAsh.jpg'
import { FaBowlFood } from "react-icons/fa6";
import { GiFoodChain } from "react-icons/gi";
import { PiBowlFood } from "react-icons/pi";
import { MdFoodBank } from "react-icons/md";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Service() {

    useEffect(()=>{
        AOS.init({duration:3000, 
        })
          }, [])

  return (
    <>
    <div className='w-[100%]  bg-[#fcfbed] pb-20'>

          {/* top icons */}
     <div className='w-full h-[100px] flex 
     justify-center items-center gap-x-28 bg-[#faf8d5] 
     py-20 text-gray-600' data-aos='zoom-out'>
        <div>
        <p className='ml-3'><FaBowlFood size={50}  /></p>
        <p>Take away</p>
        </div>
        <div>
        <p className='ml-2'><GiFoodChain size={50}  /></p>
        <p>Delicious</p>
        </div>
        <div>
        <p className='ml-3'><PiBowlFood size={50}  /></p>
        <p>Supper meal</p>
        </div>
        <div>
        <p className='ml-3'><MdFoodBank size={50}  /></p>
        <p>Food bank</p>
        </div>
        
     </div>

        <div className='flex justify-center py-14'>
            <h1 className='text-xl font-bold text-gray-700'>
                OUR SPECIAL DISHES
            </h1>
        </div>
        {/* cards countainer row one*/}
        <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2 
        md:grid-cols-4  px-14 gap-y-5 gap-x-4'>
            {/* card one */}
            <div className='pl-6 shadow-2xl rounded-md 
            mx-1 py-4 hover:scale-105'>
            <img src={iyan} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
                Pounded Yam and Efo</h2>
            <p className='text-gray-500 text-xs'>
                Pounded yam is availaible at any time of the day 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-2 rounded-full text-white font-semibold'>
                    Order
                </button>
            </div>
            </div>

            {/* card two */}
            <div className=' pl-6 shadow-2xl rounded-md 
            py-1 hover:scale-105'>
            <img src={jolof} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
                Jollof Rice and Chicken</h2>
            <p className='text-gray-500 text-xs'>
                Our special jollof rice and chicken with 
                several obstacles. 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$5.00</p>
                    <div className='w-12 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-2 rounded-full text-white font-semibold'>
                    Order
                </button>
            </div>
            </div>

                   {/* card three */}
                   <div className='pl-6 shadow-2xl rounded-md 
            mx-1 py-1 hover:scale-105'>
            <img src={gari} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
                Gari and Egusi Soup</h2>
            <p className='text-gray-500 text-xs'>
                A readily available and affordable dish of the day
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$1.00</p>
                    <div className='w-12 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-2 rounded-full text-white font-semibold'>
                    Order
                </button>
            </div>
            </div>

            {/* card four */}
            <div className=' pl-6 shadow-2xl rounded-md 
            py-1 hover:scale-105'>
            <img src={whiteRice} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
            White Rice and Plantain</h2>
            <p className='text-gray-500 text-xs'>
            You can count on us for your white rice 
            and plantain 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$4.00</p>
                    <div className='w-12 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-2 rounded-full text-white font-semibold'>
                    Order
                </button>
            </div>
            </div>
            
        </div>

        {/* cards countainer row two*/}
        <div className='flex justify-center mt-16'>
            <h1 className='text-xl font-bold text-gray-700'>
             SPECIAL SNACKS
            </h1>
        </div>
        <div className='max-w-[1240px] mx-auto grid 
        sm:grid-cols-2 md:grid-cols-4 mt-10 px-14 
        gap-y-5 gap-x-4'>
            {/* card one */}
            <div className='pl-6 shadow-2xl rounded-md 
            mx-1 py-4 hover:scale-105'>
            <img src={snacks} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
                Different Types of Snacks</h2>
            <p className='text-gray-500 text-xs'>
                You wouldn't want to miss any of our snacks
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$2.00</p>
                    <div className='w-12 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-2 rounded-full text-white font-semibold'>
                    Order
                </button>
            </div>
            </div>

            {/* card two */}
            <div className=' pl-6 shadow-2xl rounded-md 
            py-1 hover:scale-105'>
            <img src={vegetable} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
                Vegetables and Fresh Juice</h2>
            <p className='text-gray-500 text-xs'>
                Vegetable is good for your health and 
                that of your children 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$0.8.00</p>
                    <div className='w-14 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-2 rounded-full text-white font-semibold'>
                    Order
                </button>
            </div>
            </div>

                   {/* card three */}
                   <div className='pl-6 shadow-2xl rounded-md 
            mx-1 py-1 hover:scale-105'>
            <img src={moiMoi} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
                Moi-Moi and Pap</h2>
            <p className='text-gray-500 text-xs'>
                A readily available and affordable breackfast
                dish.
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$0.5.00</p>
                    <div className='w-14 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-2 rounded-full text-white font-semibold'>
                    Order
                </button>
            </div>
            </div>

            {/* card four */}
            <div className=' pl-6 shadow-2xl rounded-md 
            py-1 hover:scale-105'>
            <img src={pexelsAsh} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
                Creamy Pizza</h2>
            <p className='text-gray-500 text-xs'>
                You wouldn't want to miss our 
                yuming yuming pizza 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$4.00</p>
                    <div className='w-12 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-2 rounded-full text-white font-semibold'>
                    Order
                </button>
            </div>
            </div>
            
        </div>
      
    </div>
    </>
  )
}

export default Service
