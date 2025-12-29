import express from "express"
import { addBooking, availableCars, changeBookingStatus, getOwnerBookings, getUserBookings } from "../controllers/bookingController.js"
import { protect } from "../middleWare/auth.js"

const bookingRouter = express.Router()

bookingRouter.post('/add-booking', protect, addBooking)
bookingRouter.get('/available-cars', protect, availableCars)
bookingRouter.get('/user-bookings', protect, getUserBookings)
bookingRouter.get('/owner-bookings', protect, getOwnerBookings)
bookingRouter.post('/change-status', protect, changeBookingStatus)

export default bookingRouter;