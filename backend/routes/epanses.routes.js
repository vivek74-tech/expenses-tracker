import { changeExpanses, createExpanses, deleteExpanses, getAllExpanses, getByIdExpanses , getSummary } from "../controllers/expenses.controller.js";
import {categoryAndExpenses} from "../controllers/expenses.controller.js"
import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/",authMiddleware,createExpanses);
router.get("/",authMiddleware,getAllExpanses);
router.get("/category",authMiddleware,categoryAndExpenses);
router.get("/summary",authMiddleware, getSummary);
router.get("/:id",authMiddleware,getByIdExpanses);
router.put("/:id",authMiddleware,changeExpanses);
router.delete("/:id",authMiddleware,deleteExpanses);


export default router;