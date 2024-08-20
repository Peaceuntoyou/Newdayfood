import React from 'react'
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function View() {
    const data = [
        {name:'Amala and gbegiri',
        name1:'Gari and Vegitable',
        name2:'Fish Pepe Soup', 
         img:'/src/assets/amala.png',
         img1:'/src/assets/garia.png',
         img2:'/src/assets/fish.png',
        },
        {name:'Tuwo Chinkafa',
        name1:'Pepe Fish',
        name2:'Jollof Rice and Plantain', 
            img:'/src/assets/tuwo.png',
            img1:'/src/assets/stew.png',
            img2:'/src/assets/spag.png',
        },
        {name:'Pounded Yam',
        name1:'Snail Sorce',
        name2:'Pepe Sorce', 
            img:'/src/assets/semo.png',
            img1:'/src/assets/snail.png',
            img2:'/src/assets/sorce.png',
        },
        {name:'Cat Fish',
            name1:'Beaf Meat',
            name2:'Chicken Lap', 
            img:'/src/assets/catfish.png',
            img1:'/src/assets/beaf.png',
            img2:'/src/assets/chicken.png',
        },
        {name:'Pounded Yam and Okro',
            name1:'Goat Meat',
            name2:'Rice and Chicken', 
            img:'/src/assets/pandi.png',
            img1:'/src/assets/ogufe.png',
            img2:'/src/assets/jollof.png',
        },
        {name:'Vegitable',
            name1:'Roasted Chicken',
            name2:'Spagety and Chicken', 
            img:'/src/assets/efo.png',
            img1:'/src/assets/chickena.png',
            img2:'/src/assets/ricea.png',
        },
      ]

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    

  return (
    <>
    <div className='bg-slate-400 py-1'>
    <div className=' w-3/4 m-auto'>
    <div className='flex justify-center pt-10'>
            <h1 className='text-xl font-bold text-gray-300'>
             FOOD MENU
            </h1>
        </div>
      <div className='mt-4 mb-10'>
      <Slider {...settings}>
        {data.map((d) => (
          <div className='w-[1240px] h-[250px]'>
            <div className=' flex h-[90%] w-[100%]
            justify-center items-center gap-x-4 mb-0'>
              <img src={d.img} alt="/" 
              className='w-[300px] h-[200px] ' />
              <img src={d.img1} alt="/" 
              className='w-[300px] h-[200px]' />
              <img src={d.img2} alt="/" 
              className='w-[300px] h-[200px]' />
          </div>
          <div className='flex justify-between items-center mt-0 pr-10'>
            <p className='text-gray-300 font-bold ml-12'>
                {d.name}
            </p>
            <p className='text-gray-300 font-bold'>
                {d.name1}
            </p>
            <p className='text-gray-300 font-bold mr-8'>
                {d.name2}
            </p>
              
            </div>
          </div>
        ))}
        </Slider>
        <div className='flex justify-center mt-10'>
        <button className='bg-[#00df9a] px-40 mt-6
            pt-1 pb-2 rounded-full text-white font-semibold'>
          Order Now
          </button>
        </div>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default View
