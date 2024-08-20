import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Footers() {

  const navigate = useNavigate();
  const toMenu = ()=>{
     navigate('/Menu')
  }
  
  return (
    <div className="bg-[hsl(161,100%,44%)] py-10 cursor-pointer">
      <div className="flex justify-between px-20">    
        <div className="text-white font-bold text-xl">
          NewDayFood
        </div >
        <div className="hidden md:flex space-x-14 text-lg">
            {/* privacy */}
            <div className="text-white">
                <p className=" hover:text-red-950 mb-3 text-md font-bold">
                  PRIVACY
                  </p>
                <div className=" text-sm font-semibold ">
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                    <p>Settings</p>
                </div>
            </div>

            <div className="text-white">
            <h5 className="hover:text-red-950 text-md mb-3 font-bold">
              SERVICES
              </h5>
            <div className=" text-sm font-semibold">
                    <p>Shop</p>
                    <p>Order Now</p>
                    <p onClick={toMenu}>Menu</p>
                </div>
            </div>

          <div className="text-white">
            <h5 className="hover:text-red-950 text-md mb-3 font-bold">
              ABOUT US
              </h5>
            <div className=" text-sm font-semibold text-white">
                    <p>Our Outlet</p>
                    <p>About Us</p>
                    <p>Our Story</p>
                </div>
            </div>

          <div className="text-white">
            <h5 className="hover:text-red-950 text-md mb-3 font-bold">
              INFORMATION
              </h5>
            <div className=" text-sm font-semibold">
                    <p>Contact us</p>
                    <p>Subscribe</p>
                    
                </div>
            </div>

         <div className="text-white">
            <h5 className="hover:text-red-950 text-md mb-3 font-bold">
              SOCIAL MEDIA
              </h5>
          <div className=" text-sm flex justify-between font-semibold">
                    <p><FaTwitter /></p>
                    <p><FaFacebookF /></p>
                    <p><FaInstagram /></p>
                    <p><FaLinkedinIn /></p>
                </div>
            </div>
        
        </div>
    </div>
    </div>
  )
}

export default Footers
