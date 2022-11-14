"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserTakss = exports.loginUser = exports.updateUser = exports.deleteUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const user_1 = require("../models/user");
const tasks_1 = require("../models/tasks");
const auth_1 = require("../services/auth");
// get all users
const getAllUsers = async (req, res) => {
    user_1.User.findAll().then((response) => {
        res.status(200).json(response);
    });
    // let userFound = await User.findAll();
    // res.status(200).json(userFound)
};
exports.getAllUsers = getAllUsers;
// get User by id
const getUser = async (req, res) => {
    let userId = req.params.id;
    let userFound = await user_1.User.findByPk(userId).then((response) => {
        res.status(200).json(response);
    });
};
exports.getUser = getUser;
// create User
const createUser = async (req, res) => {
    let newUser = req.body;
    try {
        if (newUser.username && newUser.password) {
            let hashedPassword = await (0, auth_1.hashPassword)(newUser.password);
            newUser.password = hashedPassword;
            let created = await user_1.User.create(newUser);
            res.status(201).json({
                username: created.username,
                userId: created.userId,
            });
        }
        else {
            res.status(400).send("Username and password required");
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.createUser = createUser;
// delete User
const deleteUser = async (req, res) => {
    let userId = req.params.id;
    let userFound = await user_1.User.findByPk(userId);
    if (userFound) {
        await user_1.User.destroy({
            where: { userId: userId },
        }).then((response) => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
};
exports.deleteUser = deleteUser;
// update to update completed- User
const updateUser = async (req, res) => {
    let userId = req.params.id;
    let userBody = req.body;
    let userFound = await user_1.User.findByPk(userId);
    // console.log(userFound);
    if (userFound) {
        await user_1.User.update(userBody, {
            where: {
                userId: userId,
            },
        }).then((response) => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
};
exports.updateUser = updateUser;
//login Child
const loginUser = async (req, res, next) => {
    let existingUser = await user_1.User.findOne({
        where: { username: req.body.username },
    });
    if (existingUser) {
        let passwordsMatch = await (0, auth_1.comparePasswords)(req.body.password, existingUser.password);
        if (passwordsMatch) {
            let token = await (0, auth_1.signUserToken)(existingUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json("Invalid password");
        }
    }
    else {
        res.status(401).json("Invalid username");
    }
};
exports.loginUser = loginUser;
// Get User Tasks
// Find User Rants
const findUserTakss = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let foundTasks = req.body;
    foundTasks.userId = user.userId;
    if (foundTasks.title) {
        let itemId = parseInt(req.params.userId);
        const posts = await tasks_1.Tasks.findAll({
            where: {
                userId: itemId,
            },
        });
        res.status(200).json(posts);
    }
    else {
        res.status(400).send();
    }
};
exports.findUserTakss = findUserTakss;
