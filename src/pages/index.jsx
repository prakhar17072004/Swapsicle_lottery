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
            
            <div className='absolute bg-image '>
                <Image src={Bg} alt="bg_image" className='h-full max-w-[1800px]     -mt-[102px]'/>
                </div>
           <div className='absolute  '>  <Header/></div>
           <div className='absolute'>  <Hero/></div>
               
            



        </div>
    );
}

export default Index;
