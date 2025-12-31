import { Route,Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/NavBar"
import CarDetails from "./pages/CarDetails"
import Cars from "./pages/Cars"
import MyBookings from "./pages/MyBookings"
import Footer  from "./components/Footer"
import Layout from "./pages/owner/Layout"
import AddCar from "./pages/owner/AddCar"
import ManageBookings from "./pages/owner/ManageBookings"
import ManageCars from "./pages/owner/ManageCars"
import Dashboard from "./pages/owner/Dashboard"
import Login from "./components/Login"
import { useState } from "react"
import { Toaster } from "react-hot-toast"
import { useAppContext } from "../context/AppContext"

const App = () => {
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  const {showLogin,setShowLogin} = useAppContext()
  return(
    <>
      <Toaster/>
      {showLogin && <Login />}
      {!isOwnerPath && <Navbar/>}
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/car-details/:id" element={<CarDetails/>}/>
          <Route path="/cars" element={<Cars/>}/>
          <Route path="/my-bookings" element={<MyBookings/>}/>
          <Route path="/owner" element={<Layout />}>
              <Route index element = {< Dashboard/>}/>
              <Route path = "add-car" element={<AddCar/>}/>
              <Route path = "manage-bookings" element={<ManageBookings/>}/>
              <Route path = "manage-cars" element={<ManageCars/>}/>
          </Route>
      </Routes>
      {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App
