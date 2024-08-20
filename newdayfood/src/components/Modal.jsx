import React from 'react'
import { FaTimes } from "react-icons/fa";

function Modal({close}) {

    const closeModel = ()=>{
        close(false)
    }
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center 
    fixed top-0 bg-gray-400'>
    <div className='w-[400px] h-[400px] flex flex-col items-center 
    border px-5 py-10 ml-10 shadow-2xl bg-white'>
        <p className='w-[80%] flex justify-end text-red-600 
        mb-4' onClick={closeModel}>
            < FaTimes size={20} />
        </p>
      <h1 className='font-bold text-2xl text-center'>
        Select Number Of Plate To Order
    </h1>
    <p className='text-center mt-20'>The next page allows you to select 
    your favourite dish and favourite ridder
    </p>
    <div className='flex w-[100%] gap-4 justify-center mt-10'>
        <button className='bg-red-700 py-1 px-10 text-xl 
        rounded-lg' onClick={closeModel}>
            Cancel
        </button>
        <button className='bg-blue-500 py-1 px-8 text-xl rounded-lg'>
            Continue
        </button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Modal
