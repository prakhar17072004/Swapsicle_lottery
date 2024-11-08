import React from 'react';
import Image from 'next/image';
import hero_sec_1 from "../assets/part_1.png";
import hero_sec_2 from "../assets/part_2.png";
import hero_sec_3 from "../assets/part_3.png";
import hero_sec_4 from "../assets/part_4.png";
import prize from "../assets/Prize pool.png";
import logo1 from "../assets/logo_1.png";
import vector from "../assets/Vector.png";
import time from "../assets/timeing_img.png";
import token1 from "../assets/450 ICE.png";
import Deadline from "../assets/Deadline.png";


const Hero = () => {
    return (
        <div className=''>
            <div className='flex'>
                {/* hero_section_1 */}
                <div className='relative'>
                <Image src={hero_sec_1} className='relative   mt-[200px] ml-[400px]'/>
                <Image src={prize} className=' absolute -mt-[230px]  ml-[430px] '/>
                <Image src={logo1} className='  absolute   -mt-[160px] ml-[430px]'/>
                <Image src={vector} className=' absolute  -mt-[230px] ml-[640px]'/>
                <Image src={time} className=' absolute  -mt-[56px] ml-[430px] '/>
                <Image src={Deadline} className=' absolute -mt-[80px]  ml-[430px]'/>
                <Image src={token1} className=' absolute  -mt-[160px] ml-[464px]'/>

                </div>
                {/* hero_section_2 */}

                  <div>
                  <Image src={hero_sec_2} className='mt-[200px] ml-2'/>
                  </div>
            </div>
            <div className='flex mt-4 ml-[400px]'>

                {/* hero_section_3 */}
               <div>
               <Image src={hero_sec_3} className=''/>
               </div>

                {/* hero_section_4 */}
               <div>
               <Image src={hero_sec_4} className='ml-2'/>
               </div>
            </div>
        </div>
    );
}

export default Hero;
