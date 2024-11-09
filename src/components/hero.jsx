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
import round from "../assets/Round.png";
import num from "../assets/12.png";
import rectangle1 from "../assets/Rectangle1.png";
import rectangle2 from "../assets/Rectangle2.png";
import Tickets from "../assets/My tickets.png";
import num2 from "../assets/1.png"
import Ticket_price from "../assets/Ticket price.png";
import star from "../assets/star.png";
import token2 from "../assets/4 ICE.png";
import total_sold from "../assets/Total sold.png";
import ticket_count from "../assets/180 tickets.png";
import rectangle3 from "../assets/Rectangle3.png";
import buy from "../assets/buy_button.png";


const Hero = () => {
    return (
        <div className=''>
             {/* Top section of heor page */}
            <div className='flex mt-[170px]'>
               {/* left side */}
               <Image src={round} alt="" className=' ml-[400px]'/>
                <Image src={rectangle1} alt="" className='ml-2 relative'/>
                <Image src={num} alt="" className='absolute ml-[514px] mt-2'/>
               
                {/* right side */}
                <Image src={Tickets} alt="" className='ml-[556px] '/>
                <Image src={rectangle2} alt="" className='ml-2 relative'/>
                <Image src={num2} alt="" className='absolute ml-[1200px] mt-2'/>
                
                
            </div>

            <div className='flex mt-[20px]'>
                {/* hero_section_1 */}
                <div className='relative '>
                <Image src={hero_sec_1} className='relative    ml-[400px] '/>
                <Image src={prize} className=' absolute -mt-[230px]  ml-[430px] '/>
                <Image src={logo1} className='  absolute   -mt-[160px] ml-[430px]'/>
                <Image src={vector} className=' absolute  -mt-[230px] ml-[640px]'/>
                <Image src={time} className=' absolute  -mt-[56px] ml-[430px] '/>
                <Image src={Deadline} className=' absolute -mt-[80px]  ml-[430px]'/>
                <Image src={token1} className=' absolute  -mt-[160px] ml-[464px]'/>

                </div>
                {/* hero_section_2 */}

                  <div className='relative'>
                  <Image src={hero_sec_2} className=' ml-2'/>
                  <Image src={Ticket_price} className='absolute -mt-[230px] ml-10 '/>
                  <Image src={star} className=' absolute  -mt-[230px]  ml-[460px]'/>
                  <Image src={logo1} className='absolute -mt-[160px]   ml-10'/>
                  <Image src={token2} className=' absolute  -mt-[160px] ml-20'/>

                  <Image src={total_sold} className='absolute ml-10  -mt-[80px]'/>
                  <Image src={ticket_count} className='absolute -mt-[56px] ml-10'/>
                  <Image src={rectangle3} className='absolute -mt-[88px]  ml-[310px]'/>
                  <Image src={buy} className='absolute -mt-[84px]  ml-[392px]'/>
                  <span className='absolute -mt-[72px] ml-[328px] font-bold text-white text-[16px] h-[24px]'>-</span>
                  <span className='absolute -mt-[72px]  ml-[344px] font-bold text-white text-[16px] h-[24px]'>1</span>
                  <span className='absolute -mt-[72px] ml-[360px] font-bold text-white text-[16px] h-[24px]'>+</span>
                  


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
