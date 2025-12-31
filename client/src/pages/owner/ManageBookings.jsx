import React, { useEffect, useState } from "react"
import { Eye, Trash } from "lucide-react"
import { dummyBookingData } from "@/assets/assets"
import { green } from "@mui/material/colors"
import { useAppContext } from "../../../context/AppContext"
import toast from 'react-hot-toast'

const ManageBookings = () => {
  const [bookings, setBookings] = useState([])

  const {axios, isOwner} = useAppContext();

  const getBooking = async()=>{
    try{
      const {data} = await axios.get('/api/booking/owner-bookings')
      if(data.success){
        setBookings(data.bookings)
      }else{
        toast.error(data.message)
      }
    }catch(error){
      toast.error(error.message)
    }
  }

  const changeStatus = async(bookingId, status)=>{
    try{
      const {data} = await axios.post('/api/booking/change-status', {bookingId,status})
    if(data.success){
      getBooking()
      toast.success("status changed")
    }else{
      toast.error(data.message)
    }
    }catch(error){
      toast.error(error.message)
    }
    
  }

  useEffect(() => {
    isOwner && getBooking()
  }, [isOwner])

  return (
    <div className="mx-6 md:mx-12 pt-6">
      <h1 className="text-4xl pb-2">Manage Bookings</h1>
      <p>View all bookings, update their status or remove them.</p>

      <div className="mt-6 border border-borderColour overflow-x-auto">
        <table className="min-w-175 shadow-lg border-collapse text-left text-sm">
          <thead>
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Date Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="border border-borderColour">
                
                {/* Car */}
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={booking.car.image}
                      alt=""
                      className="h-12 w-20 object-cover rounded"
                    />
                    <p className="font-medium">
                      {booking.car.brand} {booking.car.model}
                    </p>
                  </div>
                </td>

                {/* Date Range */}
                <td className="p-3 max-md:hidden">
                  {new Date(booking.pickupDate).toLocaleDateString()} -{" "}
                  {new Date(booking.returnDate).toLocaleDateString()}
                </td>

                {/* Total */}
                <td className="p-3 font-medium">₹{booking.price}</td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium
                      ${
                        booking.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : booking.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {booking.status}
                  </span>
                </td>

                {/* Action */}
                <td className="p-3">
                  {booking.status==="pending" ? (
                    <select value={booking.status} name="" id="" onChange={(e) => changeStatus(booking._id, e.target.value)} className="border border-borderColour rounded-md outline-none mt-1 px-1 py-1.5">
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  ) : (
                    <span className={`font-semibold rounded-full px-2 py-1 ${booking.status==="approved" ? "bg-green-100 text-green-500 " : "bg-red-100 text-red-500"}`} >{booking.status}</span>
                  )} 
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBookings
