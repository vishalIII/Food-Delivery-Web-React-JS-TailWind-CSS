import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
         <div className='max-h-[500px] relative'>
             {/* Overlay */}
             <div className='absolute w-full h-full text-white max-h-[500px] bg-black/40 flex flex-col justify-center'>
                  <h1 className='px-4 texl -4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>The</span> Best</h1>
                  <h1 className='px-4 texl -4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className="text-orange-500">Foods</span> Delivered</h1>
             </div>
             <img className='w-full max-h-[500px] object-cover' src="https://b.zmtcdn.com/data/pictures/chains/3/19527913/e7d1bc01c28e8ec8045528f9a9ca796d_featured_v2.jpg" alt="" />
         </div>
    </div>
  )
}

export default Hero
