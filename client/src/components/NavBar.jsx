import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo2 from "../assets/logo2.png"
import { MenuIcon, XIcon } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Navbar = () => {
    const {setShowLogin,user,logout,isOwner,axios,setIsOwner} = useAppContext()
    const [isOpen, setIsOpen] = useState(false)
    const navigate= useNavigate()

    const changeRole = async() => {
        try{
            const {data}=await(axios.post('/api/owner/change-role'))
            if(data.success){
                toast.success(data.message)
                setIsOwner(true)
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
        }
    }
    
    return <>
        <div className="relative top-0 left-0 z-50 w-full flex bg-light justify-between items-center px-6 md:px-16 lg:px-36 py-3 md:border md:border-gray-400 ">
            <Link to='/' className='max-md:flex-1'>
                <img src={logo2} alt="" className='w-20 h-auto'/>
            </Link> 
            <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 
                flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen 
                md:rounded-full backdrop-blur bg-black/70 max-md:text-white md:bg-white/10 md:border border-gray-300/20 
                overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>

                <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={()=> setIsOpen(!isOpen)}/>
                <Link onClick={()=> setIsOpen(!isOpen)} to="/"> Home </Link>
                <Link onClick={()=> setIsOpen(!isOpen)} to="/my-bookings"> My Bookings </Link>
                <Link onClick={()=> setIsOpen(!isOpen)} to="/cars"> Cars </Link>
                <button className='bg-primary rounded-lg px-8 py-2 text-white cursor-pointer' onClick= {() => {user ? logout() : setShowLogin(true)} } > {user ? "Logout" : "Login"} </button>
                <button className="cursor-pointer" onClick={() => {isOwner ? navigate('/owner'): changeRole() }}>{isOwner ? "DashBoard" : "List Cars"}</button>
            </div>

            <MenuIcon className={`max-md:mr-2 md:hidden cursor-pointer ${isOpen ? 'max-md:hidden' : 'max-md:w-8'}`} onClick={()=> setIsOpen(!isOpen)}></MenuIcon>
        </div>
    </>
}

export default Navbar

