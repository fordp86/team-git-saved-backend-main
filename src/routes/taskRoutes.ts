import {NextFunction, Request, Response, Router} from 'express';
import { getAllTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/tasksController';

const router = Router();



router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask)


export default router;