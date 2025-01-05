import React from 'react';
import Container from './Container';

const Header = () => {
  return (
    <section className='bg-[#262626] py-5'>
      <Container>
        <div className="flex justify-between items-center mx-auto text-center text-[#FFFF] flex-wrap sm:flex-nowrap">
          {/* Summer Sale and ShopNow Button */}
          <div className="flex gap-5 text-center mx-auto w-full sm:w-auto">
            <h2 className='text-[16px] sm:text-[18px] text-[#FAFAFA] font-poppins font-normal'>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h2>
            <button className='text-[16px] sm:text-[18px] text-[#FAFAFA] font-poppins font-bold underline hidden lg:block'>
              Shop Now
            </button>
          </div>

          {/* Language Selector */}
          <div className="mt-3 sm:mt-0 ">
            <label className='text-[16px] sm:text-[18px] text-[#FAFAFA] font-inter font-medium' htmlFor="language-selector">
              Language:
            </label>
            <select
              id="language-selector"
              className='bg-[#262626] text-[#FAFAFA] text-[14px] sm:text-[16px] font-poppins font-normal ml-2 border-none outline-none'
            >
              <option value="english">English</option>
              <option value="bengali">Bengali</option>
              <option value="spanish">Spanish</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
