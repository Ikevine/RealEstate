import mongoose from "mongoose";

//creating schema which is rules on how data are structured

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    passsword:{
        type: String,
        required: true
    }
}, 
//take time for create and update
{timestamps:true}
);

const User = mongoose.model("User",userSchema);

export default User;