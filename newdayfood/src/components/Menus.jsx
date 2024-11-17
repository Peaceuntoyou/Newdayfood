import React from 'react'
import Semos from './Modals/Semos';
import { FaBowlFood } from "react-icons/fa6";
import { PiBowlFood } from "react-icons/pi";
import amala from '../assets/amala.png'
import garia from '../assets/garia.png'
import fish from '../assets/fish.png'
import tuwo from '../assets/tuwo.png'
import stew from '../assets/stew.png'
import spag from '../assets/spag.png'
import semo from '../assets/semo.png'
import snail from '../assets/snail.png'
import sorce from '../assets/sorce.png'
import catfish from '../assets/catfish.png'
import beaf from '../assets/beaf.png'
import chicken from '../assets/chicken.png'
import chickena from '../assets/chickena.png'
import ricea from '../assets/ricea.png'
import pandi from '../assets/pandi.png'
import piza from '../assets/piza.png'
import jollof from '../assets/jollof.png'
import ogufe from '../assets/ogufe.png'
import efo from '../assets/efo.png'
import { useEffect } from 'react';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Amalas from './Modals/Amalas';
import Jollofs from './Modals/Jollofs';

function Menus() {

    useEffect(()=>{
        AOS.init({duration:3000, 
        })
          }, [])

          const [open,setopen] = useState(false)
          const [opens,setopens] = useState(false)
          const [opena,setopena] = useState(false)

          const handleOpen = ()=>{
            setopen(true)
          }
          const handleOpens = ()=>{
            setopens(true)
          }
          const handleOpena = ()=>{
            setopena(true)
          }

  return (
    <div className='bg-[#fcfbed] py-20 relative'>
      <div className='flex items-center flex-col text-gray-700'>
      <h1 className='text-2xl font-bold' data-aos='zoom-in'>Our Menu</h1>
      <div className='bg-gradient-to-t from-[#00df9a] 
      to-indigo-400 w-[50px] border my-3 h-[5px]'data-aos='zoom-in'></div>
      <p className='w-[500px] mb-6 ml-20'>When we are hungry, it is not enough to eat food and 
        fill our stomachs; we must also balance our diet. 
        As a result, varieties of food is required not only for life but also 
        for sustenance and enjoyment.</p>
      <div className='bg-gradient-to-t from-[#00df9a] 
        to-indigo-400 w-[100%] flex  gap-x-8 py-4 justify-center pl-64' 
        data-aos='flip-right'>
        <div className='w-[60px] h-[60px] border border-[#f7f4cc] 
         flex justify-center items-center rounded-full border-x-4'>
        <p className='text-white'><PiBowlFood size={40}  /></p>
        </div>
        <div className='w-[700px] text-white font-bold
        flex items-center'>
        <p >
        NEWDAYFOOD MEAL FOR YOUR HEALTHY LIVING
      </p>
        </div>
      </div>
      </div>

      {/* food menu card */}
      <div className='px-20 grid grid-cols-3 text-gray-800 pt-10'>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={amala} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Amala and Gbegiri</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Amala is a classic Nigeria dish smooth and delicious yam 
      flour paste,
       Gbegiri is a bean soup, Tomato Stew is a rich 
       tomato-based sauce with assorted meats, and Ewedu 
       is a soup made from the leaves of a Jute plant
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>₦3000</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={semo} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Semo and Vegetable</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Semo is a classic Nigeria dish smooth and delicious yam 
      flour paste,
       Gbegiri is a bean soup, Tomato Stew is a rich 
       tomato-based sauce with assorted meats, and Ewedu 
       is a soup made from the leaves of a Jute plant
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>₦2500</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpens}>
                    Order
                </button>
            </div>

      </div>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={spag} alt="/" className='w-[180px] h-[180px]' />
      <h1 className='mt-4 font-bold'>Jollof Rice</h1>
      <p className='w-[370px] pt-3 pl-10'>
      The dish is typically made with long-grain rice, 
      tomatoes, chilies, onions, spices, and sometimes other 
      vegetables and/or meat in a single pot, although its 
      ingredients and preparation methods vary across different 
      regions
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>₦4000</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpena}>
                    Order
                </button>
            </div>

      </div>
      </div>

{/* row tow */}

