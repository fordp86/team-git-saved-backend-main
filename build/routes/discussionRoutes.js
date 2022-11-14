"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const discussionController_1 = require("../controllers/discussionController");
const router = (0, express_1.Router)();
router.get('/', discussionController_1.getAllDiscussions);
router.post('/', discussionController_1.createDiscussion);
router.get('/:id', discussionController_1.getDiscussion);
router.put('/:id', discussionController_1.updateDiscussion);
router.delete('/:id', discussionController_1.deleteDiscussion);
exports.default = router;
