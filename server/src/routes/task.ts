import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/task";

const router = express.Router();

// Route to create a new task
router.post("/create", createTask);

// Route to get all tasks
router.get("/get", getTasks);

// Route to update a task
router.put("/update/:id", updateTask);

// Route to delete a task
router.delete("/delete/:id", deleteTask);

export default router;
