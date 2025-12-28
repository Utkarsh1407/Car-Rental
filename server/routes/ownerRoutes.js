import express from "express"
import { protect } from "../middleWare/auth.js"
import { addCar, changeRoleToOwner, dltCar, getOwnerCars, toggleAvailability } from "../controllers/ownerController.js"
import upload from "../middleWare/multer.js"

const ownerRouter= express.Router()

ownerRouter.post('/change-role',protect,changeRoleToOwner)
ownerRouter.post('/add-car', upload.single("image"), protect, addCar)
ownerRouter.get('/get-cars',protect,getOwnerCars)
ownerRouter.post('/delete-car',protect,dltCar)
ownerRouter.post('/toggle-availability',protect,toggleAvailability)

export default ownerRouter