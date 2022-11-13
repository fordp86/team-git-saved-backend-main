import {NextFunction, Request, Response, Router} from 'express';
import { createDiscussion, deleteDiscussion, getAllDiscussions, getDiscussion, updateDiscussion } from '../controllers/discussionController';

const router = Router();



router.get('/', getAllDiscussions);
router.post('/', createDiscussion);
router.get('/:id', getDiscussion);
router.put('/:id', updateDiscussion);
router.delete('/:id', deleteDiscussion)


export default router;