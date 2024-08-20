import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate()
  const toContact = ()=>{
    navigate('/Contact')
  }

  const toMenu = ()=>{
    navigate('/Menu')
  }

  const toTestimony = ()=>{
    navigate('/Testimony')
  }

  const toHome = ()=>{
    navigate('/')
  }

  

  return (
    <>
       <div className="w-[100%] md:h-20 h-72 bg-gray-800 
       text-gray-200 flex justify-between 
       items-center m-auto px-24 ">
          <h1>NewDayFood</h1>
          <ul className="flex">
            <li className="p-6 cursor-pointer hover:text-red-700" 
            onClick={toHome}>
              HOME
            </li>
            <li className="p-6 cursor-pointer hover:text-red-700" 
            onClick={toContact}>
              CONTACT
            </li>
            <li className="p-6 cursor-pointer hover:text-red-700" 
            onClick={toMenu}>
              MENU
            </li>
            <li className="p-6 cursor-pointer hover:text-red-700" 
            onClick={toTestimony}>
              TESTIMONIES
            </li>
            <li className="p-6 cursor-pointer hover:text-red-700">
              LOGIN
            </li>
          </ul>
          <p><FaSearch /></p>
       </div>
    </>
  )}

export default Navbar
