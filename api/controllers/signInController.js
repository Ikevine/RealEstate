import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signIn = async (req, res, next)=>{

    const {email, password} = req.body;
    try {
        //find if the email exist
        const validUser = await User.findOne({email});

        if(!validUser) return next(errorHandler(404, 'User not found'));
        
        //check the password using bcrypt
        const validPassword = await bcryptjs.compareSync(password, validUser.password);
        // 401 wrong credentials
        if(!validPassword) return next(errorHandler(401, 'invalid credentials'));
        //jwt token
        const token = jwt.sign({id: validUser.id}, process.env.JWT_SECRET);
        //Don't want to send the password
        const {password: pass , ...rest} = validUser._doc;
        //save token as cookie
        res.cookie('access_token', token,{httpOnly: true}).status(200).json(validUser);
    } catch (error) {
       next(error) 
    }
}