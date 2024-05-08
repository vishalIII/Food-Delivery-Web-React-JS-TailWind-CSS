import React from 'react'
import { useState } from 'react'
import { data } from '../data/Data.js'

const Food = () => {
    const [food,setfoods]=useState(data);

    const filterType = (category) => {
        setfoods(
          data.filter((element) => {
            return element.category === category;
          })
        );
      };

    // Filter by price
    const filterPrice = (price)=>{
        setfoods(
            data.filter((element)=>{
                return element.price===price
            })
        )
    }

    return (
        <>
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col '>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex  flex-wrap'>
                        <button onClick={()=>setfoods(data)} 
                        className="text-white bg-orange-600 p-2 inline-block rounded-xl mt-7 ml-2">All</button>
                        <button onClick={()=>filterType('burger')}
                         className="text-white bg-orange-600 p-2 inline-block rounded-xl mt-7 ml-2">burger</button>
                        <button onClick={()=>filterType('pizza')} 
                        className="text-white bg-orange-600 p-2 inline-block rounded-xl mt-7 ml-2">pizza</button>
                        <button onClick={()=>filterType('salad')} 
                        className="text-white bg-orange-600 p-2 inline-block rounded-xl mt-7 ml-2">salad</button>
                  <button onClick={()=>filterType('chicken')} 
                        className="text-white bg-orange-600 p-2 inline-block rounded-xl mt-7 ml-2">chicken</button>
                 
                        {/* className="text-black bg-white p-2 inline-block rounded-xl mt-7 ml-2" */}
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p font-bold text-gray-700>Filter Price</p>
                    <div className='flex  flex-wrap max-w-[390px] w-full'>
                    <button onClick={()=>filterPrice('$')}
                     className="text-white bg-orange-600 p-2 
                 inline-block rounded-xl mt-7 ml-2">$</button>
                        <button onClick={()=>filterPrice('$$')}
                        className="text-white bg-orange-600 p-2 
                 inline-block rounded-xl mt-7 ml-2">$$</button>
                        <button onClick={()=>filterPrice('$$$')}
                         className="text-white bg-orange-600 p-2 
                 inline-block rounded-xl mt-7 ml-2">$$$</button>
                        <button onClick={()=>filterPrice('$$$$')}
                         className="text-white bg-orange-600 p-2 
                 inline-block rounded-xl mt-7 ml-2">$$$$</button>
                        {/* className="text-black bg-white p-2 inline-block rounded-xl mt-7 ml-2" */}
                    </div>
                </div>
            </div>

            {/* Display Foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                 {food.map((element, index) => (
                     <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
                            <img src={element.image} alt={element.name}
                            className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                             <p className='font-bold'>{element.name}</p>
                             <p >
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{element.price}</span>
                             </p>
                        </div>
                     </div>
                  ))}
            </div> 
        </div>
        </>
    )
}

export default Food
