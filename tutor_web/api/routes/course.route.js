import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses
} from "../controllers/course.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createCourse);
router.delete("/:id", verifyToken, deleteCourse);
router.get("/single/:id", getCourse);
router.get("/", getCourses);

export default router;