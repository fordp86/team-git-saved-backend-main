import { db } from './models/index'
import morgan from 'morgan';
import taskRoutes from './routes/taskRoutes';
import userRoutes from './routes/userRoutes';
import householdRoutes from './routes/householdRoutes';
import rewardRoutes from './routes/rewardRoutes';
import discussionRoutes from './routes/discussionRoutes'
import express, { NextFunction, Request, Response } from 'express'
const { Sequelize } = require("sequelize");

const cors = require("cors");


const app = express();

app.use(cors());

app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/tasks', taskRoutes)
app.use('/users', userRoutes)
app.use('/household', householdRoutes)
app.use('/rewards', rewardRoutes)
app.use('/discussion', discussionRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).end();
});

db.sync({alter: true}).then(() => {
  console.log("connected to database");
});

app.listen(3001);
