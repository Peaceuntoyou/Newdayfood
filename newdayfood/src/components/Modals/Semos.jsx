import React from 'react'
import { FaTimes } from "react-icons/fa";
import iyan from '../images/iyan.webp'
import { useState } from 'react';

function Semos({closes}) {

    const closeMod = ()=>{
        closes(false)
    }
    const [count, setCount] = useState(0)

    const increament = ()=>{
        setCount(count + 1)
    }

    const decrement = ()=>{
        setCount (count - 1)
    }
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center 
    fixed top-0 bg-gray-400'>
    <div className='w-[400px] h-[500px] flex flex-col items-center 
    border px-5 py-10 ml-10 shadow-2xl bg-white'>
        <p className='w-[80%] flex justify-end text-red-600 
        mb-4' onClick={closeMod}>
            < FaTimes size={20} />
        </p>
      <h1 className='font-bold text-2xl text-center mb-10'>
        Select the Number Of Plate You Want
    </h1>

    <div className=' shadow-2xl w-[98%] h-[100px] flex p-4 
    justify-between mb-10'>
        <div className='border border-gray-300 rounded-md w-10 
        h-[99%] flex flex-col items-center'>
            <button onClick={increament}>+</button>
            <input type="text" className='border border-gray-300 
            w-5 h-4 pl-1 placeholder:text-blue-600' 
            placeholder={count}/>
            <button className='text-xl mb-2'
            onClick={decrement}>-</button>
    </div>
    <img src={iyan} alt="/" className='w-[80px] h-[60px]' />
    <div className='flex flex-col'>
        <h2 className='font-bold mb-2'>Semo </h2>
        <p className='text-blue-700'> ₦2500</p>
    </div>
    </div>
   
    <div className='flex flex-col items-center w-[100%] mt-10'>
        
        <button className='bg-blue-500 py-1 px-8 text-xl 
        rounded-lg mb-4'>
            Continue
        </button>
        <a href="#" onClick={closeMod}>Exit</a>
    </div>
    </div>
    </div>
    </>
  )
}

export default Semos
