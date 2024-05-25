import React, { useState } from 'react'
import { IoColorPalette } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Hero from './Hero';

const Navbar = () => {
    
    const[ctrlNav, setCtrlNav] = useState(false);

    const clicked = ()=> {
        setCtrlNav(!ctrlNav)
    };

    const[color, setColor] = useState("white")

  return (
    <>
        <div className='flex items-center w-full py-4 mx-auto'>

            <div className='flex px-10 mx-auto'> 
                <IoColorPalette size={35}/> 
                <h1 className='p-2 text-xl font-bold md:text-2xl'>Mr. C<span className='text-red-700'>o</span>l<span className='text-green-700'>o</span>r<span className='text-blue-700'>o</span></h1>
            </div> 

            <ul className='hidden mx-auto text-[#696969] md:flex'>
                <li onClick={()=>{setColor("red")}} className='px-7 hover:scale-105 hover:font-bold hover:text-red-600'>Red</li>
                <li onClick={()=>{setColor("green")}} className='px-7 hover:scale-105 hover:font-bold hover:text-green-600'>Green</li>
                <li onClick={()=>{setColor("blue")}} className='px-7 hover:scale-105 hover:font-bold hover:text-blue-600'>Blue</li>
                <li onClick={()=>{setColor("yellow")}} className='px-7 hover:scale-105 hover:font-bold hover:text-yellow-600'>Yellow</li>
                <li onClick={()=>{setColor("purple")}} className='px-7 hover:scale-105 hover:font-bold hover:text-purple-600'>Purple</li>
                <li onClick={()=>{setColor("pink")}} className='px-7 hover:scale-105 hover:font-bold hover:text-pink-600'>pink</li>
            </ul>

            <div className='mx-auto md:hidden'>
                {ctrlNav ? <IoClose size={30} onClick={clicked} /> : <AiOutlineMenu size={30} onClick={clicked} /> }
                
            </div>

            <div  className={ctrlNav ? 'fixed bg-[#404040] top-0 h-screen w-[50%] md:hidden flex-col' : 'fixed bg-gray-500 top-0 h-screen w-[40%] left-[-100%] md:hidden flex-col' } >
                
                <ul className='flex text-[#c7c7c7] flex-col p-6 py-12 text-center'>
                    <li onClick={()=>{setColor("red")}} className='py-4 border-b hover:scale-105 hover:font-bold hover:text-red-600'>Red</li>
                    <li onClick={()=>{setColor("green")}} className='py-4 border-b hover:scale-105 hover:font-bold hover:text-green-600'>Green</li>
                    <li onClick={()=>{setColor("blue")}} className='py-4 border-b hover:scale-105 hover:font-bold hover:text-blue-600'>Blue</li>
                    <li onClick={()=>{setColor("yellow")}} className='py-4 border-b hover:scale-105 hover:font-bold hover:text-yellow-600'>Yellow</li>
                    <li onClick={()=>{setColor("purple")}} className='py-4 border-b hover:scale-105 hover:font-bold hover:text-purple-600'>Purple</li>
                    <li onClick={()=>{setColor("pink")}} className='py-4 border-b hover:scale-105 hover:font-bold hover:text-pink-600'>Pink</li>
                </ul>
            </div>
        </div>

        <Hero z={color}/>
        </>
  )
}

export default Navbar
