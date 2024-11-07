import React from 'react';
import Image from 'next/image';
import logo from "../assets/bg_img.png"
import "../app/globals.css"


const Index = () => {
    return (
        <div className='  bg-white ' >
            {/* background_img */}
            <div>_
                <Image
                    src={logo}
                />
            </div>



        </div>
    );
}

export default Index;
