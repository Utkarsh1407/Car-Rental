import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL= import.meta.env.VITE_BASE_URL

export const AppContext = createContext()

export const AppProvider= ({children}) => {

    const navigate = useNavigate()
    
    const [showLogin,setShowLogin] = useState(false)
    const [token,setToken] = useState(null)
    const [isOwner,setIsOwner] = useState(false)
    const [pickupDate,setPickupDate] = useState("")
    const [returnDate,setReturnDate] = useState("")
    const [cars,setCars] = useState([])
    const [user,setUser] = useState(null)

    // Func to check whether a user is logged in 
    const fetchUser = async() => {
        try{
            const {data} = await axios.get('/api/user/data')
            if (data.success){
                setUser(data.user)
                setIsOwner(data.user.role==="owner")
            }else{
                navigate('/')
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    const fetchCars = async () => {
        try{
            const {data} = await axios.get('/api/user/cars')
            if(data.success){
                setCars(data.cars)
            }else{
                console.log("yaha error h")
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        setToken(null)
        setUser(null)
        setIsOwner(false)
        axios.defaults.headers.common["Authorization"] = ''
        toast.success("You have been logged out!!")
    }

    // UseEffect to retrieve the token from local storage 
    useEffect(() => {
        const token = localStorage.getItem("token")
        setToken(token)
        fetchCars()
    },[])

    // UseEffect to fetch user data when token is available 
    useEffect( () => {
        if (token){
            axios.defaults.headers.common["Authorization"] = `${token}`
            fetchUser()
        }
    },[token])

    const value ={navigate,axios,user,setUser,token,setToken,isOwner,setIsOwner,fetchUser,fetchCars,showLogin,setShowLogin,logout,cars,setCars,pickupDate,setPickupDate,returnDate,setReturnDate}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext= () => {
    return useContext(AppContext)
}

