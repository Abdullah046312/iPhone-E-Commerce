import React from 'react';
import Container from './Container';
import { IoIosArrowForward } from "react-icons/io";
import bannerimg from "../assets/bannerimg.png";
import Slider from "react-slick";  // Import Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slick settings
const settings = {
  dots: true, // Shows dots for navigation
  infinite: true, // Infinite scroll
  speed: 500, // Animation speed
  slidesToShow: 1, // Show one image at a time
  slidesToScroll: 1, // Scroll one image at a time
  autoplay: true, // Auto play
  autoplaySpeed: 3000, // Auto play speed (3 seconds)
};

const BannerPart = () => {
  const categories = [
    "Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle",
    "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"
  ];

  return (
    <section>
      <Container>
        <div className="flex flex-wrap sm:flex-nowrap cursor-pointer">
          {/* Left sidebar */}
          <div className="w-full sm:w-[20%] lg:border-r-2  lg:border-[rgba(0,0,0,0.22)] py-10">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-3 mt-3 group">
                <h4 className='text-[16px] text-[#000000] font-inter font-normal group-hover:text-[#FF6500]'>
                  {category}
                </h4>
                <h4 className="text-[20px] text-[#000000] group-hover:text-[#FF6500]">
                  <IoIosArrowForward />
                </h4>
              </div>
            ))}
          </div>

          {/* Right side with slider */}
          <div className="w-full sm:w-[70%] py-10 lg:pl-10">
            {/* React Slick Slider */}
            <Slider {...settings}>
              <div className="relative group">
                <img className='w-full transform group-hover:scale-105 transition-all duration-300' src={bannerimg} alt="Banner 1" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                  <span className="text-[#FF6500] rounded-xl text-[20px] font-bold py-5 px-5 bg-[rgba(250,250,250,0.19)]">Shop Now</span>
                </div>
              </div>
              <div className="relative group">
                <img className='w-full transform group-hover:scale-105 transition-all duration-300' src={bannerimg} alt="Banner 2" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                <span className="text-[#FF6500] rounded-xl text-[20px] font-bold py-5 px-5 bg-[rgba(250,250,250,0.19)]">Shop Now</span>
                </div>
              </div>
              <div className="relative group">
                <img className='w-full transform group-hover:scale-105 transition-all duration-300' src={bannerimg} alt="Banner 3" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                <span className="text-[#FF6500] rounded-xl text-[20px] font-bold py-5 px-5 bg-[rgba(250,250,250,0.19)]">Shop Now</span>
                </div>
              </div>
              <div className="relative group">
                <img className='w-full transform group-hover:scale-105 transition-all duration-300' src={bannerimg} alt="Banner 4" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                <span className="text-[#FF6500] rounded-xl text-[20px] font-bold py-5 px-5 bg-[rgba(250,250,250,0.19)]">Shop Now</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerPart;
