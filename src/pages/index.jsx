import React from 'react';
import Image from 'next/image';
import Bg from "../assets/bg_img.png"
import "../app/globals.css"
import Header from "../components/header"


const Index = () => {
    return (
        <div className='relative ' >
            {/* background_img */}
            
            <div className='absolute'><Image src={Bg} alt="bg_image"/></div>
           <div className='absolute'>  <Header/></div>
               
            



        </div>
    );
}

export default Index;
