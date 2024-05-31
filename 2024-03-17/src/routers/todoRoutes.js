import express from "express";
import { auth } from "../middleware/auth.js";
import {
  create,
  find,
  findAll,
  update,
  remove,
} from "../services/todoService.js";
const todoRouter = express.Router();

todoRouter.get("/:id", auth, find); // localhost:4000/todos/6457ac90127c62460a34c6d2

todoRouter.post("/findall", auth, findAll); // localhost:4000/todos/findall
todoRouter.post("/create", auth, create); // localhost:4000/todos/create
todoRouter.patch("/:id/update", auth, update); // localhost:4000/todos/6457ac90127c62460a34c6d2/update
todoRouter.delete("/:id/delete", auth, remove); // localhost:4000/todos/6457ac90127c62460a34c6d2/delete

export default todoRouter;
