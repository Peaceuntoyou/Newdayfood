import React from 'react'
import ridera from '../assets/ridera.jpg'
import riderb from '../assets/riderb.jpg'
import riderc from '../assets/riderc.jpg'
import riderd from '../assets/riderd.jpg'
import ridere from '../assets/ridere.jpg'
import riderf from '../assets/riderf.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Rider() {

  const data = [
    {name:'Rogers Kay', img:'/src/assets/ridera.jpg',
      discription: 'Diligent and punctual personel with a clean driving record and excellent navigation skills, ensuring customer satisfaction and timely deliveries '
    },
    {name:'Femi Adeolu', img:'/src/assets/riderb.jpg',
      discription: 'Diligent and punctual personel with a clean driving record and excellent navigation skills, ensuring customer satisfaction and timely deliveries '
    },
    {name:'Amelia Chukwu', img:'/src/assets/riderc.jpg',
      discription: 'Diligent and punctual personel with a clean driving record and excellent navigation skills, ensuring customer satisfaction and timely deliveries '
    },
    {name:'Olivia Noah', img:'/src/assets/riderd.jpg',
      discription: 'Diligent and punctual personel with a clean driving record and excellent navigation skills, ensuring customer satisfaction and timely deliveries '
    },
    {name:'Andrew Festus', img:'/src/assets/ridere.jpg',
      discription: 'Diligent and punctual personel with a clean driving record and excellent navigation skills, ensuring customer satisfaction and timely deliveries '
    },
    {name:'Emma Elijah', img:'/src/assets/riderf.jpg',
      discription: 'Diligent and punctual personel with a clean driving record and excellent navigation skills, ensuring customer satisfaction and timely deliveries '
    },
  ]

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <>
    <div className='bg-[#fcfbed] py-1'>
    <div className=' w-3/4 m-auto'>
    <div className='flex justify-center pt-20'>
            <h1 className='text-xl font-bold text-gray-600'>
             DELIVERING RIDERS
            </h1>
        </div>
      <div className='mt-10 mb-10'>
      <Slider {...settings}>
        {data.map((d) => (
          <div className='bg-[#f7f4cc] h-[450px] rounded-lg'>
            <div className='rounded-t-lg flex h-56
            justify-center items-center'>
              <img src={d.img} alt="/" className='w-44 
              h-44 rounded-full ' />
          </div>
          <div className='flex flex-col justify-center 
            items-center gap-4 p-4 mb-6 bg-[#f7f5db]'>
              <p className='text-gray-600 font-bold'>{d.name}</p>
              <p className='text-xs text-gray-500 ml-4'>{d.discription}</p>
          <button className='bg-[#00df9a] px-6 mt-6
            pt-1 pb-2 rounded-full text-white font-semibold'>
          Book Rider
          </button>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
    </div>
    </>
  )
}

export default Rider
