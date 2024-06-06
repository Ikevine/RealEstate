import User from "../models/userModel.js";
import bcryptjs from  'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signUp =  async (req, res, next)=>{
    //need to save user to databse
    const {name , email , password} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({name, email, password: hashPassword});
    try{
        await newUser.save();
        res.status(201).json({msg: "user created successfful"})
    }
    catch(error){
      next(errorHandler(550, 'Error from function'));
    }
    
}