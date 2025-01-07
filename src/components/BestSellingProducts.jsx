import React from 'react';
import Container from './Container';
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import BestSellingProductsimg from "../assets/BestSellingProductsimg.png";
import BestSellingProducts1 from "../assets/BestSellingProducts1.png";
import BestSellingProducts2 from "../assets/BestSellingProducts2.png";
import BestSellingProducts3 from "../assets/BestSellingProducts3.png";
import BestSellingProducts4 from "../assets/BestSellingProducts4.png";

const BestSellingProducts = () => {
    return (
        <section className='py-16'>
            <Container>
                <div className="text-[18px] text-[#DB4444] font-poppins font-semibold">
                    <h2>This Month</h2>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <div className="w-full sm:w-[60%] md:w-[30%]">
                        <h2 className="text-[24px] sm:text-[36px] text-[#000000] font-inter font-bold">Best Selling Products</h2>
                    </div>
                    <div className="w-full sm:w-[30%] md:w-[20%] text-center sm:text-right">
                        <button className='h-[56px] w-full sm:w-[160px] text-[#FFFF] font-poppins font-semibold bg-[#DB4444] text-[18px] rounded-lg hover:bg-[#B53737] transition-all'>
                            View All
                        </button>
                    </div>
                </div>

                <div className="flex justify-between py-8 flex-wrap gap-4">
                    <div className="w-full sm:w-[24%]">
                        <img className='h-[450px] w-full object-cover rounded-lg ' src={BestSellingProductsimg} alt="Best Selling Product 1" />
                    </div>

                    <div className="w-full sm:w-[24%]">
                        <img className='h-[450px] w-full object-cover rounded-lg ' src={BestSellingProducts1} alt="Best Selling Product 2" />
                    </div>

                    <div className="w-full sm:w-[24%]">
                        <img className='h-[450px] w-full object-cover rounded-lg ' src={BestSellingProducts2} alt="Best Selling Product 3" />
                    </div>

                    <div className="w-full sm:w-[24%]">
                        <img className='h-[450px] w-full object-cover rounded-lg ' src={BestSellingProducts3} alt="Best Selling Product 4" />
                    </div>
                </div>

                <div className="w-full py-10">
                    <img className='w-full object-cover rounded-lg' src={BestSellingProducts4} alt="Best Selling Product Banner" />
                </div>
            </Container>
        </section>
    );
}

export default BestSellingProducts;