<div className='px-20 grid grid-cols-3 text-gray-800 pt-10'>

       <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={tuwo} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Tuwon Shinkafa</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Tuwon Shinkafa is a type of Nigerian and Nigerien rice 
      swallow from Niger and the northern part of Nigeria.
      It is a thick pudding prepared from a local rice that is 
      soft and sticky, and is usually served with different 
      types of soups.
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={ricea} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Spaghetti Jollof</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Eba is one of the most common swallowed food in Nigeria. 
      It is coined from Cassava named Garri. You can eat it with 
      soups like Efo riro, Okro soup, Afang, etc
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={garia} alt="/" className='w-[180px] h-[180px]' />
      <h1 className='mt-4 font-bold'>Spaghetti Jollof</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Your favourite Jollof spaghetti a 
      flavourful, spicy tomato-based sauce similar to jollof rice. 
      specially prepared with a blend of onion, tomato, pepper, 
      and spices such as curry powder, thyme, and bay leaves.
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>
      </div>

      {/* step two row one */}
      <div className='bg-gradient-to-t from-[#00df9a] mt-10
        to-indigo-400 w-[100%] flex  gap-x-8 py-4 justify-center pl-80' 
        data-aos='flip-right'>
        <div className='w-[60px] h-[60px] border border-[#f7f4cc] 
         flex justify-center items-center rounded-full border-x-4'>
        <p className='text-white'><PiBowlFood size={40}  /></p>
        </div>
        <div className='w-[700px] text-white font-bold
        flex items-center'>
        <p >
        NEWDAYFOOD SOUP AND MEATS
      </p>
        </div>
      </div>

      <div className='px-20 grid grid-cols-3 text-gray-800 pt-10'>

       <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={efo} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Amala and Gbegiri</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Amala is a classic Nigeria dish smooth and delicious yam 
      flour paste,
       Gbegiri is a bean soup, Tomato Stew is a rich 
       tomato-based sauce with assorted meats, and Ewedu 
       is a soup made from the leaves of a Jute plant
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={stew} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Catfish Pepper Soup</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Catfish pepper soup is very rich in fibres which 
      promotes digestion and aids gut health. Keeps you hydrated: 
      Catfish pepper soup prevents dehydration because it is 
      rich in water and other minerals. make your order now
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={sorce} alt="/" className='w-[180px] h-[180px]' />
      <h1 className='mt-4 font-bold'>Jollof Rice</h1>
      <p className='w-[370px] pt-3 pl-10'>
      The dish is typically made with long-grain rice, 
      tomatoes, chilies, onions, spices, and sometimes other 
      vegetables and/or meat in a single pot, although its 
      ingredients and preparation methods vary across different 
      regions
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>
      </div>

{/* row tow */}

<div className='px-20 grid grid-cols-3 text-gray-800 pt-10'>

       <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={ogufe} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Goat Meat Stew</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Goat meat has a strong, gamey flavor, sweeter than 
      lamb but less sweet than beef. Cooking it with lots 
      of flavor and spices helps complement its unique flavor
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={beaf} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Beef Meat</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Dry-fried beef cooked in the style of Sichuan is both 
      pleasantly chewy and highly seasoned, perfect for serving 
      as part of a larger spread along with rice
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={chickena} alt="/" className='w-[180px] h-[180px]' />
      <h1 className='mt-4 font-bold'>Spaghetti Jollof</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Your favourite Jollof spaghetti a 
      flavourful, spicy tomato-based sauce similar to jollof rice. 
      specially prepared with a blend of onion, tomato, pepper, 
      and spices such as curry powder, thyme, and bay leaves.
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>
      </div>

      {/* row three */}
      
<div className='px-20 grid grid-cols-3 text-gray-800 pt-10'>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={fish} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Catfish Pepper Soup</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Catfish pepper soup is very rich in fibres which 
      promotes digestion and aids gut health. Keeps you hydrated: 
      Catfish pepper soup prevents dehydration because it is 
      rich in water and other minerals. make your order now
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>

      <div className=' flex flex-col items-center shadow-xl 
      bg-white hover:scale-105 py-4 m-3 rounded-md'>
      <img src={chicken} alt="/" className='w-[200px] h-[200px]' />
      <h1 className='mt-4 font-bold'>Spaghetti Jollof</h1>
      <p className='w-[370px] pt-3 pl-10'>
      Eba is one of the most common swallowed food in Nigeria. 
      It is coined from Cassava named Garri. You can eat it with 
      soups like Efo riro, Okro soup, Afang, etc
        </p>

        <div className='flex justify-between pr-5 gap-28 mt-5'>
                <div className=''>
                    <p className='text-gray-700 font-bold mt-2'>$3.00</p>
                    <div className='w-12 bg-gradient-to-t 
                    from-[#00df9a] to-indigo-400 h-1 border'>
                    </div>
                </div>
                <button className='bg-gradient-to-t from-[#00df9a] 
                to-indigo-400 px-8 py-2 rounded-full text-white 
                font-semibold' onClick={handleOpen}>
                    Order
                </button>
            </div>

      </div>
      </div>
      {open && <Amalas close={setopen}/>}
      {opens && <Semos closes={setopens}/>}
      {opena && <Jollofs closea={setopena}/>}
      
    </div>
  )
}

export default Menus
