import {NextFunction, Request, Response, Router} from 'express';
import { createHousehold, deleteHousehold, getAllHouseholds, getHousehold, updateHousehold } from '../controllers/householdController';

const router = Router();



router.get('/', getAllHouseholds);
router.post('/', createHousehold);
router.get('/:id', getHousehold);
router.put('/:id', updateHousehold);
router.delete('/:id', deleteHousehold)


export default router;