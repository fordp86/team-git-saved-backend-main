import { RequestHandler } from "express";
import { Rewards } from "../models/reward";


// get all tasks

export const getAllRewards: RequestHandler = async (req, res) => {
    Rewards.findAll().then(response => {
        res.status(200).json(response)
    })

    // let tasksFound = await Tasks.findAll();
    // res.status(200).json(tasksFound)

}


// get task by id

export const getReward: RequestHandler = async (req, res) => {
    let rewardId = req.params.id;

    let rewardFound = await Rewards.findByPk(rewardId).then(response => {
        res.status(200).json(response)
    })


}


// create task
export const createReward: RequestHandler = async (req, res) => {

    let reward = req.body;


    if (reward.title) {
        try {
            let created = await Rewards.create(reward)
            res.status(201).json(created)
        } catch (err) {
            res.status(400).send();
        }
    } else {
        res.status(400).send();
    }


}


// delete task
export const deleteReward: RequestHandler =async (req, res) => {

    let rewardId = req.params.id;

    let rewardFound = await Rewards.findByPk(rewardId);

    if (rewardFound) {
        await Rewards.destroy({
            where: { rewardId: rewardId}
        }).then(response => {
            res.status(200).json();
        })
    } else {
        res.status(404).send();
    }

    
}


// update to update completed


export const updateReward: RequestHandler =async (req, res) => {

    let rewardId = req.params.id;
    let taskBody = req.body;

    let rewardFound = await Rewards.findByPk(rewardId);
// console.log(taskFound);

    if (rewardFound) {
        await Rewards.update(taskBody, {
            where: {
                rewardId: rewardId
            }
        }).then(response => {
            res.status(200).send(response)
        })
    } else {
        res.status(404).send();
    }


    
}