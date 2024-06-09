import User from "../models/userModel"
import { errorHandler } from "../utils/error"
import bcryptjs from 'bcryptjs'
export const getUser = (req, res)=>{
    res.json({name:"me kevine"})
}

export const updateUser = async(req, res, next)=>{

    if(req.user.id !== req.params.id) return next(errorHandler(401, "You can only update your account"));
    try {
        if(req.body.password){
           req.body.password = bcryptjs.hashSync(req.body.password, 10) 
        }
        //save the user
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password:  req.body.password,
                avatar: req.body.avatar,
            },
        },{new: true} )
        //return and save the user with new information
        const {password, ...rest} = updateUser._doc;
        res.status(200).json(rest);
        
    } catch (error) {
        
    }
}