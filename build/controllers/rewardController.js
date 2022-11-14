"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReward = exports.deleteReward = exports.createReward = exports.getReward = exports.getAllRewards = void 0;
const reward_1 = require("../models/reward");
// get all tasks
const getAllRewards = async (req, res) => {
    reward_1.Rewards.findAll().then(response => {
        res.status(200).json(response);
    });
    // let tasksFound = await Tasks.findAll();
    // res.status(200).json(tasksFound)
};
exports.getAllRewards = getAllRewards;
// get task by id
const getReward = async (req, res) => {
    let rewardId = req.params.id;
    let rewardFound = await reward_1.Rewards.findByPk(rewardId).then(response => {
        res.status(200).json(response);
    });
};
exports.getReward = getReward;
// create task
const createReward = async (req, res) => {
    let reward = req.body;
    if (reward.title) {
        try {
            let created = await reward_1.Rewards.create(reward);
            res.status(201).json(created);
        }
        catch (err) {
            res.status(400).send();
        }
    }
    else {
        res.status(400).send();
    }
};
exports.createReward = createReward;
// delete task
const deleteReward = async (req, res) => {
    let rewardId = req.params.id;
    let rewardFound = await reward_1.Rewards.findByPk(rewardId);
    if (rewardFound) {
        await reward_1.Rewards.destroy({
            where: { rewardId: rewardId }
        }).then(response => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
};
exports.deleteReward = deleteReward;
// update to update completed
const updateReward = async (req, res) => {
    let rewardId = req.params.id;
    let taskBody = req.body;
    let rewardFound = await reward_1.Rewards.findByPk(rewardId);
    // console.log(taskFound);
    if (rewardFound) {
        await reward_1.Rewards.update(taskBody, {
            where: {
                rewardId: rewardId
            }
        }).then(response => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
};
exports.updateReward = updateReward;
