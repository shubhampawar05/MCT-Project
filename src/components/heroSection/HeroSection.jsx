import { useEffect, useState } from 'react'
import img from './../../../public/c.jpg'
import img1 from './../../../public/a.jpg'
import img2 from './../../../public/b.jpg'

const HeroSection = () => {
    

    return (
        <div className='w-full h-80 flex justify-center items-center'>
           <img className=" h-44 lg:h-full object-conatin w-full " src={img} alt="" />
        </div>
    );
}

export default HeroSection;
