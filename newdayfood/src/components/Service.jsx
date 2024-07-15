import React from 'react'
import iyan from '../assets/iyan.webp'
import gari from '../assets/gari.webp'
import jolof from '../assets/jolof.webp'
import snacks from '../assets/snacks.webp'
import whiteRice from '../assets/whiteRice.jpg'
import vegetable from '../assets/vegetable.jpg'
import moiMoi from '../assets/moiMoi.webp'
import pexelsAsh from '../assets/pexelsAsh.jpg'


function Service() {
  return (
    <>
    <div className='w-[100%] py-16 px-4 bg-[#fffdd0]'>
        <div className='flex justify-center'>
            <h1 className='text-xl font-bold text-gray-700'>
                OUR SPECIAL DISHES
            </h1>
        </div>
        {/* cards countainer row one*/}
        <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2 
        md:grid-cols-4 mt-10 px-14 gap-y-5 gap-x-4'>
            {/* card one */}
            <div className='pl-6 shadow-2xl rounded-md 
            mx-1 py-1 hover:scale-105'>
            <img src={iyan} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
                Pounded Yam and Efo</h2>
            <p className='text-gray-700 text-xs'>
                Pounded yam is availaible at any time of the day 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700'>$3.00</p>
                    <div className='w-16 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-1 rounded-md'>
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
            <p className='text-gray-700 text-xs'>
                Our special jollof rice and chicken with 
                several obstacles. 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700'>$5.00</p>
                    <div className='w-16 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-1 rounded-md'>
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
            <p className='text-gray-700 text-xs'>
                A readily available and affordable dish of the day
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700'>$1.00</p>
                    <div className='w-16 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-1 rounded-md'>
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
            <p className='text-gray-700 text-xs'>
            You can count on us for your white rice 
            and plantain 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700'>$4.00</p>
                    <div className='w-16 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-1 rounded-md'>
                    Order
                </button>
            </div>
            </div>
            
        </div>

        {/* cards countainer row two*/}
        <div className='flex justify-center mt-16'>
            <h1 className='text-xl font-bold text-gray-700'>
                OUR SPECIAL SNACKS
            </h1>
        </div>
        <div className='max-w-[1240px] mx-auto grid 
        sm:grid-cols-2 md:grid-cols-4 mt-10 px-14 
        gap-y-5 gap-x-4'>
            {/* card one */}
            <div className='pl-6 shadow-2xl rounded-md 
            mx-1 py-1 hover:scale-105'>
            <img src={snacks} alt="/" className='w-[90%] 
            h-[250px] rounded-md' />
            <h2 className='text-x text-gray-700 font-bold mt-4'>
                Different Types of Snacks</h2>
            <p className='text-gray-700 text-xs'>
                You wouldn't want to miss any of our snacks
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700'>$2.00</p>
                    <div className='w-16 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-1 rounded-md'>
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
            <p className='text-gray-700 text-xs'>
                Vegetable is good for your health and 
                that of your children 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700'>$0.8.00</p>
                    <div className='w-16 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-1 rounded-md'>
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
            <p className='text-gray-700 text-xs'>
                A readily available and affordable breackfast
                dish.
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700'>$0.5.00</p>
                    <div className='w-16 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-1 rounded-md'>
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
            <p className='text-gray-700 text-xs'>
                You wouldn't want to miss our 
                yuming yuming pizza 
            </p>
            <div className='flex justify-between pr-5'>
                <div className=''>
                    <p className='text-gray-700'>$4.00</p>
                    <div className='w-16 bg-[#00df9a] 
                    h-1 border'></div>
                </div>
                <button className='bg-[#00df9a] px-8 
                py-1 rounded-md'>
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
