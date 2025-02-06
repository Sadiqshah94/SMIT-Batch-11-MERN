import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './db/dbConnection.js';
import router from './routes/routes.js';

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());


//health checks

app.get('/',(req,res)=>{
    res.status(200).json({message: 'API is running'});
})

// routes
app.use('/api',router)





dbConnection()
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})