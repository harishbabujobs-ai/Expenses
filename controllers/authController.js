const bcrypt =
require("bcrypt");

const jwt =
require("jsonwebtoken");

const User =
require("../models/User");

exports.register =
async(req,res)=>{

 const hash =
 await bcrypt.hash(
   req.body.password,
   10
 );

 await User.create({

   name:req.body.name,
   email:req.body.email,
   password:hash

 });

 res.json({
   message:
   "Registered"
 });

};

exports.login =
async(req,res)=>{

 const user =
 await User.findOne({
   email:req.body.email
 });

 if(!user){

   return res.status(400)
   .json({
     message:"User Not Found"
   });

 }

 const match =
 await bcrypt.compare(
   req.body.password,
   user.password
 );

 if(!match){

   return res.status(400)
   .json({
     message:"Invalid Password"
   });

 }

 const token =
 jwt.sign(
 {
   userId:user._id
 },
 process.env.JWT_SECRET
 );

 res.json({
   token
 });

};