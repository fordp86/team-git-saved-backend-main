import { RequestHandler } from "express";
import { Tasks } from "../models/tasks";
import { User } from "../models/user";
import { verifyUser } from "../services/auth";

// get all tasks

export const getAllTasks: RequestHandler = async (req, res) => {
  Tasks.findAll().then((response) => {
    res.status(200).json(response);
  });

  // let tasksFound = await Tasks.findAll();
  // res.status(200).json(tasksFound)
};

// get task by id

export const getTask: RequestHandler = async (req, res) => {
  let taskId = req.params.id;

  let taskFound = await Tasks.findByPk(taskId).then((response) => {
    res.status(200).json(response);
  });
};

//Create Tasks
export const createTask: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (!user) {
    return res.status(403).send();
  }

  let newTask: Tasks = req.body;
  newTask.userId = user.userId;

  if (newTask.title) {
    let created = await Tasks.create(newTask);
    res.status(201).json(created);
  } else {
    res.status(400).send();
  }
};

// delete task
export const deleteTask: RequestHandler = async (req, res) => {
  let taskId = req.params.id;

  let taskFound = await Tasks.findByPk(taskId);

  if (taskFound) {
    await Tasks.destroy({
      where: { taskId: taskId },
    }).then((response) => {
      res.status(200).json();
    });
  } else {
    res.status(404).send();
  }
};

// update to update completed

export const updateTask: RequestHandler = async (req, res) => {
  let taskId = req.params.id;
  let taskBody = req.body;

  let taskFound = await Tasks.findByPk(taskId);
  // console.log(taskFound);

  if (taskFound) {
    await Tasks.update(taskBody, {
      where: {
        taskId: taskId,
      },
    }).then((response) => {
      res.status(200).send(response);
    });
  } else {
    res.status(404).send();
  }
};
