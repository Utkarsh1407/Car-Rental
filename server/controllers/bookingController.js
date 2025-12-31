import Booking from "../models/booking.js"
import Car from "../models/car.js";


const checkAvailability = async(car, pickupDate, returnDate) => {
    const bookings = await Booking.find({
        car,
        pickupDate: {$lte: returnDate},
        returnDate: {$gte : pickupDate}
    })
    return bookings.length === 0;
}

export const availableCars = async(req,res) => {
    try{
        const {location, pickupDate, returnDate} = req.body;

        const cars = await Car.find({location, isAvailable:true});

        const availableCarsPromise = cars.map(async(car) => {
            const isAvailable =  await checkAvailability(car._id, pickupDate, returnDate);
            return {...car._doc, isAvailable:isAvailable}
        })

        let availableCars = await Promise.all(availableCarsPromise);
        availableCars = availableCars.filter(car => car.isAvailable === true)

        res.json({success:true, availableCars})
    }catch(error){
        res.json({success:false, message:error.message})
    }
}

export const addBooking = async(req,res) => {
    try{
        const {_id} = req.user;
        const {car, pickupDate, returnDate} = req.body;

        const isAvailable = checkAvailability(car, pickupDate, returnDate)
        if(!isAvailable){
            return res.json({success:false, message:"Car not available"})
        }

        const carData = await Car.findById(car);
        const picked = new Date(pickupDate);
        const returned = new Date(returnDate);

        const days = Math.ceil((returned-picked)/(1000*60*60*24));
        const price = days*(carData.pricePerDay)

        await Booking.create({
            user:_id,
            car:car,
            owner:carData.owner,
            pickupDate, returnDate, 
            price
        })
        res.json({success:true, message:"Booking created"})
    }catch(error){
        res.json({success:false, message:error.message})
    }
    
}

export const getUserBookings = async(req,res) => {
    try{
        const {_id} = req.user
        const bookings = await Booking.find({user: _id}).populate("car").sort({createdAt: -1})
        res.json({success:true, bookings})
    }catch(error){
        res.json({success:false, message:error.message})
    }
    
}

export const getOwnerBookings = async(req,res) => {
    try{
        const {_id} = req.user
        if(req.user.role != 'owner'){
            return res.json({success:false, message:"Unauthorized"})
        }
        const bookings = await Booking.find({owner: _id}).populate({
            path: "user",
            select: "-password"
        }).populate("car").sort({createdAt: -1})

        res.json({success:true, bookings})
    }catch(error){
        res.json({success:false, message:error.message})
    }
}

export const changeBookingStatus = async(req,res) => {
    try{
        const {_id} = req.user;
        const {bookingId, status} = req.body;

        const booking = await Booking.findById(bookingId)

        if(booking.owner._id.toString() != _id.toString()){
            return res.json({success:false, message:"Unauthorized"})
        }

        booking.status = status
        await booking.save()

        res.json({success:true, message:"status updated"})
        
    }catch(error){
        res.json({success:false, message:error.message})
    }
}