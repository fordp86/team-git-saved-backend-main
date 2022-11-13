import { NextFunction, Request, Response, Router } from "express";
import {
  createReward,
  deleteReward,
  getAllRewards,
  getReward,
  updateReward,
} from "../controllers/rewardController";

const router = Router();

router.get("/", getAllRewards);
router.post("/", createReward);
router.get("/:id", getReward);
router.put("/:id", updateReward);
router.delete("/:id", deleteReward);

export default router;
