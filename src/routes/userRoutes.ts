import { NextFunction, Request, Response, Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  loginUser,
  updateUser,
} from "../controllers/userController";

const router = Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/login", loginUser);

export default router;
