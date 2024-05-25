import React from 'react'

const Cards = () => {
  return (
    <div className='items-center justify-center flex flex-col md:flex-row mt-[-150px] gap-10 mb-10'>

    {/* Card one */}
      <div className='p-4 bg-white rounded-2xl w-72 hover:scale-105'>
        <img className='w-[100px] mx-auto'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILPD60l3sBoG1G55JDRekN4P5rtKKhU9zqA&s" alt="" />

        <h1 className='pt-4 font-bold text-center'>hello</h1>
        <p className='p-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam nihil 
            excepturi consequatur rem nemo totam ipsum? Facilis, soluta quibusdam.</p>

      </div>

    {/* Card two */}
      <div className='p-4 bg-white w-72 rounded-2xl hover:scale-105'>
        <img className='w-[100px] mx-auto'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILPD60l3sBoG1G55JDRekN4P5rtKKhU9zqA&s" alt="" />

        <h1 className='pt-4 font-bold text-center'>hello</h1>
        <p className='p-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam nihil 
            excepturi consequatur rem nemo totam ipsum? Facilis, soluta quibusdam.</p>

      </div>

    {/* Card three */}
      <div className='p-4 bg-white rounded-2xl w-72 hover:scale-105'>
        <img className='w-[100px] mx-auto'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILPD60l3sBoG1G55JDRekN4P5rtKKhU9zqA&s" alt="" />

        <h1 className='pt-4 font-bold text-center'>hello</h1>
        <p className='p-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam nihil 
            excepturi consequatur rem nemo totam ipsum? Facilis, soluta quibusdam.</p>

      </div>
    </div>
  )
}

export default Cards
