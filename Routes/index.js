import express from 'express';
import taskRoutes from './routes/tasks/taskRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';



//app configuration
const app = express();

//env configuration
dotenv.config();


//middlewares
app.use(cors());
app.use(express.json());



//starter for check life 
app.get('/', (req, res) => {
    res.send("welcome")
})

// routes 
app.use('/tasks', taskRoutes);


const PORT = process.env.PORT || 8080;





// server config 
app.listen(PORT,() => {
    console.log(`Server started ${PORT}`)
})