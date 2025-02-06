import express from 'express';
import { taskControllers } from '../controllers/taskControllers.js';

export const taskRoutes = express.Router();


taskRoutes.get('/', taskControllers.getAllTask);
taskRoutes.post('/add', taskControllers.addTask);
taskRoutes.delete('/delete/:id', taskControllers.deleteTask);
taskRoutes.put('/update/:id', taskControllers.updateTask);


