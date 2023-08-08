import express from "express";
import { getAllTasks, createTask } from "../controllers/todo-controller.js";

const toDoRouter = express.Router();

toDoRouter.get("/todo", getAllTasks);
toDoRouter.post("/todo", createTask);

export default toDoRouter;
