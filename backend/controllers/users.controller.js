import {User} from "../models/users.model.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
export const userRegister = async(req , res)=>{

   const {fullName , email , password} = req.body;

  try {
     if(!fullName ||!email ||!password){
       return res.status(401).json({
        success:false,
        message:"required all fields"
       })
   }
  const hashPassword = await bcrypt.hash(password , 10);



  const user =  await User.create({
    fullName,
    email,
    password:hashPassword
   })


   return res.status(201).json({
    success:true,
    message:"user registered",
    user
   })
  } catch (error) {
    console.log(error)
  }
}


export const userLogin = async(req , res)=>{

   const { email , password} = req.body;
try {
      if(!email || !password){
       return res.status(401).json({
        success:false,
        message:"required all fields"
       })
   }

  const user =  await User.findOne({email});

  if(!user){
    return res.status(401).json({
        success:false,
        message:"User does not exist"
    })
 }

 
  const isPassword = await bcrypt.compare(password , user.password);
   
 if(!isPassword){
    return res.status(401).json({
        success:false,
        message:"Invalid user email and password"
    })
 }

 const token = await JWT.sign({userId:user._id},process.env.SECRET_KEY);
 
 return res.status(200).cookie("token",token,{httpOnly:true ,maxAge:24*60*60*1000}).json({
    success:true,
    message:"user login successfully",
    user
   }) 
} catch (error) {

    console.log(error)
    
}

}

export const userLogout = async(req , res)=>{
  try {
     res.clearCookie("token");
     return res.status(200).cookie("token","",{maxAge:0},{httpOnly:true}).json({
    success:true,
    message:"user logout",
  
   })
  } catch (error) {
    console.log(error)
  }
  
}



