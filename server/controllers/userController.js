import bcrypt from "bcrypt"
import User from "../models/user.js"
import jwt from "jsonwebtoken"

const genToken = (userId) => {
    const payload = userId
    return jwt.sign(payload,process.env.JWT_SECRET)
} 
export const regUser= async (req,res) => {
    try{
        const {name,email,password}= req.body
        if(!email || !name || !password || password.length<8 ){
            return res.json({success:false,
                message:"Fill all the details."
            })
        }
        const userExist = await User.findOne({email})
        if(userExist){
            return res.json({
                success:false,
                message:"User already exists"
            })
        }

        const hashPassword= await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashPassword})
        const token = genToken(user._id.toString())
        res.json({success:true,token})
    }catch(error){
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}  

export const loginUser= async (req,res) => {
    try{
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.json({
                success:false,
                message:"User does not exist."
            })
        }
        const isMatch= await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Incorrect Password"})
        }
        const token = genToken(user._id.toString())
        return res.json({
            success:true,
            token
        })
    }catch(error){
        return res.json({success:false,message:error.message})
    }
}

export const getUserData= async (req,res) => {
    try{
        const {user} = req
        res.json({success:true,user})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

