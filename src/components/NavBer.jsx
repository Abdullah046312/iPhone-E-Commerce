import React from 'react';
import Container from './Container';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const NavBer = () => {
  return (
    <section className='py-8 border-b-2 border-[rgba(0,0,0,0.22)] pb-5'>
      <Container>
        <div className="flex justify-between items-center mx-auto flex-wrap sm:flex-nowrap">
          {/* Left Section */}
          <div className="w-full sm:w-[20%] mb-4 sm:mb-0">
            <h2 className='text-[24px] text-[#000000] font-poppins font-bold'>Exclusive</h2>
          </div>

          {/* Center Section with the Navigation Links */}
          <div className="w-full sm:w-[40%] mb-4 sm:mb-0">
            <ul className="flex justify-center gap-10">
              <li className="nav-item text-[16px] text-[#000000] font-inter font-medium">Home</li>
              <li className="nav-item text-[16px] text-[#000000] font-inter font-medium">Contact</li>
              <li className="nav-item text-[16px] text-[#000000] font-inter font-medium">About</li>
              <li className="nav-item text-[16px] text-[#000000] font-inter font-medium">Sign Up</li>
            </ul>
          </div>

          {/* Right Section with Search Bar and Icons */}
          <div className="w-full sm:w-[30%] flex justify-center sm:justify-end gap-5 items-center">
            {/* Search Input */}
            <div className="relative w-full sm:w-[243px]"> 
              <input 
                type="text" 
                className="w-full h-[38px] pl-4 pr-3 text-[16px] bg-[#F5F5F5] rounded-md outline-none" 
                placeholder="What are you looking for?"
              />
              <IoSearch className="absolute left-[210px] top-1/2 transform -translate-y-1/2 text-[#000000] text-[20px]" />
            </div>

            {/* Icons */}
            <h4 className='text-[25px] text-[#4C3BCF]'>
              <FaRegHeart />
            </h4>
            <h4 className='text-[30px] text-[#4C3BCF]'>
              <IoCartOutline />
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NavBer;
