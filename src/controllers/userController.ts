import { RequestHandler } from "express";
import { User } from "../models/user";
import { Tasks } from "../models/tasks";
import {
  comparePasswords,
  hashPassword,
  signUserToken,
  verifyUser,
} from "../services/auth";
import { Household } from "../models/household";

// get all users

export const getAllUsers: RequestHandler = async (req, res) => {
  User.findAll().then((response) => {
    res.status(200).json(response);
  });

  // let userFound = await User.findAll();
  // res.status(200).json(userFound)
};

// get User by id

export const getUser: RequestHandler = async (req, res) => {
  let userId = req.params.id;

  let userFound = await User.findByPk(userId).then((response) => {
    res.status(200).json(response);
  });
};

// create User
export const createUser: RequestHandler = async (req, res) => {
  let newUser: User = req.body;

  try {
    if (newUser.username && newUser.password) {
      let hashedPassword = await hashPassword(newUser.password);
      newUser.password = hashedPassword;
      let created = await User.create(newUser);
      res.status(201).json({
        username: created.username,
        userId: created.userId,
      });
    } else {
      res.status(400).send("Username and password required");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// delete User
export const deleteUser: RequestHandler = async (req, res) => {
  let userId = req.params.id;

  let userFound = await User.findByPk(userId);

  if (userFound) {
    await User.destroy({
      where: { userId: userId },
    }).then((response) => {
      res.status(200).json();
    });
  } else {
    res.status(404).send();
  }
};

// update to update completed- User

export const updateUser: RequestHandler = async (req, res) => {
  let userId = req.params.id;
  let userBody = req.body;

  let userFound = await User.findByPk(userId);
  // console.log(userFound);

  if (userFound) {
    await User.update(userBody, {
      where: {
        userId: userId,
      },
    }).then((response) => {
      res.status(200).send(response);
    });
  } else {
    res.status(404).send();
  }
};

//login Child
export const loginUser: RequestHandler = async (req, res, next) => {
  let existingUser: User | null = await User.findOne({
    where: { username: req.body.username },
  });

  if (existingUser) {
    let passwordsMatch = await comparePasswords(
      req.body.password,
      existingUser.password
    );

    if (passwordsMatch) {
      let token = await signUserToken(existingUser);
      res.status(200).json({ token });
    } else {
      res.status(401).json("Invalid password");
    }
  } else {
    res.status(401).json("Invalid username");
  }
};

// Get User Tasks
// Find User Rants
export const findUserTakss: RequestHandler = async (req, res, next) => {
  let user: User | null = await verifyUser(req);

  if (!user) {
    return res.status(403).send();
  }

  let foundTasks: Tasks = req.body;
  foundTasks.userId = user.userId;

  if (foundTasks.title) {
    let itemId = parseInt(req.params.userId);

    const posts = await Tasks.findAll({
      where: {
        userId: itemId,
      },
    });
        res.status(200).json(posts);
    }
    else {
        res.status(400).send();
    }
}
