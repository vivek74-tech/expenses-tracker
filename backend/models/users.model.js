import mongoose from "mongoose";
import { timeStamp } from "node:console";

const userShema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

export const User = mongoose.model("User",userShema);

