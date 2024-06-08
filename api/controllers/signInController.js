import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from  'bcryptjs';
import jwt from 'jsonwebtoken';

export const signIn = async (req, res, next)=>{

    const {email, password} = req.body;
    try {
        //find if the email exist
        const validUser = await User.findOne({email: email});

        if(!validUser) return next(errorHandler(404, 'User not found, I forgot'));
        
        //check the password using bcrypt
        const validPassword = await bcryptjs.compareSync(password, validUser.password);
        // 401 wrong credentials
        if(!validPassword) return next(errorHandler(401, 'invalid credentials'));
        //jwt token
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        //Don't want to send the password
        const {password: pass , ...rest} = validUser._doc;
        //save token as cookie
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
    } catch (error) {
       next(error) 
    }
}


export const google = async (req, res, next) =>{
    try {
      
      const user = await User.findOne({ email: req.body.email });
      if(user){
        
        //jwt token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        //Don't want to send the password
        const {password: pass , ...rest} = user._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
      }
      
      else{
        //generated password
        const generatedPassword = Math.rondom().toString(36).slice(-8) + Math.rondom().toString(36).slice(-8);
        console.log(" Here you can see me :::::::",generatedPassword);
        const hashPassword = bcryptjs.hashSync(generatedPassword, 10);
        
        const newUser = new User({name: req.body.name.split(" ").join("").toLowerCase()+ Math.rondom().toString(36).slice(-4), email: req.body.email, password:  hashPassword, avatar: req.body.photo});
        await newUser.save();
         //jwt token
         const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
         //Don't want to send the password
         const {password: pass , ...rest} = user._doc;
         res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
      }
    }
     catch (error) {
      next(error)
    }
  
  }