import cors from 'cors';

import express from 'express';
import mongoose from 'mongoose';



import dotenv from 'dotenv';
import { taskRoutes } from './routes/taskRoutes.js';




dotenv.config();
const PORT = process.env.PORT || 8080;
const db = process.env.MONGODB_URI

console.log('');

const app = express();
app.use(express.json())
app.use(cors())




// starter server url 
app.get('/', (req,res) => {
    res.send("welcome to backend")
})

// routes defined 
app.use('/tasks', taskRoutes);



// db connections 
const connectToDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
    }
};

connectToDB();

// server connections 
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})