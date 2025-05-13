import express from "express";
import { generateExcuse } from "../controllers";

const router = express.Router();

// GET route for generating excuse
router.get("/", generateExcuse);

export default router;
