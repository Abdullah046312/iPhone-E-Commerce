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
  return (
    <section className="">
      <Container>
        <div className="flex justify-between">
          {/* Left sidebar */}
          <div className="w-[20%] border-r-2 border-[rgba(0,0,0,0.22)] py-10">
            <div className="flex items-center gap-3">
              <h4 className='text-[16px] text-[#000000] font-inter font-normal'>Woman’s Fashion</h4>
              <h4><IoIosArrowForward /></h4>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <h4 className='text-[16px] text-[#000000] font-inter font-normal'>Men’s Fashion</h4>
              <h4><IoIosArrowForward /></h4>
            </div>
            <h4 className='text-[16px] text-[#000000] font-inter font-normal mt-3'>Electronics</h4>
            <h4 className='text-[16px] text-[#000000] font-inter font-normal mt-3'>Home & Lifestyle</h4>
            <h4 className='text-[16px] text-[#000000] font-inter font-normal mt-3'>Medicine</h4>
            <h4 className='text-[16px] text-[#000000] font-inter font-normal mt-3'>Sports & Outdoor</h4>
            <h4 className='text-[16px] text-[#000000] font-inter font-normal mt-3'>Baby’s & Toys</h4>
            <h4 className='text-[16px] text-[#000000] font-inter font-normal mt-3'>Groceries & Pets</h4>
            <h4 className='text-[16px] text-[#000000] font-inter font-normal mt-3'>Health & Beauty</h4>
          </div>

          {/* Right side with slider */}
          <div className="w-[70%] py-10">
            {/* React Slick Slider */}
            <Slider {...settings}>
              <div>
                <img className='w-full' src={bannerimg} alt="Banner 1" />
              </div>
              <div>
                <img className='w-full' src={bannerimg} alt="Banner 2" />
              </div>
              <div>
                <img className='w-full' src={bannerimg} alt="Banner 3" />
              </div>
              <div>
                <img className='w-full' src={bannerimg} alt="Banner 3" />
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerPart;
