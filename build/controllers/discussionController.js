"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDiscussion = exports.deleteDiscussion = exports.createDiscussion = exports.getDiscussion = exports.getAllDiscussions = void 0;
const discussion_1 = require("../models/discussion");
//get All discussion
const getAllDiscussions = async (req, res) => {
    discussion_1.Discussion.findAll().then(response => {
        res.status(200).json(response);
    });
};
exports.getAllDiscussions = getAllDiscussions;
// get discussion by id
const getDiscussion = async (req, res) => {
    let discussionId = req.params.id;
    let discussionFound = await discussion_1.Discussion.findByPk(discussionId).then(response => {
        res.status(200).json(response);
    });
};
exports.getDiscussion = getDiscussion;
// create discussion
const createDiscussion = async (req, res) => {
    let discussion = req.body;
    if (discussion.headline) {
        try {
            let created = await discussion_1.Discussion.create(discussion);
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
exports.createDiscussion = createDiscussion;
// delete discussion
const deleteDiscussion = async (req, res) => {
    let discussionId = req.params.id;
    let discussionFound = await discussion_1.Discussion.findByPk(discussionId);
    if (discussionFound) {
        await discussion_1.Discussion.destroy({
            where: { discussionId: discussionId }
        }).then(response => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
};
exports.deleteDiscussion = deleteDiscussion;
// update discusssion
const updateDiscussion = async (req, res) => {
    let discussionId = req.params.id;
    let discussionBody = req.body;
    let discussionFound = await discussion_1.Discussion.findByPk(discussionId);
    // console.log(discussionFound);
    if (discussionFound) {
        await discussion_1.Discussion.update(discussionBody, {
            where: {
                discussionId: discussionId
            }
        }).then(response => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
};
exports.updateDiscussion = updateDiscussion;
