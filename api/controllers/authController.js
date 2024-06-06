import User from "../models/userModel.js";
import bcryptjs from  'bcryptjs';

export const signUp =  async (req, res)=>{
    //need to save user to databse
    const {name , email , password} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({name, email, password: hashPassword});
    try{
        await newUser.save();
        res.status(201).json({msg: "user created successfful"})
    }
    catch(e){
      res.status(500).json(e.message);  
    }
    
}