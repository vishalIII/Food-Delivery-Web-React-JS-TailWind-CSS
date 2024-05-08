import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
       {/* Card */}
       <div className='rounded-xl relative'>
           {/* Overlays */}
           <div className='absolute w-full h-full bg-black/50 rounded-xl  text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Hotel Sandeep</p>
                <p className='px-2'>Maharashtrian, North India</p>
                <button className="text-black bg-white p-2 inline-block rounded-xl mt-7 ml-2">Order Now</button>
           </div>
           <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://b.zmtcdn.com/data/pictures/8/19655918/23f193d80f3e313c2bc7986f2ebe83d8_o2_featured_v2.jpg?output-format=webp" alt="" />
       </div>
        
       <div className='rounded-xl relative'>
           {/* Overlays */}
           <div className='absolute w-full h-full bg-black/50 rounded-xl  text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Shahji's Parantha House</p>
                <p className='px-2'>North Indian</p>
                <button className="text-black bg-white p-2 inline-block rounded-xl mt-7 ml-2">Order Now</button>
           </div>
           <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://b.zmtcdn.com/data/pictures/chains/8/12148/8ae28baddb7541270793a5fbd47cb248_o2_featured_v2.jpg" alt="" />
       </div>
       
       <div className='rounded-xl relative'>
           {/* Overlays */}
           <div className='absolute w-full h-full bg-black/50 rounded-xl  text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Garden Vada Pav Centre</p>
                <p className='px-2'>Street Food, Beverages</p>
                <button className="text-black bg-white p-2 inline-block rounded-xl mt-7 ml-2">Order Now</button>
           </div>
           <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://b.zmtcdn.com/data/pictures/chains/0/13280/0f7756cfcc8f71eca3020d33c8541b35_o2_featured_v2.jpg" alt="" />
       </div>
        
       
       
    </div>
  )
}

export default HeadlineCards
