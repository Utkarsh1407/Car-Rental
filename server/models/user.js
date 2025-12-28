import mongoose from "mongoose"

const user_schema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:["owner","user"],default:"user"},
    img:{type:String,default:""}
},{timestamps:true})

const User = mongoose.model("User",user_schema)

export default User