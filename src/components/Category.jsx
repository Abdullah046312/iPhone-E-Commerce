import React from 'react';
import Container from './Container';
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import Categoryimg from "../assets/Categoryimg.png";
import Categoryimg1 from "../assets/Categoryimg1.png";
import Categoryimg2 from "../assets/Categoryimg2.png";
import Categoryimg3 from "../assets/Categoryimg3.png";
import Categoryimg4 from "../assets/Categoryimg4.png";
import Categoryimg5 from "../assets/Categoryimg5.png";

const Category = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="text-[18px] text-[#DB4444] font-poppins font-semibold">
          <h2>Categories</h2>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="w-[60%] md:w-[30%]">
            <h2 className="text-[24px] sm:text-[36px] text-[#000000] font-inter font-bold">Browse By Category</h2>
          </div>
          <div className="w-[20%] flex items-center justify-center sm:justify-end gap-5 text-[24px] sm:text-[30px] text-[#FF6500] font-bold">
            <h4><SlArrowLeftCircle className="cursor-pointer hover:text-[#DB4444] transition-colors" /></h4>
            <h4><SlArrowRightCircle className="cursor-pointer hover:text-[#DB4444] transition-colors" /></h4>
          </div>
        </div>

        <div className="flex justify-between py-10 flex-wrap gap-4">
          {[Categoryimg, Categoryimg1, Categoryimg2, Categoryimg3, Categoryimg4, Categoryimg5].map((img, index) => (
            <div
              key={index}
              className="w-[30%] sm:w-[15%] bg-transparent hover:bg-[#DB4444] transition duration-300 rounded-lg flex justify-center items-center p-4"
            >
              <img src={img} alt={`Category ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
