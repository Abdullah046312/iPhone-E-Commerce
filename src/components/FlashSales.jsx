import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cardimg from "../assets/cardimg.png";
import cardimg1 from "../assets/cardimg1.png";
import cardimg2 from "../assets/cardimg2.png";
import cardimg3 from "../assets/cardimg3.png"; 
import cardimg4 from "../assets/cardimg4.png"; 

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  const sliderRef = useRef(null); // Reference to the slider

  useEffect(() => {
    const targetTime = new Date().setHours(24 * 3, 0, 0, 0);

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (timeDifference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
        }
      }
    ]
  };

  // Function to navigate to previous slide
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to navigate to next slide
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="py-16">
      <Container>
        <div className="text-[18px] text-[#DB4444] font-poppins font-semibold">
          <h2>Today’s</h2>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-6">
  <div className="w-full sm:w-[160%] md:w-[50%]">
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-5 items-center mb-6">
        <h1 className="text-[20px] sm:text-[36px] text-[#000000] font-inter font-bold">Flash Sales</h1>
        <div className="text-[20px] sm:text-[24px] text-[#DB4444] font-inter font-bold">
          Time Left:
          <span className="text-red-600 ml-2 text-[24px] sm:text-[30px]">
            {String(timeLeft.days).padStart(2, '0')} Days {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-[30%] md:w-[20%] flex justify-center sm:justify-end items-center gap-5 text-[24px] sm:text-[30px] text-[#FF6500] cursor-pointer font-bold">
    <h4 onClick={handlePrev}><SlArrowLeftCircle /></h4>
    <h4 onClick={handleNext}><SlArrowRightCircle /></h4>
  </div>
</div>


        <div className="mt-8 w-full pl-10 lg:pl-0">
          <Slider {...sliderSettings} ref={sliderRef}>
            <div>
              <img src={cardimg} alt="Card 1" />
            </div>
            <div>
              <img src={cardimg1} alt="Card 2" />
            </div>
            <div>
              <img src={cardimg2} alt="Card 3" />
            </div>
            <div>
              <img src={cardimg3} alt="Card 4" />
            </div>
            <div>
              <img src={cardimg4} alt="Card 5" />
            </div>
          </Slider>
        </div>

        <div className="text-center mt-20">
          <button className='h-[56px] w-[260px] bg-[#DB4444] text-[#FFFF] font-poppins font-semibold text-[18px] rounded-lg hover:bg-[#FF6500] transition-colors'>
            View All Products
          </button>
          </div>
      </Container>
    </section>
  );
};

export default FlashSales;
