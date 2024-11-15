import React from 'react';
import Image from 'next/image';
import logo from "../assets/logo.png";
import lotto from "../assets/lotto.png";
import right_part from "../assets/right_part.png"

const Header = () => {
    return (
        <div className='flex'>
             {/* Header Section */}
             
          {/* Left part of header */}
          <div className=' flex  gap-2 '>
            
            <Image src={logo} alt="logo" className='mt-[29px] ml-[340px]  h-[48px]'/>
            <Image src={lotto} alt="lotto" className='h-[20px] mt-[48px] ' />
            
          </div>

        {/* Right part */}
        {/* <div className='mt-[29px] ml-[250px] '>
          <Image src={right_part} alt='right_part' />
        </div> */}


        </div>
    );
}

export default Header;
