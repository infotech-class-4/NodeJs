import express from "express";

import {
  register,
  login,
  find,
  findAll,
  update,
  remove,
} from "../services/userService.js";
import { auth } from "../middleware/auth.js";
import { logger } from "../middleware/logger.js";
const router = express.Router();





router.post("/register", register);
router.post("/login", login);
router.get("/:id", logger, logger, logger, logger, find);
router.get("/", auth, findAll);
router.patch("/update",  update);
router.delete("/:id", remove);

export default router;
