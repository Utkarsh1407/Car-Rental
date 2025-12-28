import User from "../models/user.js"


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
    
}