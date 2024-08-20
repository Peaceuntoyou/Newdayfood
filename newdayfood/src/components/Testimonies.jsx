import React from 'react'
import personh from "../assets/personh.jpg"
import personn from "../assets/personn.jpg"
import persond from "../assets/persond.jpg"
import personk from "../assets/personk.jpg"
import personj from "../assets/personj.jpg"
import persone from "../assets/persone.jpg"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiDuration } from 'react-icons/gi'

function Testimonies() {

  useEffect(()=>{
AOS.init({duration:3000, 
})
  }, [])

  return (
    
      <>
      <div className=' bg-[#fcfbed] py-20'>

        <div className=' flex flex-col items-center w-full' 
        data-aos='fade-in'>
        <h1 className='text-3xl font-bold text-gray-800'>Testimonies</h1>
      <div className='bg-gradient-to-t from-[#00df9a] 
      to-indigo-400 w-[50px] border my-3 h-[5px]'></div>
      <p className='text-gray-800 w-[500px] text-l'>
        Our testimonies help us grow stronger everyday as a company
        and tend us to wanna give you more value as our dearest and 
        esteem customer.
      </p>
        </div>

        {/* row one */}

        <div className='grid grid-cols-2 my-20 px-20 gap-8' data-aos='zoom-in'>

          <div className='text-gray-800 mx-3' >
            <img src={personk} alt="/" className='h-[300px] w-[100%]'/>
            </div>
            <div className='w-[600px]'>
            <h3 className='pb-4 font-bold'>Victoria Loise</h3>
            <p>
              I can't but to share my experience with newday food,
              the nature of my job required my attension throughout 
              the day but newday food make it easy for me to eat 
              any time of the day with good quality food. Thanks 
              newdayfood
            </p>
            <p className='font-bold pt-2'>21 Dec 2023</p>
            </div>
           
          </div>


          <div className='grid grid-cols-2 my-20 px-20 gap-8' 
          data-aos='zoom-in'>

            <div className='w-[600px]'>
            <h3 className='pt-2 font-bold'>Andre Barbra</h3>
            <p>
              I can't but to share my experience with newday food,
              the nature of my job required my attension throughout 
              the day but newday food make it easy for me to eat 
              any time of the day with good quality food. Thanks 
              newdayfood
            </p>
            <p className='font-bold pt-2'>07 Mar 2024</p>
            </div>
            <div className='text-gray-800 mx-3' >
            <img src={personn} alt="/" className='h-[300px] w-[100%]'/>
            </div>
           
          </div>

  <div className='grid grid-cols-2 my-20 px-20 gap-8' 
  data-aos='zoom-in'>

  <div className='text-gray-800 mx-3' >
  <img src={personh} alt="/" className='h-[300px] w-[100%]'/>
  </div>
  <div className='w-[600px]'>
  <h3 className='pt-2 font-bold'>Bimpe Kolade</h3>
  <p>
    I can't but to share my experience with newday food,
    the nature of my job required my attension throughout 
    the day but newday food make it easy for me to eat 
    any time of the day with good quality food. Thanks 
    newdayfood
  </p>
  <p className='font-bold pt-6'>15 Jun 2023</p>
  </div>
  </div>

          
          

          {/* row two */}

          <div className='grid grid-cols-3 my-20 px-10' 
          data-aos='zoom-out'>

<div className='text-gray-800 mx-3'>
  <img src={personj} alt="/" className='h-[250px] w-[100%]' />
  <p className='font-bold pt-6'>02 Aug 2024</p>
  <p>
    I can't but to share my experience with newday food,
    the nature of my job required my attension throughout 
    the day but newday food make it easy for me to eat 
    any time of the day with good quality food. Thanks 
    newdayfood
  </p>
  <h3 className='pt-2 font-bold'>Kenny Vivian</h3>
</div>

<div className='text-gray-800 mx-3' data-aos='zoom-out'>
  <img src={persone} alt="/" className='h-[250px] w-[100%]' />
  <p className='font-bold pt-6'>26 July 2024</p>
  <p>
    I can't but to share my experience with newday food,
    the nature of my job required my attension throughout 
    the day but newday food make it easy for me to eat 
    any time of the day with good quality food. Thanks 
    newdayfood
  </p>
  <h3 className='pt-2 font-bold'>Rogas Hassan</h3>
</div>

<div className='text-gray-800 mx-3' data-aos='zoom-in'>
  <img src={persond} alt="/" className='h-[250px] w-[100%]' />
  <p className='font-bold pt-6'>08 August 2024</p>
  <p>
    I can't but to share my experience with newday food,
    the nature of my job required my attension throughout 
    the day but newday food make it easy for me to eat 
    any time of the day with good quality food. Thanks 
    newdayfood
  </p>
  <h3 className='pt-2 font-bold'>Omolola Bola</h3>
</div>

</div>

      </div>
      
      </>
  )
}

export default Testimonies
