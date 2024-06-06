import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js'
import signUpRouter from './routes/authRouter.js'
dotenv.config();

const app = express();

//allowing to use Json and x-code
app.use(express.json());
app.use(express.urlencoded());

//Connecting to mongodb
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to Mongodb")
})
.catch((err)=>{console.log(err)});

//port
app.listen(3000, ()=>{
    console.log("Listerning on port 3000...");
})

//user route
app.use("/api/user", userRouter);

//auth route
app.use('/api/signup',signUpRouter);