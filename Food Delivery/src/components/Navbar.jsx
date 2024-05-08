import React, { useState } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill, BsWallet } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { MdFavorite, MdHelp, MdLabel, MdTag, MdWallet } from 'react-icons/md';
import { TbTruckDelivery, TbWallet } from 'react-icons/tb';

const Navbar = () => {

    const [nav, setnav] = useState(false);

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* NavBar */}
            <div className='flex items-center'>
                <div onClick={() => setnav(true)} className='cursor-pointer text-orange-500'>
                    <AiOutlineMenu size={30}  />
                </div>
                <h1 className='text-2xl sm:text-3xl lgitext-4xl px-2 text-orange-500'>
                    Best <span className='font-bold'>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-orange-500 text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>

            {/* search Input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] text-orange-500'>
                <AiOutlineSearch size={20} />
                <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search foods' />
            </div>

            {/* Cart Button*/}
            <button className='bg-orange-500 text-white hidden md:flex items-center py-2 rounded-full pr-3 pl-3'>
                <BsFillCartFill size={20} className='mr-2' />Cart
            </button>


            {/* Mobile Menu */}
            {/* overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'> </div> : ''}
            

            {/* side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer text-orange-500' onClick={()=>setnav(false)}/>
                <h2 className='text-2xl p-4 text-orange-500'>
                    Best <span className='font-bold'>Eats</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-orange-500'>
                        <li className='text-xl py-4 flex '><TbTruckDelivery size={25} className='mr-4' />Orders</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' />Favorites</li>
                        <li className='text-xl py-4 flex'><MdWallet size={25} className='mr-4' />Wallet</li>
                        <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' />Help</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' />Promotions</li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' />Best One</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' />Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
