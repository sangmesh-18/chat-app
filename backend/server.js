import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoute from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'
import userRoute from "./routes/user.route.js"

import connectDB from './db/db.js';
import { app, server } from './socket/socket.js';




const port=process.env.PORT || 4000;

const __dirname =path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authRoute)
app.use("/api/message",messageRoute)
app.use("/api/user",userRoute)

 app.use(express.static(path.join(__dirname,"/frontend/dist")))

 app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))  // serve the frontend build as static file
 })

app.get('/',(req,res)=>{
    res.send('Hello, World!')
})


server.listen(port,()=>{
    connectDB()
    console.log(`Server is running on port ${port}`);
})