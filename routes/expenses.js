import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// CREATE expense
router.post("/", async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const expense = new Expense({
      title,
      amount,
      category,
    });

    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all expenses
router.get("/", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

export default router;
