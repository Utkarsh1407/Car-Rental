import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/NavBar"
import CarDetails from "./pages/CarDetails"
import Cars from "./pages/Cars"
import MyBookings from "./pages/MyBookings"
import Footer  from "./components/Footer"

const App = () => {
  return(
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/car-details/:id" element={<CarDetails/>}/>
          <Route path="/cars" element={<Cars/>}/>
          <Route path="/my-bookings" element={<MyBookings/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
