import React from 'react'
import car1 from "../../assets/car1.jpeg"
import {dummyuserdata} from "../../assets/assets"
import { Link } from 'react-router-dom'

const NavbarOwner = () => {
    const user = dummyuserdata;
  return (
    <div className='flex justify-between px-6 md:px-10 py-4 border border-borderColour'>
        <Link to='/'>
            <img src={car1} alt="" className='h-7'/>
        </Link>
      
      <p className='text-gray-500'>Welcome, {user.name || "Owner"} </p>
    </div>
  )
}

export default NavbarOwner
