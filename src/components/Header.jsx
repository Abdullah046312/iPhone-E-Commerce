import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <section className='bg-[#262626] py-5'>
        <Container>
            <div className="flex justify-between mx-auto text-center text-[#FFFF]">
                <div className=" flex gap-5 text-center mx-auto ">
                <h2 className='text-[16px] text-[#FAFAFA] font-poppins font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
                <button className='text-[16px] text-[#FAFAFA] font-poppins font-bold underline'>ShopNow</button>
                </div>
                <div className="">
                <label className='text-[16px] text-[#FAFAFA] font-inter font-medium' htmlFor="English">English</label>
                </div>
            </div>
         
        </Container>
    </section>
  )
}

export default Header
