import React from 'react';
import Container from './Container';
import newarrivalimg from "../assets/newarrivalimg.png";
import newarrivalimg1 from "../assets/newarrivalimg1.png";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";

const NewArrival = () => {
  return (
    <section className='py-16'>
        <Container>
            <div className="text-[18px] text-[#DB4444] font-poppins font-semibold">
                <h2>Featured</h2>
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="w-full sm:w-[60%] md:w-[30%]">
                    <h2 className="text-[24px] sm:text-[36px] text-[#000000] font-inter font-bold">New Arrival</h2>
                </div>
                <div className="w-full sm:w-[30%] md:w-[20%] text-center sm:text-right">
                    <button className='h-[56px] w-full sm:w-[160px] text-[#FFFF] font-poppins font-semibold bg-[#DB4444] text-[18px] rounded-lg hover:bg-[#B53737] transition-all'>
                        View All
                    </button>
                </div>
            </div>

            <div className="flex justify-between py-10 flex-wrap gap-4">
                <div className="w-full sm:w-[48%]">
                    <img className='w-full object-cover rounded-lg hover:scale-105 transition-all' src={newarrivalimg} alt="New Arrival 1" />
                </div>
                <div className="w-full sm:w-[48%]">
                    <img className='w-full object-cover rounded-lg hover:scale-105 transition-all' src={newarrivalimg1} alt="New Arrival 2" />
                </div>
            </div>

            <div className="flex justify-between py-10 flex-wrap gap-6">
                <div className="w-full sm:w-[32%] text-center flex flex-col items-center">
                    <img src={Services1} alt="Free Delivery" className="mb-4 w-20 h-20 object-cover" />
                    <h2 className="text-[20px] text-[#000000] font-poppins font-semibold">FREE AND FAST DELIVERY</h2>
                    <p className="text-[14px] text-[#000000] font-poppins font-normal">Free delivery for all orders over $140</p>
                </div>
                <div className="w-full sm:w-[32%] text-center flex flex-col items-center">
                    <img src={Services2} alt="Customer Service" className="mb-4 w-20 h-20 object-cover" />
                    <h2 className="text-[20px] text-[#000000] font-poppins font-semibold">24/7 CUSTOMER SERVICE</h2>
                    <p className="text-[14px] text-[#000000] font-poppins font-normal">Friendly 24/7 customer support</p>
                </div>
                <div className="w-full sm:w-[32%] text-center flex flex-col items-center">
                    <img src={Services3} alt="Money Back Guarantee" className="mb-4 w-20 h-20 object-cover" />
                    <h2 className="text-[20px] text-[#000000] font-poppins font-semibold">MONEY BACK GUARANTEE</h2>
                    <p className="text-[14px] text-[#000000] font-poppins font-normal">We return money within 30 days</p>
                </div>
            </div>

        </Container>
    </section>
  );
}

export default NewArrival;
