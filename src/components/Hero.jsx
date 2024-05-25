import React from 'react'
import { IoIosHeart } from "react-icons/io";

const Hero = (props) => {

  var x = props.z;

  const color = {
    color: x
  };

  return (

    <div className='flex flex-col w-full text-center h-[500px] bg-[#616161] text-white'>

      <h1 className='flex items-center justify-center p-5 mt-10 text-4xl lg:text-7xl md:text-6xl'>i 
        <span className='p-4 -mb-5 hover:scale-105'><IoIosHeart style={color} size={70}/></span> color</h1>

      <p className='px-6 md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facilis.</p>
      <button className='text-center bg-[#4a4a4a] w-[150px] mx-auto p-2 rounded-full my-6'>over to you</button>
    </div>
  )
}

export default Hero
