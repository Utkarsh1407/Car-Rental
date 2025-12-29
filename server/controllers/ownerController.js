import imagekit from "../configs/imagekit.js"
import User from "../models/user.js"
import fs from "fs"
import Car from "../models/car.js"
import Booking from "../models/booking.js"


export const changeRoleToOwner = async(req,res) => {
    try{
        const {_id} = req.user
        await User.findByIdAndUpdate(_id,{role:"owner"})
        res.json({success:true,message:"Now You can List cars."})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

export const addCar = async(req,res) => {
    try{
        const {_id} = req.user
        let car = JSON.parse(req.body.carData)
        const imageFile = req.file

        // upload images to imagekit

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName: imageFile.originalname,
            folder: "/cars"
        })

        var optimizedimageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {width : "1280"},
                {height : "auto"},
                {format : "webp"}
            ]
        })
        
        const image = optimizedimageUrl;
        await Car.create({...car, owner:_id, image:image})

        res.json({success:true, message:"Car is added"})

    }catch(error){
        res.json({success:false,message:error.message})
    }
}  


export const getOwnerCars= async(req,res) => {
    try{
        const id = req.user._id
        const cars = await Car.find({owner:id})
        res.json({success:true,cars})
    }catch(error){
        res.json({success:false,message:error.message})
    }
} 

export const toggleAvailability = async(req,res) => {
    try{
        const {_id} = req.user
        const {carId} = req.body 
        const car = await Car.findById(carId)
        if(car.owner.toString() !== _id.toString()){
            return res.json({success:false,message:"Unauthorized Activity"})
        }
        car.isAvailable = ! car.isAvailable
        await car.save()
        res.json({success:true,message:"Availability Toggled"})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

export const dltCar = async (req,res) => {
    try{
        const {_id} = req.user
        const {carId} = req.body
        const car = await Car.findById(carId)
        if(car.owner.toString() !== _id.toString()){
            return res.json({success:false,message:"Unauthorized Activity"})
        }
        car.owner= null
        car.isAvailable= false
        await car.save()
        res.json({success:true,message:"Car Deleted"})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

export const getDashboardData = async(req,res) => {
    try{
        const {_id, role} = req.user

        if(role!= owner){
            return res.json({success:false, message:"Unauthorized"})
        }

        const cars = Car.find({owner: _id})
        const bookings = Booking.find({owner: _id}).populate("car").sort({createdAt: -1})
        
        const completedBookings = await Booking.find({owner: _id, status: "completed"})
        const pendingBookings = await Booking.find({owner: _id, status: "pending"})

        const monthlyRevenue = bookings.slice().filter(booking => booking.status === "confirmed")
        .reduce((acc,booking)=> acc+booking.price, 0)

        const dashboardData = {
            totalCars : cars.length,
            totalBookings : bookings.length,
            pendingBookings: pendingBookings.length,
            completedBookings : completedBookings.length,
            monthlyRevenue : monthlyRevenue,
            recentBookings: bookings.slice(0,3)
        }

        res.json({success:true, dashboardData})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}