import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js'
import signUpRouter from './routes/authRouter.js'
import signInRouter from './routes/signInRouter.js'
import signOutRouter from './routes/authRouter.js'
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

//allowing to use Json and x-code
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
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

//SignIn route
app.use('/api/signin', signInRouter);

//Auth by google
app.use('/api/auth/google', signOutRouter)
//middleware to handle errors
app.use((err, req, res , next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});