import React from 'react'
import logo2 from "../../assets/logo2.png"
import { Link } from 'react-router-dom'
import { useAppContext } from '../../../context/AppContext'

const NavbarOwner = () => {
    const {user} = useAppContext();
  return (
    <div className='flex justify-between px-6 md:px-10 py-4 border border-borderColour'>
        <Link to='/'>
            <img src={logo2} alt="" className='h-7'/>
        </Link>
      
      <p className='text-gray-500'>Welcome, {user ? user.name : "Owner"} </p>
    </div>
  )
}

export default NavbarOwner
