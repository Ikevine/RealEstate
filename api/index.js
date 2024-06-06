import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js'
dotenv.config();

const app = express();

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

//API route

app.use("/api/user", userRouter)