import React from 'react';
import Image from 'next/image';
import Bg from "../assets/bg_img.png"
import "../app/globals.css"
import Header from "../components/header";
import Hero from '../components/hero';


const Index = () => {
    return (
        <div className='relative ' >
            {/* background_img */}
            
            <div className='absolute'><Image src={Bg} alt="bg_image" className='lg:h-[1050px] lg:w-[1800px] md:h-[1050px]  md:w-[600px] sm:h-[1050px] sm:w-[300px] -mt-[102px]'/></div>
           <div className='absolute '>  <Header/></div>
           <div className='absolute'>  <Hero/></div>
               
            



        </div>
    );
}

export default Index;
