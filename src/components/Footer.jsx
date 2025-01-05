import React from 'react';
import Container from './Container';
import footerimg from "../assets/footerimg.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='bg-[#000000] py-16 text-[#FAFAFA]'>
      <Container>
      <div className="flex flex-wrap lg:flex-nowrap justify-between border-b-2 border-[rgba(250,250,250,0.38)] pb-8 gap-8">

          <div className="w-full sm:w-[45%] md:w-[20%]">
            <h2 className='text-[24px] text-[#FAFAFA] font-inter font-bold'>Exclusive</h2>
            <h4 className='text-[20px] text-[#FAFAFA] font-poppins font-medium'>Subscribe</h4>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>Get 10% off your first order</p>

            <div className="relative mt-3">
              <input
                className='h-[48px] w-full sm:w-[247px] text-[14px] text-[#262626] font-poppins font-semibold pl-8 pr-2 outline-none'
                type="email"
                placeholder='Enter your email'
              />
              <FaEnvelope className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#262626]" />
            </div>
          </div>

          <div className="w-full sm:w-[45%] md:w-[20%]">
            <h2 className='text-[24px] text-[#FAFAFA] font-inter font-bold'>Support</h2>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>exclusive@gmail.com</p>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>+88015-88888-9999</p>
          </div>

          <div className="w-full sm:w-[45%] md:w-[20%]">
            <h2 className='text-[24px] text-[#FAFAFA] font-inter font-bold'>Account</h2>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>My Account</p>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>Login / Register</p>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>Cart</p>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>Wishlist</p>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>Shop</p>
          </div>

          <div className="w-full sm:w-[45%] md:w-[20%]">
            <h2 className='text-[24px] text-[#FAFAFA] font-inter font-bold'>Quick Link</h2>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>Privacy Policy</p>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>Terms Of Use</p>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>FAQ</p>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>Contact</p>
          </div>

          <div className="w-full sm:w-[45%] md:w-[20%]">
            <h2 className='text-[24px] text-[#FAFAFA] font-inter font-bold'>Download App</h2>
            <p className='text-[16px] text-[rgba(250,250,250,0.53)] font-poppins font-normal mt-2'>Save $3 with App New User Only.</p>
            <img className='mt-2' src={footerimg} alt="" />
            <div className="flex gap-5 mt-5 text-[20px] justify-center sm:justify-start">
              <AiFillGoogleCircle className="transition-transform transform hover:scale-125 hover:text-[#FD5F36] duration-300" />
              <FaTwitter className="transition-transform transform hover:scale-125 hover:text-[#1DA1F2] duration-300" />
              <FaLinkedin className="transition-transform transform hover:scale-125 hover:text-[#0077B5] duration-300" />
              <FaGithub className="transition-transform transform hover:scale-125 hover:text-[#FD5F36] duration-300" />
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <h2 className='text-[18px] text-[rgba(250,250,250,0.49)] font-inter font-bold'>Copyright Rimel 2022. All right reserved</h2>
          <h2 className='text-[18px] text-[rgba(250,250,250,0.49)] font-inter font-bold'>Design By Abdullah Al-Mamun.</h2>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
