import express from "express";

import {
  register,
  login,
  find,
  findAll,
  update,
  remove,
  checkUserByToken,
} from "../services/userService.js";
import { auth } from "../middleware/auth.js";
import { logger } from "../middleware/logger.js";
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/:id", logger, logger, logger, logger, find);
userRouter.get("/", auth, findAll);
userRouter.patch("/update", update);
userRouter.delete("/:id", remove);
userRouter.get("/check/me", checkUserByToken);

export default userRouter;
