import { RequestHandler, response } from "express";
import { Discussion } from "../models/discussion";

//get All discussion

export const getAllDiscussions: RequestHandler = async (req, res) => {
    Discussion.findAll().then(response => {
        res.status(200).json(response)
    })
}



// get discussion by id

export const getDiscussion: RequestHandler = async (req, res) => {
    let discussionId = req.params.id;

    let discussionFound = await Discussion.findByPk(discussionId).then(response => {
        res.status(200).json(response)
    })
}


// create discussion
export const createDiscussion: RequestHandler = async (req, res) => {

    let discussion = req.body;


    if (discussion.headline) {
        try {
            let created = await Discussion.create(discussion)
            res.status(201).json(created)
        } catch (err) {
            res.status(400).send();
        }
    } else {
        res.status(400).send();
    }


}


// delete discussion
export const deleteDiscussion: RequestHandler =async (req, res) => {

    let discussionId = req.params.id;

    let discussionFound = await Discussion.findByPk(discussionId);

    if (discussionFound) {
        await Discussion.destroy({
            where: { discussionId: discussionId}
        }).then(response => {
            res.status(200).json();
        })
    } else {
        res.status(404).send();
    }

    
}


// update discusssion


export const updateDiscussion: RequestHandler = async (req, res) => {

    let discussionId = req.params.id;
    let discussionBody = req.body;

    let discussionFound = await Discussion.findByPk(discussionId);
// console.log(discussionFound);



    if (discussionFound) {
        await Discussion.update(discussionBody, {
            where: {
                discussionId: discussionId
            }
        }).then(response => {
            res.status(200).send(response)
        })
    } else {
        res.status(404).send();
    }


    
}

