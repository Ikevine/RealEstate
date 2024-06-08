import mongoose from "mongoose";

//creating schema which is rules on how data are structured

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
    },
}, 
//take time for create and update
{timestamps:true}
);

const User = mongoose.model("User",userSchema);

export default User;