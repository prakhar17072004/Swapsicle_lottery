import React from 'react';
import Image from 'next/image';
import logo from "../assets/logo.png";
import lotto from "../assets/lotto.png";

const Header = () => {
    return (
        <div>
             {/* Header Section */}
             
          {/* Right part of header */}
          <div className=' flex  gap-2 '>
            
            <Image src={logo} alt="logo" className='mt-[29px] ml-[460px]  h-[48px]'/>
            <Image src={lotto} alt="lotto" className='h-[20px] mt-[48px] ' />
            
          </div>


        </div>
    );
}

export default Header;
