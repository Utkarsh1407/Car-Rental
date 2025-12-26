import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import car1 from "../assets/car1.jpeg"
import { MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return <>
        <div className="relative top-0 left-0 z-50 w-full flex bg-light justify-between items-center px-6 md:px-16 lg:px-36 py-3 md:border md:border-gray-400 ">
            <Link to='/' className='max-md:flex-1'>
                <img src={car1} alt="" className='w-20 h-auto'/>
            </Link> 
            <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 
                flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen 
                md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 
                overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>

                <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={()=> setIsOpen(!isOpen)}/>
                <Link to="/"> Home </Link>
                <Link to="/my-bookings"> My Bookings </Link>
                <Link to="/cars"> Cars </Link>

            </div>

            <MenuIcon className={`max-md:mr-2 md:hidden cursor-pointer ${isOpen ? 'max-md:hidden' : 'max-md:w-8'}`} onClick={()=> setIsOpen(!isOpen)}></MenuIcon>
        </div>
    </>
}

export default Navbar

