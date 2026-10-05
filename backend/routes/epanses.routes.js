import { changeExpanses, createExpanses, deleteExpanses, getAllExpanses, getByIdExpanses , getSummary } from "../controllers/expenses.controller.js";
import {categoryAndExpenses} from "../controllers/expenses.controller.js"
import express from "express";

const router = express.Router();

router.post("/",createExpanses);
router.get("/",getAllExpanses);
router.get("/category", categoryAndExpenses);
router.get("/summary", getSummary);
router.get("/:id",getByIdExpanses);
router.put("/:id",changeExpanses);
router.delete("/:id",deleteExpanses);


export default router;