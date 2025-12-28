import imagekit from "../configs/imagekit.js"
import User from "../models/user.js"
import fs from "fs"
import Car from "../models/car.js"


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
        await Car.create({...car, owner:_id, image})

        res.json({success:true, message:"Car is added"})

    }catch(error){
        res.json({success:false,message:error.message})
    }
}